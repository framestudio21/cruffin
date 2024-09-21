import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles/pop.module.css";
export default function Pop() {
    const [isVisible, setIsVisible] = useState(false); // initially hidden
    const [activeComponent, setActiveComponent] = useState(""); // To track which component is active (login, signup, or otp)
    const [formData, setFormData] = useState({
      email: "",
      name: "",
      otp: "",
    });
    const [emailError, setEmailError] = useState("");
    const [emailVerified, setEmailVerified] = useState(false);
  
    useEffect(() => {
      // Show the popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
  
      return () => clearTimeout(timer); // Clean up the timer when the component unmounts
    }, []);
  
    // Hide the popup on button click and store in localStorage
    const handleStayLogout = () => {
      setIsVisible(false);
      localStorage.setItem("stayLoggedOut", "true");
    };
  
    const handleLoginClick = () => {
      setActiveComponent("login"); // Show login body
      resetFormData(); // Reset form data on component switch
    };
  
    const handleSignupClick = () => {
      setActiveComponent("signup"); // Show signup body
      resetFormData(); // Reset form data on component switch
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
      // Simple Gmail validation
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
        // If email is verified, show the OTP verification body
        setActiveComponent("otp");
        console.log("Form Data:", formData);
      }
    };

  return (
    <>
      {/* Conditionally render the login/signup bodies based on the state */}
      {isVisible && (
        <div className={styles.popmainbody}>

          {/* pop body */}
          {!activeComponent && (
            <div className={styles.popdiv}>
              <div className={styles.titlediv}>
                <div className={styles.title}>Welcome Back</div>
                <div className={styles.text}>
                  Log in or sign up to get smarter responses, buy delicious
                  cakes, cruffins, cupcakes, and much more.
                </div>
              </div>
              <div className={styles.btndiv}>
                <button className={styles.loginbtn} onClick={handleLoginClick}>
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

              {/* Login Form */}
              <form className={styles.middleformsection} onSubmit={handleSubmit}>
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
                  {emailError && <div className={styles.error}>{emailError}</div>}
                </div>
                <div className={styles.fielddiv}>
                  <button type="submit" className={styles.submitbtn}  
                  disabled={!emailVerified} // Disable button if email is not verified
                  >
                    Send <span className={styles.btnspan}>OTP</span>
                  </button>
                </div>
                {/* Other form components */}
                <div className={styles.fielddiv}>
                  <div className={styles.orbardiv}>
                    <div className={styles.bar}></div>
                    <div className={styles.or}>or</div>
                    <div className={styles.bar}></div>
                  </div>
                </div>
                <div className={styles.fielddiv}>
                  <button className={styles.googlediv}>
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
                <div className={styles.textfielddiv}>
                  already have an account{" "}
                  <span className={styles.link} onClick={handleSignupClick}>
                    sign up
                  </span>
                </div>
              </form>
              <button
                className={styles.staylogoutbtn}
                onClick={handleStayLogout}
              >
                Stay Logged Out
              </button>
            </div>
          )}

          {/* signup body */}
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
              {/* Signup Form */}
              <form className={styles.middleformsection} onSubmit={handleSubmit}>
                <div className={styles.fielddiv}>
                <input
                    type="text"
                    placeholder="Your name"
                    name="username"
                    value={formData.name}
                    onChange={handleNameChange}
                    className={styles.inputfield}
                  />
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    name="loginemail"
                    value={formData.email}
                    onChange={handleEmailChange}
                    className={styles.inputfield}
                  />
                  {emailError && <div className={styles.error}>{emailError}</div>}
                </div>
                <div className={styles.fielddiv}>
                  <button type="submit" className={styles.submitbtn}
                   disabled={!emailVerified} // Disable button if email is not verified
                  >
                    Send <span className={styles.btnspan}>OTP</span>
                  </button>
                </div>
                {/* Other form components */}
                <div className={styles.fielddiv}>
                  <div className={styles.orbardiv}>
                    <div className={styles.bar}></div>
                    <div className={styles.or}>or</div>
                    <div className={styles.bar}></div>
                  </div>
                </div>
                <div className={styles.fielddiv}>
                  <button className={styles.googlediv}>
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
                <div className={styles.textfielddiv}>
                  already have an account{" "}
                  <span className={styles.link} onClick={handleLoginClick}>
                    Log in
                  </span>
                </div>
              </form>
              <button
                className={styles.staylogoutbtn}
                onClick={handleStayLogout}
              >
                Stay Logged Out
              </button>
            </div>
          )}

          {/* otpverify body */}
          {activeComponent === "otp" && (
          <div className={styles.loginotpverifybody}>
              <div className={styles.topsection}>
                <div className={styles.titlesection}>
                  <div className={styles.title}>OTP Verification</div>
                  <i className={`material-icons ${styles.icon}`} aria-label="Close" onClick={handleStayLogout}>
                    close
                  </i>
                </div>
                <div className={styles.text}>
                  Enter the OTP sent to your email address
                </div>
                <div className={styles.text1}>
                  <div className={styles.emailtext}>
                    info.framestudio21@gmail.com
                  </div>
                  <Link href="#" className={styles.edittext}>
                    edit
                  </Link>
                </div>
              </div>
    
              <form className={styles.middleformsection}>
    
              <div className={styles.fielddiv}>
                  <input
                    type="text"
                    placeholder="type OTP here"
                    name="loginotp"
                    className={styles.inputfield}
                  />
                </div>
    
                <div className={styles.fielddiv}>
                  <button type="submit" className={styles.submitbtn}>
                    continue
                  </button>
                </div>
    
                <div className={styles.timerdiv}>
                    <div className={styles.timer}>09:56</div>
                    <div className={styles.vbar}></div>
                    <div className={styles.resendotp}>resend the OTP</div>
                </div>
    
                <div className={styles.fielddiv}>
                  <div className={styles.orbardiv}>
                    <div className={styles.bar}></div>
                    <div className={styles.or}>or</div>
                    <div className={styles.bar}></div>
                  </div>
                </div>
                <div className={styles.fielddiv}>
                  <button className={styles.googlediv}>
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
    
    
              <button className={styles.staylogoutbtn} onClick={handleStayLogout}>Stay Logged Out</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
