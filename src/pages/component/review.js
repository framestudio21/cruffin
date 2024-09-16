// components/Review.js
import styles from "./styles/review.module.css";
import Image from "next/image";

const Review = ({ review }) => {
  const getBadgeColor = (rating) => {
    switch (rating) {
      case 5: return '#FFD700'; // Gold for 5 stars
      case 4: return '#C0C0C0'; // Silver for 4 stars
      case 3: return '#CD7F32'; // Bronze for 3 stars
      case 2: return '#FF6347'; // Tomato for 2 stars
      case 1: return '#FF4500'; // OrangeRed for 1 star
      default: return '#808080'; // Grey for no rating or unknown
    }
  };

  // Check if any photo is available
  const hasPhotos = review.photo || review.photo1 || review.photo2 || review.photo3 || review.photo4;

  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <div className={styles.authorInitials} style={{ backgroundColor: getBadgeColor(review.rating) }}>{review.authorInitials}</div>
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
      {hasPhotos && (
        <div className={styles.imagebody}>
          {review.photo && <Image src={review.photo} width={100} height={100} alt={review.author} className={styles.image} />}
          {review.photo1 && <Image src={review.photo1} width={100} height={100} alt={review.author} className={styles.image} />}
          {review.photo2 && <Image src={review.photo2} width={100} height={100} alt={review.author} className={styles.image} />}
          {review.photo3 && <Image src={review.photo3} width={100} height={100} alt={review.author} className={styles.image} />}
          {review.photo4 && <Image src={review.photo4} width={100} height={100} alt={review.author} className={styles.image} />}
        </div>
      )}
      <div className={styles.footer}>
        <button className={styles.likeButton}>{`👍 (${review.likes})`}</button>
        <div className={styles.bar}></div>
        <button className={styles.reportButton}>Report</button>
      </div>
    </div>
  );
};

export default Review;
