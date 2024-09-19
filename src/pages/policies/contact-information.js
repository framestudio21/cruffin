import React from "react";

import Nav from "../component/nav";
import Footer from "../component/footer";

import styles from "../../styles/policy.module.css";
export default function RefundPolicy() {
  return (
    <>
      <Nav />
      <div className={styles.policymainbody}>
        <div className={styles.contactbody}>
          <div className={styles.heading}>Contact information</div>
          <div className={styles.policies}>
            <div className={styles.title}>
              For any queries, please reach out to us at :
            </div>
            <ul className={styles.uldiv}>
              <li className={styles.lidiv}>
                Address : Sector 37, Gurugram, Haryana 122001
              </li>
              <li className={styles.lidiv}>WhatsApp Only : +91 84474 74741</li>
              <li className={styles.lidiv}>
                E-mail : cruffin.premium@gmail.com
              </li>
              <li className={styles.lidiv}>
                Operating hours : Mon-Sun (11 AM to 11 PM IST)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
