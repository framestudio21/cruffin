import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Login from './login';
import SignUp from './signup';

import styles from './styles/poplogin.module.css';

export default function PopLogin() {
  const [isVisible, setIsVisible] = useState(true);

    const router = useRouter();  // Router hook

  const handleLogin = () => {
    router.push('<Login/>'); // Navigate to Login.js
  };

  const handleSignUp = () => {
    router.push('<Signup/>'); // Navigate to SignUp.js
  };

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
            <button className={styles.loginbtn} onClick={handleLogin}>Log In</button>
            <button className={styles.signupbtn} onClick={handleSignUp}>Create Account</button>
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