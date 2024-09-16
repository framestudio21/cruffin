// components/ReviewList.js
import React, { useState } from 'react';
import Review from './review';
import styles from "./styles/reviewlist.module.css";

const ReviewList = ({ reviews }) => {
  const [filter, setFilter] = useState('all');

  const getFilteredReviews = () => {
    const currentDate = new Date();
    const oneMonthAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 1));

    switch (filter) {
      case 'photos':
        return reviews.filter(review => review.photo);
      case 'popular':
        return reviews.filter(review => review.likes >= 10);
      case 'recent':
        return reviews.filter(review => new Date(review.date) > oneMonthAgo);
      case 'highRating':
        return reviews.filter(review => review.rating >= 4);
      case 'lowRating':
        return reviews.filter(review => review.rating <= 2);
      case '5':
        return reviews.filter(review => review.rating === 5);
      case '4':
        return reviews.filter(review => review.rating === 4);
      case '3':
        return reviews.filter(review => review.rating === 3);
      case '2':
        return reviews.filter(review => review.rating === 2);
      case '1':
        return reviews.filter(review => review.rating === 1);
      default:
        return reviews; // for 'all' or any undefined filter
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <div className={styles.listbutton}>
        {['all', 'popular', 'recent', 'highRating', 'lowRating', '5', '4', '3', '2', '1'].map(key => (
          <button
            key={key}
            onClick={() => handleFilterChange(key)}
            className={`${styles.btn} ${filter === key ? styles.active : ''}`}
          >
            {key === '5' ? '5 (★)' :
             key === '4' ? '4 (★)' :
             key === '3' ? '3 (★)' :
             key === '2' ? '2 (★)' :
             key === '1' ? '1 (★)' :
             key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
      <div className={styles.list}>
        {getFilteredReviews().map(review => <Review key={review.id} review={review} />)}
      </div>
    </>
  );
};

export default ReviewList;

