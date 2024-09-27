import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import NavBar from "../component/nav"
import AccountNavBar from "./component/accountnavbar"
import UserDetails from './component/userdetails';
import ManagerAddress from './component/manageaddress';
import RatingAndReview from './component/ratingandreview';
import AllNotification from './component/allnotification';
import MyOrderPage from "./component/order"


import styles from "./component/styles/account.module.css"
export default dynamic(() => Promise.resolve(Account), { ssr: false });
function Account() {

  const router = useRouter();
  const { section } = router.query; // Get the 'section' from URL query params

  // Define a function to render the appropriate component based on the section
  const renderSection = () => {
    switch (section) {
      case 'myorder':
        return <MyOrderPage />;
      case 'manageaddress':
        return <ManagerAddress />;
      case 'reviews':
        return <RatingAndReview />;
      case 'notifications':
        return <AllNotification />;
      default:
        return <UserDetails />; // Default to personal information section
    }
  };

  // Redirect to personal information if no section is provided
  useEffect(() => {
    if (!section) {
      router.push('/account?section=user', undefined, { shallow: true });
    }
  }, [section]);

  return (
    <>
    <NavBar/>
    <div className={styles.accountpagemainbody}>
        <AccountNavBar/>
        <div className={styles.pagesection}>
           {renderSection()}
        </div>
    </div>
    </>
  )
}
