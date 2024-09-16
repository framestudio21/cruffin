import React, { useContext, useState } from "react";
import Image from "next/image";

import { ProductContext } from "../../context/ProductContext";

import styles from "./styles/ratingReview.module.css";

export default function RatingReview() {
  // const { productDetails, isPopupVisible, setIsPopupVisible } = useContext(ProductContext);

  // if (!isPopupVisible || !productDetails) return null;

  // const handleClose = () => {
  //   setIsPopupVisible(false);
  // };

  const [rating, setRating] = useState(0); // State to store the clicked rating
  const [hover, setHover] = useState(0); // State to store the hover rating

  const [inputValue, setInputValue] = useState(''); // State to store the input value
  const maxCharsReviewTitle = 100; // Max character limit

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxCharsReviewTitle) {
      setInputValue(value); // Update state only if within character limit
    }
  };

  return (
    // <div className={styles.overlay} onClick={handleClose}>
    <div className={styles.overlay}>
      <div
        className={styles.ratingreviewmainbody}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.ratingreviewbody}>
          <div className={styles.titlediv}>
            <div className={styles.text}>Rating & Review</div>
            {/* <i className={`material-icons ${styles.icon}`} onClick={handleClose}>cancel</i> */}
            <i className={`material-icons ${styles.icon}`}>cancel</i>
          </div>
          <div className={styles.bar}></div>
          <div className={styles.imagebody}>
            <Image
              // src={productDetails.image}
              src="/image/image1.webp"
              width={180}
              height={180}
              className={styles.image}
              alt="product image"
            />
            <div className={styles.namerate}>
              {/* <div className={styles.name}>{productDetails.name}</div> */}
              <div className={styles.name}>
                Assorted Pack of 6 (with Mango) Cruffins
              </div>

              <div className={styles.rate}>
                {[...Array(5)].map((_, i) => {
                  const ratingValue = i + 1; // Because `i` starts from 0 but we want stars from 1 to 5

                  return (
                    <i
                      key={i}
                      className={`material-icons ${styles.icon} ${
                        ratingValue <= (hover || rating) ? styles.filled : ""
                      }`}
                      onClick={() => setRating(ratingValue)} // Set rating on click
                      onMouseEnter={() => setHover(ratingValue)} // Highlight stars on hover
                      onMouseLeave={() => setHover(0)} // Reset hover when not hovering
                    >
                      star
                    </i>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.bar}></div>
          {/* Include the rating and review form here */}
          <form className={styles.form}>
            {/* Add form fields for rating and review */}
            <div className={styles.reviewtitle}>
              <div className={styles.title}>
                <div className={styles.name}>review title</div>
                <div className={styles.text}>{inputValue.length}/{maxCharsReviewTitle}</div>
              </div>
              <input type="text" placeholder="Example: Easy to use" value={inputValue} onChange={handleInputChange} maxLength={maxCharsReviewTitle}/>
            </div>
            <div className={styles.reviewtitle}>
              <div className={styles.title}>
                <div className={styles.name}>product review & description</div>
                <div className={styles.text}>2000/2000</div>
              </div>
              <input type="text" placeholder="Example: since i brought this a month ago, it has been used a lot. What i like best this product is ..." />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
