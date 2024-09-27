import React from 'react'
import dynamic from 'next/dynamic';

import NavBar from "../component/nav"
import AccountNavBar from "./component/accountnavbar"
import UserDetails from './component/userdetails';
import ManagerAddress from './component/manageaddress';
import Coupons from './component/coupons';


import styles from "@/styles/account.module.css"
import RatingAndReview from './component/ratingandreview';
export default dynamic(() => Promise.resolve(Account), { ssr: false });
function Account() {
  return (
    <>
    <NavBar/>
    <div className={styles.accountpagemainbody}>
        <AccountNavBar/>
        <div className={styles.pagesection}>
          {/* <UserDetails/> */}
          {/* <ManagerAddress/> */}
          {/* <Coupons/> */}
          <RatingAndReview/>
        </div>
    </div>
    </>
  )
}
