// components/ReviewList.js
import Review from './review';
import styles from "./styles/reviewlist.module.css";

const ReviewList = ({ reviews, filter }) => {
  const filteredReviews = reviews.filter(review => {
    if (filter === 'photos' && !review.hasPhoto) return false;
    if (filter === 'popular' && review.likes < 10) return false;
    return true;
  });

  return (
    <>
    <div className={styles.listbutton}>
      <button className={styles.btn}>All</button>
      <button className={styles.btn}>most popular</button>
      <button className={styles.btn}>most recent</button>
      <button className={styles.btn}>highest rating</button>
      <button className={styles.btn}>lowest rating</button>
      <button className={styles.btn}>5 (★)</button>
      <button className={styles.btn}>4 (★)</button>
      <button className={styles.btn}>3 (★)</button>
      <button className={styles.btn}>2 (★)</button>
      <button className={styles.btn}>1 (★)</button>
    </div>
    <div className={styles.list}>
      {filteredReviews.map(review => <Review key={review.id} review={review} />)}
    </div>
    </>
  );
};

export default ReviewList;