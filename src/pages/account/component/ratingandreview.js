import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles/subpage.module.css";

export default function RatingAndReview() {
  // Sample old reviews
  const [oldReviews, setOldReviews] = useState([
    {
      id: "1",
      image: "/image/image2.jpg",
      title: "vivo Stylist Earphone with mic (white) Wired",
      rating: "5",
      reviewtext:
        "After buying this earphones some days later...the microphone become...not working....then i exchange .....after exchange the exchange product also become disable....from right ear",
      owner: "sumit kumar duary",
      date: "05 May, 2020",
    },
    {
      id: "2",
      image: "/image/image3.jpg",
      title: "vivo Stylist Earphone with mic (white) Wired",
      rating: "4",
      reviewtext:
        "After buying this earphones some days later...the microphone become...not working....then i exchange .....after exchange the exchange product also become disable....from right ear",
      owner: "sumit kumar duary",
      date: "05 August, 2020",
    },
  ]);

  // Delete review handler
  const handleDelete = (id) => {
    const updatedReviews = oldReviews.filter((review) => review.id !== id);
    setOldReviews(updatedReviews);
  };

  // Sample data for products needing reviews
  const productsToReview = [
    {
      id: "1",
      image: "/image/image2.jpg",
      title: "vivo Stylist Earphone with mic (white) Wired",
      rating: 5,
    },
    {
      id: "2",
      image: "/image/image2.jpg",
      title: "vivo Stylist Earphone with mic (white) Wired",
      rating: 5,
    },
  ];

  // Share review handler using Web Share API with fallback
  const handleShare = async (review) => {
    if (navigator.canShare && navigator.canShare({ files: [] })) {
      try {
        // Fetch and convert the image to WebP format
        const imageBlob = await fetch(review.image).then((r) => r.blob());
        const webpFile = new File([imageBlob], "image.webp", { type: "image/webp" });

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

  return (
    <>
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
                {review.title && (
                  <div className={styles.title}>{review.title}</div>
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

                {review.reviewtext && (
                  <div className={styles.reviewtext}>{review.reviewtext}</div>
                )}

                <div className={styles.ownerdate}>
                  {review.owner && (
                    <div className={styles.owner}>{review.owner}</div>
                  )}
                  {review.date && <div className={styles.date}>{review.date}</div>}
                </div>

                <div className={styles.btndiv}>
                  <button className={styles.btn}>Edit</button>
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
                <div className={styles.title}>{product.title}</div>
                <div className={styles.stardiv}>
                  {Array.from({ length: product.rating }, (_, index) => (
                    <i key={index} className={`material-icons ${styles.staricon}`}>
                      star
                    </i>
                  ))}
                </div>
                <button className={styles.btn}>Write a review</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
