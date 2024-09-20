import React from "react";
import Link from "next/link";

import styles from "./styles/login.module.css";
export default function Login() {
  return (
    <>
      <div className={styles.loginmainbody}>
        <div className={styles.loginbody}>
          <div className={styles.topsection}>
            <div className={styles.titlesection}>
              <div className={styles.title}>get started</div>
              <i
                className={`material-icons ${styles.icon}`}
                aria-label="Close"
              >
                close
              </i>
            </div>
            <div className={styles.text}>
              please enter your email address to continue
            </div>
          </div>

          <form className={styles.middleformsection}>
            <div className={styles.fielddiv}>
              <label className={styles.label}>enter email address</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                name="loginemail"
                className={styles.inputfield}
              />
            </div>
            <div className={styles.fielddiv}>
              <button type="submit" className={styles.submitbtn}>
                send <span className={styles.btnspan}>otp</span>
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

          <button className={styles.staylogoutbtn}>
            Stay Logged Out
          </button>
        </div>
      </div>
    </>
  );
}
