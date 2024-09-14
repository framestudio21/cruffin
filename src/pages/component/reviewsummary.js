import React from 'react';
import styles from './styles/reviewsummary.module.css';

const ReviewSummary = ({ averageRating, totalReviews, ratingsDistribution }) => {
  return (
    <div className={styles.reviewSummary}>
      <div className={styles.ratingBlock}>
       <div className={styles.reviewstar}>
       <div className={styles.h1text}>{averageRating.toFixed(1)} 
        {/* <span className={styles.star}>★</span> */}
        </div>
       <div className={styles.ptext}>({totalReviews}) Reviews</div>
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
        <div className={styles.h1text}>Review this product</div>
        <div className={styles.ptext}>Share your thoughts with other customers</div>
        <button className={styles.reviewButton}>Write a review</button>
      </div>
    </div>
  );
};

export default ReviewSummary;
