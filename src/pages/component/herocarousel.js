import React, { useState, useEffect } from "react";
import Styles from "./styles/herocarousel.module.css";

const images = [
  "/image/image1.webp",
  "/image/image2.jpg",
  "/image/image3.jpg",
];

export default function HeroCarousel () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        goToNext();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [currentIndex, isPaused]);

  // Go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous slide
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className={Styles.heroContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={Styles.carousel}>
        {/* Render current image */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={Styles.carouselImage}
        />

        {/* Previous and Next Buttons */}
        <button className={Styles.prevBtn} onClick={goToPrev}>
          &#10094; {/* Left arrow symbol */}
        </button>
        <button className={Styles.nextBtn} onClick={goToNext}>
          &#10095; {/* Right arrow symbol */}
        </button>

        {/* Dots for navigation */}
        <div className={Styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${Styles.dot} ${
                index === currentIndex ? Styles.active : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
