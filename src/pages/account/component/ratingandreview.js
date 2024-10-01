//rating and review.js
import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles/subpage.module.css";
import RatingReview from "@/pages/component/ratingReview";

export default function RatingAndReview() {
  const [popupData, setPopupData] = useState(null); // Data for the popup (null if closed)
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup visibility state

  // Sample old reviews
  const [oldReviews, setOldReviews] = useState([
    {
      id: "1",
      image: "/image/image2.jpg",
      productname: "vivo Stylist Earphone with mic (white) Wired",
      rating: "5",
      reviewtext:
        "After buying this earphones some days later...the microphone become...not working....then i exchange .....after exchange the exchange product also become disable....from right ear",
      owner: "sumit kumar duary",
      date: "05 May, 2020",
    },
    {
      id: "2",
      image: "/image/image3.jpg",
      productname: "vivo Stylist Earphone with mic (white) Wired",
      title: "easy to use",
      rating: "4",
      reviewtext:
        "After buying this earphones some days later...the microphone become...not working....then i exchange .....after exchange the exchange product also become disable....from right ear",
      owner: "sumit kumar duary",
      date: "05 August, 2020",
    },
  ]);

  // Sample data for products needing reviews
  const productsToReview = [
    {
      id: "1",
      image: "/image/image2.jpg",
      productname: "vivo Stylist Earphone with mic (white) Wired",
      rating: 5,
    },
    {
      id: "2",
      image: "/image/image2.jpg",
      productname: "vivo Stylist Earphone with mic (white) Wired",
      rating: 5,
    },
  ];

  // Delete review handler
  const handleDelete = (id) => {
    const updatedReviews = oldReviews.filter((review) => review.id !== id);
    setOldReviews(updatedReviews);
  };

  // Share review handler using Web Share API with fallback
  const handleShare = async (review) => {
    if (navigator.canShare && navigator.canShare({ files: [] })) {
      try {
        // Fetch and convert the image to WebP format
        const imageBlob = await fetch(review.image).then((r) => r.blob());
        const webpFile = new File([imageBlob], "image.webp", {
          type: "image/webp",
        });

        // Use Web Share API to share text, URL, and image file
        await navigator.share({
          title: review.title,
          text: `${review.reviewtext}\n\nReview by: ${review.owner}`,
          url: window.location.href, // Current page URL
          files: [webpFile], // Attach WebP image file
        });
        console.log("Review shared successfully");
      } catch (error) {
        console.log("Error sharing the review:", error);
      }
    } else {
      // Fallback for browsers that do not support file sharing
      if (navigator.share) {
        navigator
          .share({
            title: review.title,
            text: `${review.reviewtext}\n\nReview by: ${review.owner}`,
            url: window.location.href, // Current page URL
          })
          .then(() => console.log("Review shared successfully (without file)"))
          .catch((error) => console.log("Error sharing review:", error));
      } else {
        alert(
          "File sharing is not supported in this browser. Please try on a mobile device."
        );
      }
    }
  };

  // Function to download the image as a fallback for browsers that don't support image sharing
  const handleDownloadImage = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "review_image.webp"; // Force download with the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Opens the popup for editing or writing a new review
  const openPopup = (review) => {
    setPopupData(review); // Pass data for editing (if any)
    setIsPopupOpen(true);
  };

  // Handle the review submission (new or edited)
  const handleReviewSubmit = (submittedReview) => {
    if (submittedReview.id) {
      // If the review has an ID, it means it's an edit
      const updatedReviews = oldReviews.map((review) =>
        review.id === submittedReview.id ? submittedReview : review
      );
      setOldReviews(updatedReviews);
    } else {
      // It's a new review
      setOldReviews([
        ...oldReviews,
        { ...submittedReview, id: Date.now().toString() },
      ]);
    }
    console.log("Updated Review Data:", submittedReview); // Show in console
    closePopup();
  };

  // Closes the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupData(null);
  };

  return (
    <>
      {/* <RatingReview/> */}

      <div className={styles.accountsubpagemainbody}>
        {/* Page header */}
        <div className={styles.header}>My Reviews</div>

        {/* Old Reviews Section */}
        <div className={styles.reviewsectionmainbody}>
          {oldReviews.map((review) => (
            <div className={styles.oldreviewmainbody} key={review.id}>
              {review.image && (
                <Image
                  src={review.image}
                  className={styles.image}
                  alt="review image"
                  width={80}
                  height={80}
                />
              )}
              <div className={styles.textsection}>
                {review.productname && (
                  <div className={styles.title}>{review.productname}</div>
                )}

                {review.rating && (
                  <div className={styles.stardiv}>
                    {Array.from({ length: review.rating }, (_, index) => (
                      <i
                        key={index}
                        className={`material-icons ${styles.staricon}`}
                      >
                        star
                      </i>
                    ))}
                  </div>
                )}

                {review.title && (
                  <div className={styles.title}>{review.title}</div>
                )}
                {review.reviewtext && (
                  <div className={styles.reviewtext}>{review.reviewtext}</div>
                )}

                <div className={styles.ownerdate}>
                  {review.owner && (
                    <div className={styles.owner}>{review.owner}</div>
                  )}
                  {review.date && (
                    <div className={styles.date}>{review.date}</div>
                  )}
                </div>

                <div className={styles.btndiv}>
                  <button
                    className={styles.btn}
                    onClick={() => openPopup(review)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.btn}
                    onClick={() => handleDelete(review.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={styles.btn}
                    onClick={() => handleShare(review)}
                  >
                    Share
                  </button>
                  <button
                    className={styles.btn}
                    onClick={() => handleDownloadImage(review.image)}
                  >
                    Download Image
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Header for products needing review */}
        <div className={styles.header}>
          Orders you might be interested in reviewing
        </div>

        {/* Section for products needing review */}
        <div className={styles.reviewsectionmainbody}>
          {productsToReview.map((product) => (
            <div className={styles.needreviewmainbody} key={product.id}>
              <Image
                src={product.image}
                className={styles.image}
                alt="image"
                width={80}
                height={80}
              />
              <div className={styles.textsection}>
                <div className={styles.title}>{product.productname}</div>
                <div className={styles.stardiv}>
                  {Array.from({ length: product.rating }, (_, index) => (
                    <i
                      key={index}
                      className={`material-icons ${styles.staricon}`}
                    >
                      star
                    </i>
                  ))}
                </div>
                <button
                  className={styles.btn}
                  onClick={() => openPopup(product)}
                >
                  Write a review
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup for writing/editing reviews */}
        {isPopupOpen && (
          <RatingReview
            reviewData={popupData}
            onClose={closePopup}
            onSubmit={handleReviewSubmit} // Handle review submission
          />
        )}
      </div>
    </>
  );
}

{
  /* Popup window for editing/writing a review */
}
{
  /* {isPopupOpen && (
 <div className={styles.popupOverlayStyles}>
   <div className={styles.headersection}>
     <div className={styles.leftside}>
       <div className={styles.title}>{popupData.reviewtext ? 'Edit Ratings & Review' : 'Write a Review'}</div>
     </div>
     <div className={styles.rightside}>
       <div className={styles.productdetailsfield}>
         <div className={styles.title}>vivo Stylist Earphone with mic (white) Wired</div>
         <div className={styles.totalrating}>3.5 <i className={`material-icons ${styles.staricon}`}>star</i>
         </div>
       </div>
       <Image src="/image/image2.jpg" className={styles.image} width={50} height={50} alt="image"/>
     </div>
   </div>
   <div className={styles.bodysection}>
     <div className={styles.leftsection}>
       <div className={styles.title}>What makes a good review</div>
       <div className={styles.questionanswerdiv}>
         <div className={styles.question}>Have you used this product?</div>
         <div className={styles.answer}>Your review should be about your experience with the product.</div>
       </div>
       <div className={styles.questionanswerdiv}>
         <div className={styles.question}>Why review a product?</div>
         <div className={styles.answer}>Your valuable feedback will help fellow shoppers decide!</div>
       </div>
       <div className={styles.questionanswerdiv}>
         <div className={styles.question}>How to review a product?</div>
         <div className={styles.answer}>Your review should include facts. An honest opinion is always appreciated. If you have an issue with the product or service please contact us from the help centre.</div>
       </div>
     </div>
     <div className={styles.rightsection}>
       <div className={styles.headersection}>
         <div className={styles.leftside}>
           <div className={styles.title}>rate this product</div>
           <div className={styles.stardiv}>
             <div className={styles.stars}>
             <i className={`material-icons ${styles.staricon}`}>star</i>
             <i className={`material-icons ${styles.staricon}`}>star</i>
             <i className={`material-icons ${styles.staricon}`}>star</i>
             <i className={`material-icons ${styles.staricon}`}>star</i>
             <i className={`material-icons ${styles.staricon}`}>star</i>
             </div>
             <div className={styles.startext}>very good</div>
           </div>
         </div>
       </div>
       <div className={styles.bodysection}>
         <div className={styles.title}>review this product</div>
         <form className={styles.formbody}>
           <textarea name="description" className={styles.textarea}/>
           <input className={styles.inputfield} placeholder="title" type="text" name="title"/>
           
         </form>
       </div>
     </div>
   </div>
   <div className={styles.popupContentStyles}>
     <textarea
       className={styles.textareaStyles}
       value={popupData.reviewtext || ""}
       onChange={(e) => setPopupData({ ...popupData, reviewtext: e.target.value })}
       placeholder="Write your review here..."
     />
     <div>
       <button className={styles.buttonStyles} onClick={() => handleEditSubmit(popupData.reviewtext)}>
         Submit
       </button>
       <button className={styles.buttonStyles} onClick={closePopup}>
         Cancel
       </button>
     </div>
   </div>
 </div>
)} */
}
