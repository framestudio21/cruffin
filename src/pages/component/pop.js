import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

import styles from "./styles/pop.module.css";

export default function Pop() {
  const { data: session, status } = useSession();
  const [isVisible, setIsVisible] = useState(false);
  const [activeComponent, setActiveComponent] = useState("");
  const [previousComponent, setPreviousComponent] = useState(""); // Track previous form (login or signup)
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    otp: "",
  });
  const [emailError, setEmailError] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const router = useRouter();
  const [timer, setTimer] = useState(120); // 600 seconds = 10 minutes
  const [canResendOtp, setCanResendOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpMessage, setOtpMessage] = useState("");
  const [isSendingOtp, setIsSendingOtp] = useState(false);

  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      console.log("User Data:", formData);
    }
  }, [formData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleStayLogout = () => {
    setIsVisible(false);
    localStorage.setItem("stayLoggedOut", "true");
  };

  const handleLoginClick = () => {
    setActiveComponent("login");
    resetFormData();
  };

  const handleSignupClick = () => {
    setActiveComponent("signup");
    resetFormData();
  };

  const resetFormData = () => {
    setFormData({
      email: "",
      name: "",
      otp: "",
    });
    setEmailError("");
    setEmailVerified(false);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    if (!email.endsWith("@gmail.com")) {
      setEmailError("Please enter a valid Gmail address");
      setEmailVerified(false);
    } else {
      setEmailError("");
      setEmailVerified(true);
    }
  };

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleOTPChange = (e) => {
    setFormData({ ...formData, otp: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailVerified) {
      setPreviousComponent(activeComponent); // Track where the user came from
      setActiveComponent("otp");
      setTimer(120); // Reset the timer to 10 minutes
      setCanResendOtp(false);
      console.log("Form Data:", formData);
    }
  };

  useEffect(() => {
    if (session && status === "authenticated") {
      router.push("/"); // Redirect to homepage if logged in
    }
  }, [session, status, router]);

  useEffect(() => {
    if (session && status === "authenticated") {
      const timer = setTimeout(async () => {
        await signOut({ redirect: true });
        router.push("/login"); // Manually redirect to login page
      }, 30000); // 30 seconds for trial

      return () => clearTimeout(timer);
    }
  }, [session, status, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push("/");
    } else {
      console.error(res.error);
    }
  };

  const handleSocialLogin = async (provider) => {
    const res = await signIn(provider, { redirect: false });

    if (res?.ok) {
      router.push("/");
    } else {
      console.error(res.error);
    }
  };

  //  otp timer
  useEffect(() => {
    let countdown;
    if (activeComponent === "otp" && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timer === 0) {
      setCanResendOtp(true); // Allow resending OTP when timer reaches 0
    }

    return () => clearInterval(countdown); // Clear interval on component unmount
  }, [timer, activeComponent]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleResendOtp = () => {
    if (canResendOtp) {
      // Logic to resend OTP
      console.log("Resending OTP...");
      setTimer(120); // Reset timer after resending
      setCanResendOtp(false);
    }
  };

   // Function to handle editing email, redirects to login or signup
   const handleEditEmail = () => {
    setActiveComponent(previousComponent); // Go back to the previous form
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setIsSendingOtp(true);
    try {
      const res = await axios.post('/api/send-otp', { email: formData.email });
      if (res.status === 200) {
        setOtpSent(true);
        setOtpMessage("OTP sent to your email.");
      }
    } catch (error) {
      console.error(error);
      setOtpMessage("Failed to send OTP.");
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/verify-otp', {
        email: formData.email,
        otp: formData.otp,
      });
      if (res.status === 200) {
        setOtpVerified(true);
        setOtpMessage("OTP matched.");
      }
    } catch (error) {
      setOtpMessage("OTP did not match. Please try again.");
    }
  };

  return (
    <>
      {isVisible && (
        <div className={styles.popmainbody}>
          {session ? (

            // sign out body
            <div className={styles.userInfo}>
              <p>Welcome, {session.user.name}!</p>
              <Image
                src={session.user.image || "/default-image.png"}
                width={150}
                height={150}
                alt="User image"
                className={styles.userImage}
              />
              <button onClick={() => signOut()} className={styles.submitbtn}>
                Sign Out
              </button>
            </div>
          ) : (
            <>
              {!activeComponent && (

                // popup body
                <div className={styles.popdiv}>
                  <div className={styles.titlediv}>
                    <div className={styles.title}>Welcome Back</div>
                    <div className={styles.text}>
                      Log in or sign up to get smarter responses, buy delicious
                      cakes, cruffins, cupcakes, and much more.
                    </div>
                  </div>
                  <div className={styles.btndiv}>
                    <button
                      className={styles.loginbtn}
                      onClick={handleLoginClick}
                    >
                      Log In
                    </button>
                    <button
                      className={styles.signupbtn}
                      onClick={handleSignupClick}
                    >
                      Create Account
                    </button>
                  </div>
                  <button
                    className={styles.staylogoutbtn}
                    onClick={handleStayLogout}
                  >
                    Stay Logged Out
                  </button>
                </div>
              )}

              {/* login body */}
              {activeComponent === "login" && (
                <div className={styles.loginbody}>
                  <div className={styles.topsection}>
                    <div className={styles.titlesection}>
                      <div className={styles.title}>Get Started</div>
                      <i
                        className={`material-icons ${styles.icon}`}
                        aria-label="Close"
                        onClick={handleStayLogout}
                      >
                        close
                      </i>
                    </div>
                    <div className={styles.text}>
                      Please enter your email address to continue
                    </div>
                  </div>

                  <form
                    className={styles.middleformsection}
                    onSubmit={handleSubmit}
                  >
                    <div className={styles.fielddiv}>
                      <label className={styles.label}>Enter email address</label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        name="loginemail"
                        value={formData.email}
                        onChange={handleEmailChange}
                        className={styles.inputfield}
                      />
                      {emailError && (
                        <div className={styles.error}>{emailError}</div>
                      )}
                    </div>
                    <div className={styles.fielddiv}>
                      <button
                        type="submit"
                        className={styles.submitbtn}
                        disabled={!emailVerified}
                      >
                        Send <span className={styles.btnspan}>OTP</span>
                      </button>
                    </div>
                    <div className={styles.fielddiv}>
                      <div className={styles.orbardiv}>
                        <div className={styles.bar}></div>
                        <div className={styles.or}>or</div>
                        <div className={styles.bar}></div>
                      </div>
                    </div>
                    <div className={styles.fielddiv}>
                      <button
                        className={styles.googlediv}
                        onClick={() => handleSocialLogin("google")}
                      >
                        continue with google
                        <Image
                          src="/image/google-icon.svg"
                          width={35}
                          height={35}
                          alt="google-icon"
                          className={styles.imageicon}
                        />
                      </button>
                    </div>
                    <div className={styles.textfielddiv}>
                      by confirming, you agree to Cruffin's{" "}
                      <Link href="#" className={styles.link}>
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className={styles.link}>
                        Privacy Policy
                      </Link>
                    </div>
                  </form>
                </div>
              )}

              {/* sign up body */}
              {activeComponent === "signup" && (
                <div className={styles.signupbody}>
                  <div className={styles.topsection}>
                    <div className={styles.titlesection}>
                      <div className={styles.title}>Sign Up</div>
                      <i
                        className={`material-icons ${styles.icon}`}
                        aria-label="Close"
                        onClick={handleStayLogout}
                      >
                        close
                      </i>
                    </div>
                    <div className={styles.text}>
                      Please enter your details to continue
                    </div>
                  </div>
                  <form
                    className={styles.middleformsection}
                    onSubmit={handleSubmit}
                  >
                    <div className={styles.fielddiv}>
                      <input
                        type="text"
                        placeholder="Your name"
                        name="username"
                        value={formData.name}
                        onChange={handleNameChange}
                        className={styles.inputfield}
                      />
                    </div>
                    <div className={styles.fielddiv}>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleEmailChange}
                        className={styles.inputfield}
                      />
                      {emailError && (
                        <div className={styles.error}>{emailError}</div>
                      )}
                    </div>
                    <div className={styles.fielddiv}>
                      <button
                        type="submit"
                        className={styles.submitbtn}
                        disabled={!emailVerified}
                      >
                        Send <span className={styles.btnspan}>OTP</span>
                      </button>
                    </div>
                    <div className={styles.fielddiv}>
                      <div className={styles.orbardiv}>
                        <div className={styles.bar}></div>
                        <div className={styles.or}>or</div>
                        <div className={styles.bar}></div>
                      </div>
                    </div>
                    <div className={styles.fielddiv}>
                      <button
                        className={styles.googlediv}
                        onClick={() => handleSocialLogin("google")}
                      >
                        continue with google
                        <Image
                          src="/image/google-icon.svg"
                          width={35}
                          height={35}
                          alt="google-icon"
                          className={styles.imageicon}
                        />
                      </button>
                    </div>
                    <div className={styles.textfielddiv}>
                      by confirming, you agree to Cruffin's{" "}
                      <Link href="#" className={styles.link}>
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className={styles.link}>
                        Privacy Policy
                      </Link>
                    </div>
                  </form>
                </div>
              )}

              {activeComponent === "otp" && (
                <div className={styles.otpbody}>
                  <div className={styles.topsection}>
                    <div className={styles.titlesection}>
                      <div className={styles.title}>Verify OTP</div>
                    </div>
                  <div className={styles.text}>
                    Enter the OTP sent to your email address
                  </div>
                  <div className={styles.text1}>
                    <div className={styles.emailtext}>
                      {formData.email}
                    </div>
                    <button className={styles.edittext} onClick={handleEditEmail}>
                      edit
                    </button>
                  </div>
                  </div>

                  <form className={styles.middleformsection} onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
                    <div className={styles.fielddiv}>
                     { otpSent && (
                       <input
                       type="number"
                       placeholder="Enter OTP"
                       value={formData.otp}
                       onChange={handleOTPChange}
                       className={styles.inputfield}
                     />
                     )}
                    </div>
                    {otpMessage && <p>{otpMessage}</p>}
                    <div className={styles.fielddiv}>
                      <button
                        type="submit"
                        className={styles.submitbtn}
                        onClick={handleSubmit}
                        disabled={isSendingOtp}
                      >
                       {otpSent ? "Verify OTP" : "Send OTP"}
                       {/* verify otp */}
                      </button>
                    </div>

                  <div className={styles.timerdiv}>
                      {canResendOtp ? (
                        <button
                          className={styles.resendotpbtn}
                          onClick={handleResendOtp}
                        >
                          Resend OTP
                        </button>
                      ) : (
                        <p className={styles.timertext}>
                          Resend OTP in: <span className={styles.timer}>{formatTime(timer)}</span>
                        </p>
                      )}
                    </div>
                  </form>
                <button className={styles.staylogoutbtn} onClick={handleStayLogout}>Stay Logged Out</button>
                </div>        
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
