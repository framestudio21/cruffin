import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../component/styles/accountnavbar.module.css";
export default function AccountNavBar() {
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
          <div className={styles.orderbody}>
            <Link href="#" className={styles.myorderedlink}>
              <div className={styles.header}>
                <i
                  className={`material-icons ${styles.icon}`}
                  aria-label="shopping_bag"
                >
                  shopping_bag
                </i>
                <div className={styles.text}>my order</div>
              </div>
              <i
                className={`material-icons ${styles.icon}`}
                aria-label="arrow_right"
              >
                arrow_right
              </i>
            </Link>
          </div>

          {/* my personal details div */}
          <div className={styles.linkbody}>
            <div className={styles.header}>
              <i
                className={`material-icons ${styles.icon}`}
                aria-label="admin_panel_settings"
              >
                admin_panel_settings
              </i>
              <div className={styles.text}>account setting</div>
            </div>

            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="#" className={styles.link}>
                  personal information
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#" className={styles.link}>
                  mannager addresses
                </Link>
              </li>
            </ul>
          </div>

          {/* my stuff section div */}
          <div className={styles.linkbody}>
            <div className={styles.header}>
              <i
                className={`material-icons ${styles.icon}`}
                aria-label="folder_shared"
              >
                folder_shared
              </i>
              <div className={styles.text}>my stuff</div>
            </div>

            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="#" className={styles.link}>
                  my coupons
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#" className={styles.link}>
                  my reviews & ratings
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#" className={styles.link}>
                  all notification
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#" className={styles.link}>
                  my wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* log out button */}
          <button className={styles.logoutbtn}>logout</button>
        </div>

        {/* 3rd div link to policies */}
        <div className={styles.policieslinksectiondiv}>
                      {/* my personal details div */}
          <div className={styles.linkbody}>
            <div className={styles.header}>
              <i
                className={`material-icons ${styles.icon}`}
                aria-label="help"
              >
                help
              </i>
              <div className={styles.text}>policies</div>
            </div>

            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="#" className={styles.link}>
                  privacy policy
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#" className={styles.link}>
                  refund policy
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#" className={styles.link}>
                  shipping policy
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#" className={styles.link}>
                  term of service
                </Link>
              </li>
              <li className={styles.li}>
                <Link href="#" className={styles.link}>
                  contact information
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
