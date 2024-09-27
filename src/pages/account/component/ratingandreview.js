import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles/subpage.module.css";
export default function RatingAndReview() {
  return (
    <>
      <div className={styles.accountsubpagemainbody}>
        {/* page links div */}
        <div className={styles.pagelinkdisplaydiv}>
          <div className={styles.link}>account</div>
          {">"}
          <div className={styles.link}>Rating and review</div>
        </div>

        {/* page header div */}
        <div className={styles.header}>my reviews</div>

        {/* rating & review and link amd main body */}
        <div className={styles.reviewsectionmainbody}>
            <div className={styles.oldreviewmainbody}>
                <Image src="/image/image1.jpg" className={styles.image} alt="image" width={80} height={80}/>
                <div className={styles.textsection}>
                    <div className={styles.title}></div>
                </div>
            </div>
        </div>

        {/* page header div */}
        <div className={styles.header}>
          Orders you might be interested reviewing
        </div>

        {/* rating & review and link amd main body */}
        <div className={styles.reviewsectionmainbody}>

        </div>
      </div>
    </>
  );
}
