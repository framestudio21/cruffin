import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css";

export default dynamic(() => Promise.resolve(Login), { ssr: false });

function Login() {
  const { data: session, status } = useSession(); // Added status to track session loading
  const [formData, setFormData] = useState({});
  const router = useRouter();

  // Log formData whenever it changes
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      console.log("User Data:", formData);
    }
  }, [formData]);

  // Handle Google/Facebook login redirection
  // useEffect(() => {
  //   if (session && status === "authenticated") {
  //     router.push("/"); // Redirect to root after social login
  //   }
  // }, [session, status, router]);

  // Auto logout after 30 seconds for trial purposes and redirect to login page
  // useEffect(() => {
  //   if (session && status === "authenticated") {
  //     const timer = setTimeout(async () => {
  //       await signOut({ redirect: true }); // Ensure no redirection occurs here
  //       router.push("/login"); // Manually redirect to login page
  //     }, 30000); // 30 seconds

  //     return () => clearTimeout(timer); // Clear timeout if component unmounts
  //   }
  // }, [session, status, router]);

  // Function to handle email/password login
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
      setFormData({
        email,
        name: session?.user?.name || "User",
        image: session?.user?.image || "/default-image.png",
      });
      router.push("/"); // Redirect to homepage
    } else {
      console.error(res.error);
    }
  };

  // Function to handle social login (Google/Facebook)
  const handleSocialLogin = async (provider) => {
    const res = await signIn(provider, { redirect: false });

    if (res?.ok) {
      setFormData({
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
      });
    } else {
      console.error(res.error);
    }
  };

  return (
    <>
      <div className={styles.loginsignupmainbody}>
        {/* Back Button */}
        <div className={styles.backbtn} onClick={() => router.back()}>
          <i className={`material-icons ${styles.icon}`} aria-label="arrow_back">
            arrow_back
          </i>
          back
        </div>

        <div className={styles.loginbody}>
          <div className={styles.name}>login</div>

          {session ? (
            <div className={styles.userInfo}>
              <p>Welcome, {session.user.name}!</p>
              <Image
                src={session.user.image}
                width={50}
                height={50}
                alt="User image"
                className={styles.userImage}
              />
              <button onClick={() => signOut()} className={styles.submitbtn}>
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <form className={styles.form} onSubmit={handleLogin}>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  className={styles.input}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="enter your pass"
                  className={styles.input}
                />
                <button type="submit" className={styles.submitbtn}>
                  submit
                </button>
              </form>

              <div className={styles.text1}>
                <div className={styles.text}>don't have an account.</div>
                <Link href="#" className={styles.a}>
                  sign up
                </Link>
              </div>

              <div className={styles.text2}>
                <div className={styles.bar}></div>
                <div className={styles.text}>or</div>
                <div className={styles.bar}></div>
              </div>

              <div className={styles.socialflatfromdiv}>
                <div
                  className={styles.googlediv}
                  onClick={() => handleSocialLogin("google")}
                >
                  <div className={styles.text}>continue with google</div>
                  <Image
                    src="/image/google-icon.svg"
                    width={50}
                    height={50}
                    alt="google-icon"
                    className={styles.imageicon}
                  />
                </div>

                <div
                  className={styles.facebookdiv}
                  onClick={() => handleSocialLogin("facebook")}
                >
                  <div className={styles.text}>continue with facebook</div>
                  <Image
                    src="/image/facebook-icon.svg"
                    width={50}
                    height={50}
                    alt="facebook-icon"
                    className={styles.imageicon}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
