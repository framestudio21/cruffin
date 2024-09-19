import React, { useEffect, useState } from 'react';
import styles from './styles/cart.module.css';

export default function Cart() {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the popup on button click and store in localStorage
  const handleCloseCart = () => {
    setIsVisible(false);
    localStorage.setItem('cartClosed', 'true');
  };

  // Show the popup after 1.5 minutes (90,000 ms) on new visits
  useEffect(() => {
    const isCartClosed = localStorage.getItem('cartClosed');

    if (!isCartClosed) {
      // Set a timeout to show the popup after 1.5 minutes
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 90000); // 1.5 minutes = 90000 ms

      // Cleanup the timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isVisible && (
        <div className={`${styles.cartmainbody} ${!isVisible ? styles.hidden : ''}`}>
          <div className={styles.cartdiv}>
            <div className={styles.titlediv}>
              <div className={styles.title}>Your Cart</div>
              <i
                className={`material-icons ${styles.closeicon}`}
                aria-label="Close"
                onClick={handleCloseCart}
              >
                close
              </i>
            </div>
            <div className={styles.itembody}>
              <div className={styles.bagdiv}>
                <i
                  className={`material-icons ${styles.bagicon}`}
                  aria-label="Shopping-Bag"
                >
                  shopping_bag
                </i>
                <div className={styles.text}>Your cart is feeling lonely.</div>
              </div>
              <button className={styles.shoppingbtn} onClick={handleCloseCart}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
