import React, { useEffect, useState } from 'react';
import styles from './styles/poplogin.module.css';

export default function PopLogin() {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the popup on button click and store in localStorage
  const handleStayLogout = () => {
    setIsVisible(false);
    localStorage.setItem('stayLoggedOut', 'true');
  };

  // Show the popup after 1 minute on new visits
  useEffect(() => {
    const isLoggedOut = localStorage.getItem('stayLoggedOut');

    if (!isLoggedOut) {
      // Set a timeout to show the popup after 1 minute
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      // Cleanup the timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isVisible && (
        <div className={styles.poploginmainbody}>
          <div className={styles.poplogindiv}>
            <div className={styles.titlediv}>
              <div className={styles.title}>Welcome Back</div>
              <div className={styles.text}>
                Log in or sign up to get smarter responses, buy delicious cakes,
                cruffins, cupcakes, and much more.
              </div>
            </div>
            <div className={styles.btndiv}>
              <button className={styles.loginbtn}>Log In</button>
              <button className={styles.signupbtn}>Create Account</button>
            </div>
            <button className={styles.staylogoutbtn} onClick={handleStayLogout}>
              Stay Logged Out
            </button>
          </div>
        </div>
      )}
    </>
  );
}
