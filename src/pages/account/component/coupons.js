import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles/subpage.module.css";
export default function Coupons() {
  return (
    <>
      <div className={styles.accountsubpagemainbody}>


        {/* page links div */}
        <div className={styles.pagelinkdisplaydiv}>
          <div className={styles.link}>account</div>
          {">"}
          <div className={styles.link}>coupons</div>
        </div>

        {/* page header div */}
        <div className={styles.header}>available coupons</div>

        {/* coupons display and link amd main body */}
        <div className={styles.couponsdisplaymainbody}>

          <div className={styles.couponsmainbody}>
          <div className={styles.textsection}>
            <Image src="/image/coupon-svg.svg" className={styles.couponicon} alt="coupons-icon" width={40} height={40}/>
            <div className={styles.textarea}>
              <div className={styles.titlesection}>
                <div className={styles.title}><span className={styles.boldtext}>FLAT Rs. 100 OFF</span>on selected products</div>
                <div className={styles.time}>Valid till 06th Oct 2024</div>
              </div>
              <div className={styles.bodysection}>
                <div className={styles.code}>use code : <span>festive100</span></div>
                <div className={styles.viewtc}>view T & C</div>
              </div>
              <Link href="#" className={styles.viewproductslink}>view products</Link>
            </div>
          </div>
          <button className={styles.couponapplybtn}>tap to apply</button>
          </div>

          <div className={styles.couponsmainbody}>
          <div className={styles.textsection}>
            <Image src="/image/coupon-svg.svg" className={styles.couponicon} alt="coupons-icon" width={40} height={40}/>
            <div className={styles.textarea}>
              <div className={styles.titlesection}>
                <div className={styles.title}><span className={styles.boldtext}>FLAT Rs. 100 OFF</span>on selected products</div>
                <div className={styles.time}>Valid till 06th Oct 2024</div>
              </div>
              <div className={styles.bodysection}>
                <div className={styles.code}>use code : <span>festive100</span></div>
                <div className={styles.viewtc}>view T & C</div>
              </div>
              <Link href="#" className={styles.viewproductslink}>view products</Link>
            </div>
          </div>
          <button className={styles.couponapplybtn}>tap to apply</button>
          </div>

        </div>

      </div>
    </>
  );
}
