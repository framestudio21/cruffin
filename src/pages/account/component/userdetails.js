import React from "react";
import Link from "next/link";

import styles from "./styles/userdetails.module.css";
export default function UserDetails() {
  return (
    <>
      <div className={styles.userdetailsmainbody}>

        <div className={styles.pagelinkdisplaydiv}>
          <div className={styles.link}>account</div>
          {">"}
          <div className={styles.link}>user : Sumit Kumar Duary</div>
        </div>

        <div className={styles.header}>personal information</div>
        
        <form className={styles.formbody}>

            {/* personal details section */}
          <div className={styles.inputfieldsection}>
            <div className={styles.title}>name</div>
            <div className={styles.inputfielddiv}>
              <input
                type="text"
                name="first-name"
                className={styles.inputfield}
                placeholder="your name"
              />
              <input
                type="text"
                name="last-name"
                className={styles.inputfield}
                placeholder="your Surname"
              />
            </div>
            <div className={styles.inputfielddiv}>
              <input type="radio" id="male" name="gender" value="Male" className={styles.radioinput}/>
              <label for="male" className={styles.radioinputtitle}>male</label>
              <input type="radio" id="female" name="gender" value="female" className={styles.radioinput}/>
              <label for="female" className={styles.radioinputtitle}>female</label>
            </div>
          </div>

          {/* email id section */}
            <div className={styles.inputfieldsection}>
            <div className={styles.title}>email</div>
                <input type="email" className={styles.inputfield} placeholder="example@gmai.com" name="email" /> 
            </div>

            {/* phone section */}
            <div className={styles.inputfieldsection}>
            <div className={styles.title}>mobile number</div>
                <input type="tel" className={styles.inputfield} placeholder="+91 1234567890" name="mobile" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" /> 
            </div>

            <div className={styles.inputfieldsection}>
              <button type="submit" className={styles.submitbtn}>submit</button>
            </div>

        </form>
      </div>
    </>
  );
}
