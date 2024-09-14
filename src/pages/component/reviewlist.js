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
    <div className={styles.list}>
      {filteredReviews.map(review => <Review key={review.id} review={review} />)}
    </div>
  );
};

export default ReviewList;