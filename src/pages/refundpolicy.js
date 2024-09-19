import React from 'react'

import Nav from './component/nav'

import styles from "../styles/refundpolicy.module.css"
import Footer from './component/footer'
export default function RefundPolicy() {
  return (
    <>
    <Nav/>
    <div className={styles.refundpolicymainbody}>
        <div className={styles.policybody}>
        <div className={styles.heading}>refund policy</div>
        <div className={styles.policies}>
            <div className={styles.title}>Cancellations & Refund Policy</div>
            <ul className={styles.uldiv}>
                <li className={styles.lidiv}>Full refund if order is cancelled before confirmation.</li>
                <li className={styles.lidiv}>No refund if the order is already accepted or dispatched</li>
                <li className={styles.lidiv}>For any queries on cancellations, please WhatsApp us at +91 84474 74741</li>
            </ul>
        </div>
        <div className={styles.damagediv}>
        <div className={styles.title}>Damages and issues</div>
            <div className={styles.text}>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</div>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}