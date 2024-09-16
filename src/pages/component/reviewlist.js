// // components/ReviewList.js
// import React, { useState } from 'react';
// import Review from './review';
// import styles from "./styles/reviewlist.module.css";

// const ReviewList = ({ reviews }) => {
//   const [filter, setFilter] = useState('all');

//   const getFilteredReviews = () => {
//     const currentDate = new Date();
//     const oneMonthAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 1));

//     switch (filter) {
//       case 'photos':
//         return reviews.filter(review => review.photo);
//       case 'popular':
//         return reviews.filter(review => review.likes >= 10);
//       case 'recent':
//         return reviews.filter(review => new Date(review.date) > oneMonthAgo);
//       case 'highRating':
//         return reviews.filter(review => review.rating >= 4);
//       case 'lowRating':
//         return reviews.filter(review => review.rating <= 2);
//       case '5':
//         return reviews.filter(review => review.rating === 5);
//       case '4':
//         return reviews.filter(review => review.rating === 4);
//       case '3':
//         return reviews.filter(review => review.rating === 3);
//       case '2':
//         return reviews.filter(review => review.rating === 2);
//       case '1':
//         return reviews.filter(review => review.rating === 1);
//       default:
//         return reviews; // for 'all' or any undefined filter
//     }
//   };

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };

//   return (
//     <>
//       <div className={styles.listbutton}>
//         <button onClick={() => handleFilterChange('all')} className={styles.btn}>All</button>
//         <button onClick={() => handleFilterChange('popular')} className={styles.btn}>Most Popular</button>
//         <button onClick={() => handleFilterChange('recent')} className={styles.btn}>Most Recent</button>
//         <button onClick={() => handleFilterChange('highRating')} className={styles.btn}>Highest Rating</button>
//         <button onClick={() => handleFilterChange('lowRating')} className={styles.btn}>Lowest Rating</button>
//         <button onClick={() => handleFilterChange('5')} className={styles.btn}>5 Stars (★)</button>
//         <button onClick={() => handleFilterChange('4')} className={styles.btn}>4 Stars (★)</button>
//         <button onClick={() => handleFilterChange('3')} className={styles.btn}>3 Stars (★)</button>
//         <button onClick={() => handleFilterChange('2')} className={styles.btn}>2 Stars (★)</button>
//         <button onClick={() => handleFilterChange('1')} className={styles.btn}>1 Star (★)</button>
//       </div>
//       <div className={styles.list}>
//         {getFilteredReviews().map(review => <Review key={review.id} review={review} />)}
//       </div>
//     </>
//   );
// };

// export default ReviewList;


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

