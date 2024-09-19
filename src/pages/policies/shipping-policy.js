import React from "react";

import Nav from "../component/nav";
import Footer from "../component/footer";

import styles from "../../styles/policy.module.css";
export default function RefundPolicy() {
  return (
    <>
      <Nav />
      <div className={styles.policymainbody}>
        <div className={styles.shippingbody}>
          <div className={styles.heading}>Shipping policy</div>
          <div className={styles.policies}>
            <div className={styles.title}>Free Shipping</div>
            <ul className={styles.uldiv}>
              <li className={styles.lidiv}>
                Free shipping on all orders above ₹499 across India with no
                extra cost.
              </li>
              <li className={styles.lidiv}>
                All orders will be delivered by Cruffin Premium.
              </li>
              <li className={styles.lidiv}>
                It depends on your location, but mostly the delivery time is :
              </li>
              <li className={styles.sublidiv}>- 2-3 days in Delhi-NCR</li>
              <li className={styles.sublidiv}>- 4-5 Days in Metro Cities</li>
              <li className={styles.sublidiv}>- 5-7 Days in Rest of India</li>
              <li className={styles.lidiv}>
                For any other queries, please email us at :
              </li>
              <li className={styles.sublidiv}>cruffin.premium@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
