import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles/ratingReview.module.css";

export default function RatingReview({ reviewData, onSubmit, onClose }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [photos, setPhotos] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const maxCharsReviewTitle = 100;
  const maxCharsDescription = 2000;
  const maxPhotos = 5;

  // Populate the form fields when `reviewData` is available (for editing)
  useEffect(() => {
    if (reviewData) {
      setRating(reviewData.rating || 0);
      setInputValue(reviewData.title || "");
      setDescriptionValue(reviewData.reviewtext || "");
      setCustomerName(reviewData.owner || "");
      // Set default email or a placeholder if not provided
      setEmail(reviewData.email || "");
      setPhotos([]); // Assuming reviewData doesn't carry image data
    }
  }, [reviewData]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxCharsReviewTitle) {
      setInputValue(value);
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxCharsDescription) {
      setDescriptionValue(value);
    }
  };

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate the file type
    if (!(file.type === "image/jpeg" || file.type === "image/jpg")) {
      setErrorMessages((prev) => ({
        ...prev,
        [index]: "Only JPG or JPEG files are allowed. Please re-upload.",
      }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const newPhotos = [...photos];
      const photoData = {
        name: `photo${index + 1}`,
        data: e.target.result,
        file,
      };
      if (index < newPhotos.length) {
        newPhotos[index] = photoData; // Replace the existing photo if index is valid
      } else {
        newPhotos.push(photoData); // Add new photo if it's a new index
      }
      setPhotos(newPhotos);
      setErrorMessages((prev) => ({ ...prev, [index]: "" })); // Clear any previous error for this index
    };
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setInputValue("");
    setDescriptionValue("");
    setCustomerName("");
    setEmail("");
    setPhotos([]);
    setRating(0);
    setHover(0);
    setFormErrors({});
  };

  const validateForm = () => {
    const errors = {};
    if (!inputValue) errors.reviewTitle = "Review title is required.";
    if (!descriptionValue)
      errors.description = "Product review & description are required.";
    if (!email) errors.email = "Email is required.";
    if (email && !email.endsWith("@gmail.com"))
      errors.email = "Email must be a valid Gmail address.";
    if (!customerName) setCustomerName("Anonymous");

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const updatedReview = {
      ...reviewData, // Keep old review data intact
      title: inputValue,
      reviewtext: descriptionValue,
      rating,
      owner: customerName || "Anonymous",
      email: email || "", // Include the email (if relevant)
      date: new Date().toLocaleDateString(), // Update date on edit
    };

    if (onSubmit) onSubmit(updatedReview); // Pass updated review to parent component
    if (onClose) onClose(); // Close the popup
  };

  return (
    <div className={styles.overlay}>
      <div
        className={styles.ratingreviewmainbody}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.ratingreviewbody}>
          <div className={styles.titlediv}>
            <div className={styles.text}>Rating & Review</div>
            <i className={`material-icons ${styles.icon}`} onClick={onClose}>
              cancel
            </i>
          </div>
          <div className={styles.bar}></div>
          <div className={styles.imagebody}>
            {reviewData?.image && (
              <Image
                src={reviewData.image}
                width={160}
                height={160}
                className={styles.image}
                alt="product image"
              />
            )}
            <div className={styles.namerate}>
              <div className={styles.name}>
                {reviewData?.productname || "Product Name"}
              </div>
              <div className={styles.rate}>
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={`material-icons ${styles.ratingicon} ${
                      rating >= index + 1 || hover >= index + 1
                        ? styles.ratingiconhover
                        : ""
                    }`}
                    onClick={() => setRating(index + 1)}
                    onMouseEnter={() => setHover(index + 1)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    star
                  </i>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.bar}></div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.reviewtitle}>
              <div className={styles.title}>
                <div className={styles.name}>Review Title</div>
                <div className={styles.text}>
                  {inputValue.length}/{maxCharsReviewTitle}
                </div>
              </div>
              <input
                name="review-title"
                type="text"
                placeholder="Example: Easy to use"
                value={inputValue}
                onChange={handleInputChange}
                maxLength={maxCharsReviewTitle}
                className={`${styles.input} ${
                  formErrors.reviewTitle ? styles.errorBorder : ""
                }`}
              />
              {formErrors.reviewTitle && (
                <div className={styles.errorMessage}>
                  {formErrors.reviewTitle}
                </div>
              )}
            </div>

            <div className={styles.reviewtitle}>
              <div className={styles.title}>
                <div className={styles.name}>Product Review & Description</div>
                <div className={styles.text}>
                  {descriptionValue.length}/{maxCharsDescription}
                </div>
              </div>
              <textarea
                name="review-description"
                placeholder="Example: I like this product because..."
                value={descriptionValue}
                onChange={handleDescriptionChange}
                maxLength={maxCharsDescription}
                className={`${styles.textarea} ${
                  formErrors.description ? styles.errorBorder : ""
                }`}
              />
              {formErrors.description && (
                <div className={styles.errorMessage}>
                  {formErrors.description}
                </div>
              )}
            </div>

            <div className={styles.reviewtitle}>
              <div className={styles.title}>
                <div className={styles.name}>Add Your Photo</div>
              </div>
              <div className={styles.photoarea}>
                {photos.map((photo, index) => (
                  <div key={index} className={styles.photoContainer}>
                    <input
                      name={`review-image-${index}`}
                      type="file"
                      accept="image/jpeg, image/jpg"
                      onChange={(event) => handleFileChange(event, index)}
                      style={{ display: "none" }}
                      id={`file-input-${index}`}
                    />
                    <label
                      htmlFor={`file-input-${index}`}
                      className={styles.photoLabel}
                    >
                      {photo.data ? (
                        <Image
                          src={photo.data}
                          alt={`photo${index + 1}`}
                          className={styles.uploadedImage}
                          width={180}
                          height={180}
                        />
                      ) : (
                        <span>Add Photo</span>
                      )}
                    </label>
                    <span className={styles.photoName}>{photo.name}</span>
                    <i
                      className={`material-icons ${styles.icon}`}
                      onClick={() => handleRemovePhoto(index)}
                    >
                      cancel
                    </i>
                    {errorMessages[index] && (
                      <div className={styles.errorMessage}>
                        {errorMessages[index]}
                      </div>
                    )}
                  </div>
                ))}
                {photos.length < maxPhotos && (
                  <div className={styles.photoContainer}>
                    <input
                      name={`review-photo-field`}
                      type="file"
                      accept="image/jpeg, image/jpg"
                      onChange={(event) =>
                        handleFileChange(event, photos.length)
                      }
                      style={{ display: "none" }}
                      id={`file-input-${photos.length}`}
                    />
                    <label
                      htmlFor={`file-input-${photos.length}`}
                      className={styles.photoLabel}
                    >
                      <i className={`material-icons ${styles.imageicon}`}>
                        image
                      </i>
                      Add Photo ({photos.length + 1}/{maxPhotos})
                    </label>
                    {errorMessages[photos.length] && (
                      <div className={styles.errorMessage}>
                        {errorMessages[photos.length]}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.reviewtitle}>
              <div className={styles.title}>
                <div className={styles.name}>Customer Name</div>
              </div>
              <input
                name="customer-name"
                type="text"
                placeholder="Optional"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.reviewtitle}>
              <div className={styles.title}>
                <div className={styles.name}>Email</div>
              </div>
              <input
                name="customer-email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${styles.emailinput} ${
                  formErrors.email ? styles.errorBorder : ""
                }`}
              />
              {formErrors.email && (
                <div className={styles.errorMessage}>{formErrors.email}</div>
              )}
            </div>

            <button type="submit" className={styles.submitbtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
