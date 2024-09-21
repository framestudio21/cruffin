import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from "./styles/login.module.css"
export default function SignUp() {
  return (
    <>
    <div className={styles.signupmainbody}>
    <div className={styles.signupbody}>
          <div className={styles.topsection}>
            <div className={styles.titlesection}>
              <div className={styles.title}>Sign up</div>
              <i
                className={`material-icons ${styles.icon}`}
                aria-label="Close"
              >
                close
              </i>
            </div>
            {/* <div className={styles.text}>
              please enter your details to continue
            </div> */}
          </div>

          <form className={styles.middleformsection}>
            <div className={styles.fielddiv}>
              {/* <label className={styles.label}>enter email address</label> */}
              <input
                type="text"
                placeholder="your name"
                name="username"
                className={styles.inputfield}
              />
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

          <button className={styles.staylogoutbtn}>
            Stay Logged Out
          </button>
        </div>
    </div>
    </>
  )
}
