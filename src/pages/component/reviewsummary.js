import React from 'react';
import styles from './styles/reviewsummary.module.css';

const ReviewSummary = ({ averageRating, totalReviews, ratingsDistribution }) => {
  return (
    <div className={styles.reviewSummary}>
      <div className={styles.ratingBlock}>
       <div className={styles.reviewstar}>
       <h1>{averageRating.toFixed(1)} <span className={styles.star}>★</span></h1>
       <p>{totalReviews} Reviews</p>
       </div>
        <div className={styles.ratings}>
          {Object.keys(ratingsDistribution).map((rating) => (
            <div key={rating} className={styles.ratingRow}>
              <span className={styles.ratingLabel}>{rating} ★</span>
              <div className={styles.progressBar}>
                <div className={styles.fill} style={{ width: `${ratingsDistribution[rating]}%` }}></div>
              </div>
              <span className={styles.percentage}>{ratingsDistribution[rating]}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bar}></div>
      <div className={styles.reviewAction}>
        <h2>Review this product</h2>
        <p>Share your thoughts with other customers</p>
        <button className={styles.reviewButton}>Write a review</button>
      </div>
    </div>
  );
};

export default ReviewSummary;
