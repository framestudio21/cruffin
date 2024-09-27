import React from "react";
import Link from "next/link";

import styles from "./styles/subpage.module.css";
export default function UserDetails() {
  return (
    <>
      <div className={styles.userdetailsmainbody}>


        {/* page links div */}
        <div className={styles.pagelinkdisplaydiv}>
          <div className={styles.link}>account</div>
          {">"}
          <div className={styles.link}>user : Sumit Kumar Duary</div>
        </div>

        {/* page header div */}
        <div className={styles.header}>personal information</div>

        {/* user form and details */}
        <form className={styles.formbody}>
          {/* personal details section */}
          <div className={styles.inputfieldsection}>
            <div className={styles.title}>
              <div className={styles.name}>name</div>
              <button className={styles.editbtn}>edit</button>
            </div>
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
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                className={styles.radioinput}
              />
              <label for="male" className={styles.radioinputtitle}>
                male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className={styles.radioinput}
              />
              <label for="female" className={styles.radioinputtitle}>
                female
              </label>
            </div>
          </div>

          {/* email id section */}
          <div className={styles.inputfieldsection}>
            <div className={styles.title}>
              <div className={styles.name}>email</div>
              <button className={styles.editbtn}>edit</button>
            </div>
            <input
              type="email"
              className={styles.inputfield}
              placeholder="example@gmai.com"
              name="email"
            />
          </div>

          {/* phone section */}
          <div className={styles.inputfieldsection}>
            <div className={styles.title}>
              <div className={styles.name}>mobile</div>
              <button className={styles.editbtn}>edit</button>
            </div>
            <input
              type="tel"
              className={styles.inputfield}
              placeholder="+91 1234567890"
              name="mobile"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </div>
        </form>

        {/* faq div */}
        <div className={styles.faqbody}>
          <div className={styles.title}>frequently asked questions</div>
          <div className={styles.questionanswerbody}>
            <div className={styles.questionanswer}>
              <div className={styles.question}><span className={styles.q}>Q.</span>What happens when I update my email address (or mobile number)?</div>
              <div className={styles.answer}><span className={styles.ans}>ans.</span>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</div>
            </div>
            <div className={styles.questionanswer}>
              <div className={styles.question}><span className={styles.q}>Q.</span>When will my Flipkart account be updated with the new email address (or mobile number)?</div>
              <div className={styles.answer}><span className={styles.ans}>ans.</span>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</div>
            </div>
            <div className={styles.questionanswer}>
              <div className={styles.question}><span className={styles.q}>Q.</span>What happens to my existing Flipkart account when I update my email address (or mobile number)?</div>
              <div className={styles.answer}><span className={styles.ans}>ans.</span>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</div>
            </div>
          </div>
        </div>

        {/* detele or deactivate account */}
        <div className={styles.buttonsection}>
          <button type="submit" className={styles.submitbtn}>
            deactivate account
          </button>
          <button type="submit" className={styles.submitbtn}>
            delete account
          </button>
        </div>


      </div>
    </>
  );
}
