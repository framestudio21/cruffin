import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";  // Import the useRouter hook

import styles from "../component/styles/accountnavbar.module.css";
export default function AccountNavBar() {

  const router = useRouter();

  const handleNavigation = (section) => {
    router.push(`/account?section=${section}`, undefined, { shallow: true });
  };

  return (
    <>
      <div className={styles.accountnavbarmainbody}>
        {/* 1st div hello div */}
        <div className={styles.hellodiv}>
          <Image
            src="/image/user.png"
            alt="user-image"
            width={60}
            height={60}
            className={styles.userimage}
          />
          <div className={styles.text}>
            <div className={styles.hello}>Hello,</div>
            <div className={styles.username}>sumit kumar duary</div>
          </div>
        </div>

        {/* 2nd div link section div */}
        <div className={styles.linksectiondiv}>
          {/* my orders section link div */}
          <div className={styles.orderbodylink} onClick={() => handleNavigation('myorder')}>
            <div className={styles.text}>my order</div>
            <i
              className={`material-icons ${styles.icon}`}
              aria-label="arrow_right"
            >
              arrow_right
            </i>
          </div>

          {/* my personal details div */}

            <ul className={styles.ul}>
              <li className={styles.li} onClick={() => handleNavigation('user')}>
                  personal information
              </li>
              <li className={styles.li} onClick={() => handleNavigation('manageaddress')}>
                  mannager addresses
              </li>
              <li className={styles.li} onClick={() => handleNavigation('reviews')}>
                  my reviews & ratings
              </li>
            </ul>

          {/* log out button */}
          <button className={styles.logoutbtn}>logout</button>
        </div>

      </div>
    </>
  );
}
