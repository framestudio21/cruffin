import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles/subpage.module.css";
export default function MyOrderPage() {
  return (
    <>
      <div className={styles.accountsubpagemainbody}>

        {/* page header div */}
        <div className={styles.header}>all notification</div>

        {/* all notification main body */}
        <div className={styles.allnotificationdivmainbody}>

          <Link href="#" className={styles.notificationmainbody}>
          <Image src="/image/image1.webp" alt="image" width={50} height={50} className={styles.image}/>
            <div className={styles.textsection}>
              <div className={styles.title}>Instant Personal Loan Up to ₹10 lakhs | Interest rates 10.99%* onwards</div>
              <div className={styles.date}>24 sep, 2024</div>
            </div>
          </Link>

          <Link href="#" className={styles.notificationmainbody}>
          <Image src="/image/image1.webp" alt="image" width={50} height={50} className={styles.image}/>
            <div className={styles.textsection}>
              <div className={styles.title}>Instant Personal Loan Up to ₹10 lakhs | Interest rates 10.99%* onwards</div>
              <div className={styles.date}>24 sep, 2024</div>
            </div>
          </Link>
          
        </div>


      </div>
    </>
  );
}
