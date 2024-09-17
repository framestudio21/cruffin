import React from 'react'
import Image from 'next/image'

import styles from "../styles/login.module.css"

export default function login() {
  return (
    <>
    <div className={styles.loginsignupmainbody}>
        <div className={styles.backbtn}><i
            className={`material-icons ${styles.icon}`}
            aria-label="arrow_back"
          >
            arrow_back
          </i>back</div>
        <div className={styles.loginbody}>
            <Image src="/image/cruffin_logo.png" className={styles.logo} width={160} height={180} alt='cruffin-logo'/> 
            <div className={styles.title}>
                <div className={styles.name}>login</div>
                <div className={styles.text}></div>
            </div>
        </div>
    </div>
    </>
  )
}