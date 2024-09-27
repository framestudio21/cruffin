import React from "react";
import Link from "next/link";

import styles from "./styles/subpage.module.css";
export default function ManagerAddress() {
  return (
    <>
      <div className={styles.accountsubpagemainbody}>

        {/* page header div */}
        <div className={styles.header}>manager addresses</div>

        {/* add new address button */}
        <button className={styles.addaddressbtndiv}>
            <span>+</span> add a new address
        </button>

        {/* address display edit and delete body */}
        <div className={styles.addresssectionbody}>

            <div className={styles.addressbody}>
                <div className={styles.tag}><div className={styles.tagname}>home</div></div>
                <div className={styles.name}>sumit kumar duary</div>
                <div className={styles.contactdiv}>
                    <div className={styles.mobile}>
                        <div className={styles.title}>mobile :</div>
                        <div className={styles.number}>+91 6290985252</div>
                    </div>
                    <div className={styles.email}>
                        <div className={styles.title}>email :</div>
                        <div className={styles.emailid}>duary.sumit21@gmail.com</div>
                    </div>
                </div>
                <div className={styles.address}>
                    c/o- keshab chandra duary, 109 duary para, moynapur, kharia moynapur, uluberia, howrah, west bengal - 711316
                </div>
                <div className={styles.btn}>
                    <button className={styles.edit}>edit</button>
                    <button className={styles.delete}>delete</button>
                </div>
            </div>

            <div className={styles.addressbody}>
                <div className={styles.tag}><div className={styles.tagname}>work</div></div>
                <div className={styles.name}>sumit kumar duary</div>
                <div className={styles.contactdiv}>
                    <div className={styles.mobile}>
                        <div className={styles.title}>mobile :</div>
                        <div className={styles.number}>+91 6290985252</div>
                    </div>
                    <div className={styles.email}>
                        <div className={styles.title}>email :</div>
                        <div className={styles.emailid}>duary.sumit21@gmail.com</div>
                    </div>
                </div>
                <div className={styles.address}>
                    c/o- keshab chandra duary, 109 duary para, moynapur, kharia moynapur, uluberia, howrah, west bengal - 711316
                </div>
                <div className={styles.btn}>
                    <button className={styles.edit}>edit</button>
                    <button className={styles.delete}>delete</button>
                </div>
            </div>
        </div>


      </div>
    </>
  );
}
