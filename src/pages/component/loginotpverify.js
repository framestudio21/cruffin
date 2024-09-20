import React from "react";
import Link from "next/link";

import styles from "./styles/login.module.css";
export default function LoginOtpVerify() {
  return (
    <>
      <div className={styles.loginotpverifymainbody}>
        <div className={styles.loginotpverifybody}>
          <div className={styles.topsection}>
            <div className={styles.titlesection}>
              <div className={styles.title}>OTP Verification</div>
              <i className={`material-icons ${styles.icon}`} aria-label="Close">
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


          <button className={styles.staylogoutbtn}>Stay Logged Out</button>
        </div>
      </div>
    </>
  );
}
