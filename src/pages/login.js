import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

import styles from "../styles/login.module.css";

export default dynamic(() => Promise.resolve(Login), { ssr: false });
function Login() {
  return (
    <>
      <div className={styles.loginsignupmainbody}>
        <div className={styles.backbtn}>
          <i
            className={`material-icons ${styles.icon}`}
            aria-label="arrow_back"
          >
            arrow_back
          </i>
          back
        </div>
        <div className={styles.loginbody}>
          <div className={styles.name}>login</div>
          <form className={styles.form}>
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
            <Link href="#" className={styles.a}>sign up</Link>
          </div>

          <div className={styles.text2}>
            <div className={styles.bar}></div>
            <div className={styles.text}>or</div>
            <div className={styles.bar}></div>
          </div>
        </div>
      </div>
    </>
  );
}
