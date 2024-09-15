// components/Review.js
import styles from "./styles/review.module.css";

const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <div className={styles.authorInitials}>{review.authorInitials}</div>
        <div className={styles.authorDetails}>
          <div className={styles.name}>{review.author}</div>
          <div className={styles.date}>{`Review on ${review.date}`}</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.stars}>{'★'.repeat(review.rating)}</div>
        <div className={styles.title}>{review.title}</div>
        <div className={styles.text}>{review.text}</div>
      </div>
      <div className={styles.footer}>
        <button className={styles.likeButton}>{`👍 (${review.likes})`}</button>
        <div className={styles.bar}></div>
        <button className={styles.reportButton}>Report</button>
      </div>
    </div>
  );
};

export default Review;