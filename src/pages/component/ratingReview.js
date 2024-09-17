// import React, { useState } from "react";
// import Image from "next/image";
// import styles from "./styles/ratingReview.module.css";

// export default function RatingReview() {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [inputValue, setInputValue] = useState("");
//   const [descriptionValue, setDescriptionValue] = useState("");
//   const [customerName, setCustomerName] = useState("");
//   const [email, setEmail] = useState("");
//   const [photos, setPhotos] = useState([]);
//   const [errorMessages, setErrorMessages] = useState([]);
//   const [formErrors, setFormErrors] = useState({});

//   const maxCharsReviewTitle = 100;
//   const maxCharsDescription = 2000;
//   const maxPhotos = 5;

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     if (value.length <= maxCharsReviewTitle) {
//       setInputValue(value);
//     }
//   };

//   const handleDescriptionChange = (e) => {
//     const value = e.target.value;
//     if (value.length <= maxCharsDescription) {
//       setDescriptionValue(value);
//     }
//   };

//   const handleFileChange = (event, index) => {
//     const file = event.target.files[0];
//     if (!file) return;
//     if (!(file.type === "image/jpeg" || file.type === "image/jpg")) {
//       setErrorMessages({
//         ...errorMessages,
//         [index]: "Only JPG or JPEG files are allowed. Please re-upload.",
//       });
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const newPhotos = [...photos];
//       const photoData = {
//         name: `photo${index + 1}`,
//         data: e.target.result,
//         file,
//       };
//       if (index < photos.length) {
//         newPhotos[index] = photoData;
//       } else {
//         newPhotos.push(photoData);
//       }
//       setPhotos(newPhotos);
//       setErrorMessages({ ...errorMessages, [index]: "" });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleRemovePhoto = (index) => {
//     let filteredPhotos = photos.filter((_, idx) => idx !== index);
//     filteredPhotos = filteredPhotos.map((photo, idx) => ({
//       ...photo,
//       name: `photo${idx + 1}`,
//     }));
//     setPhotos(filteredPhotos);
//     let newErrorMessages = errorMessages.filter((_, idx) => idx !== index);
//     setErrorMessages(newErrorMessages);
//   };

//   const validateForm = () => {
//     let errors = {};
//     if (!inputValue) errors.reviewTitle = "Review title is required.";
//     if (!descriptionValue)
//       errors.description = "Product review & description is required.";
//     if (!email) errors.email = "Email is required.";
//     if (email && !email.endsWith("@gmail.com"))
//       errors.email = "Email must be a valid Gmail address.";
//     if (!customerName) setCustomerName("Anonymous");

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return; // Stop the form submission if validation fails
//     }

//     const formData = new FormData();
//     formData.append("reviewTitle", inputValue);
//     formData.append("description", descriptionValue);
//     formData.append("email", email);
//     formData.append("customerName", customerName || "Anonymous");

//     photos.forEach((photo, index) => {
//       formData.append(`photo${index + 1}`, photo.file);
//     });

//     // Handle the form data submission (e.g., send to server)
//     console.log("Form Data Submitted:", Object.fromEntries(formData));
//   };

//   return (
//     <div className={styles.overlay}>
//       <div
//         className={styles.ratingreviewmainbody}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className={styles.ratingreviewbody}>
//           <div className={styles.titlediv}>
//             <div className={styles.text}>Rating & Review</div>
//             <i className={`material-icons ${styles.icon}`}>cancel</i>
//           </div>
//           <div className={styles.bar}></div>
//           <div className={styles.imagebody}>
//             <Image
//               src="/image/image1.webp"
//               width={180}
//               height={180}
//               className={styles.image}
//               alt="product image"
//             />
//             <div className={styles.namerate}>
//               <div className={styles.name}>
//                 Assorted Pack of 6 (with Mango) Cruffins
//               </div>
//               <div className={styles.rate}>
//                 {[...Array(5)].map((_, i) => {
//                   const ratingValue = i + 1;
//                   return (
//                     <i
//                       key={i}
//                       className={`material-icons ${styles.icon} ${
//                         ratingValue <= (hover || rating) ? styles.filled : ""
//                       }`}
//                       onClick={() => setRating(ratingValue)}
//                       onMouseEnter={() => setHover(ratingValue)}
//                       onMouseLeave={() => setHover(0)}
//                     >
//                       star
//                     </i>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//           <div className={styles.bar}></div>
//           <form className={styles.form} onSubmit={handleSubmit}>
//             <div className={styles.reviewtitle}>
//               <div className={styles.title}>
//                 <div className={styles.name}>Review Title</div>
//                 <div className={styles.text}>
//                   {inputValue.length}/{maxCharsReviewTitle}
//                 </div>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Example: Easy to use"
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 maxLength={maxCharsReviewTitle}
//                 className={styles.input}
//               />
//               {formErrors.reviewTitle && (
//                 <div className={styles.errorMessage}>
//                   {formErrors.reviewTitle}
//                 </div>
//               )}
//             </div>

//             <div className={styles.reviewtitle}>
//               <div className={styles.title}>
//                 <div className={styles.name}>
//                   Product Review & Description
//                 </div>
//                 <div className={styles.text}>
//                   {descriptionValue.length}/{maxCharsDescription}
//                 </div>
//               </div>
//               <textarea
//                 placeholder="Example: I like this product because..."
//                 value={descriptionValue}
//                 onChange={handleDescriptionChange}
//                 maxLength={maxCharsDescription}
//                 className={styles.textarea}
//               />
//               {formErrors.description && (
//                 <div className={styles.errorMessage}>
//                   {formErrors.description}
//                 </div>
//               )}
//             </div>

//             <div className={styles.reviewtitle}>
//               <div className={styles.title}>
//                 <div className={styles.name}>Add Your Photo</div>
//               </div>
//               <div className={styles.photoarea}>
//                 {photos.map((photo, index) => (
//                   <div key={index} className={styles.photoContainer}>
//                     <input
//                       type="file"
//                       accept="image/jpeg, image/jpg"
//                       onChange={(event) => handleFileChange(event, index)}
//                       style={{ display: "none" }}
//                       id={`file-input-${index}`}
//                     />
//                     <label
//                       htmlFor={`file-input-${index}`}
//                       className={styles.photoLabel}
//                     >
//                       {photo.data ? (
//                         <img
//                           src={photo.data}
//                           alt={`photo${index + 1}`}
//                           className={styles.uploadedImage}
//                         />
//                       ) : (
//                         <span>Add Photo</span>
//                       )}
//                     </label>
//                     <span className={styles.photoName}>{photo.name}</span>
//                     <i
//                       className={`material-icons ${styles.icon}`}
//                       onClick={() => handleRemovePhoto(index)}
//                     >
//                       cancel
//                     </i>
//                     {errorMessages[index] && (
//                       <div className={styles.errorMessage}>
//                         {errorMessages[index]}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//                 {photos.length < maxPhotos && (
//                   <div className={styles.photoContainer}>
//                     <input
//                       type="file"
//                       accept="image/jpeg, image/jpg"
//                       onChange={(event) =>
//                         handleFileChange(event, photos.length)
//                       }
//                       style={{ display: "none" }}
//                       id={`file-input-${photos.length}`}
//                     />
//                     <label
//                       htmlFor={`file-input-${photos.length}`}
//                       className={styles.photoLabel}
//                     >
//                       <i className={`material-icons ${styles.imageicon}`}>
//                         image
//                       </i>
//                       Add Photo ({photos.length + 1}/{maxPhotos})
//                     </label>
//                     {errorMessages[photos.length] && (
//                       <div className={styles.errorMessage}>
//                         {errorMessages[photos.length]}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className={styles.reviewtitle}>
//               <div className={styles.title}>
//                 <div className={styles.name}>Customer Name</div>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Example: John Wick"
//                 value={customerName}
//                 onChange={(e) => setCustomerName(e.target.value)}
//                 className={styles.input}
//               />
//             </div>

//             <div className={styles.reviewtitle}>
//               <div className={styles.title}>
//                 <div className={styles.name}>Customer Email</div>
//               </div>
//               <input
//                 type="email"
//                 placeholder="Example: example@gmail.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className={styles.input}
//               />
//               {formErrors.email && (
//                 <div className={styles.errorMessage}>{formErrors.email}</div>
//               )}
//             </div>

//             <button type="submit" className={styles.submitbtn}>
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles/ratingReview.module.css";

export default function RatingReview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [photos, setPhotos] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  
  const maxCharsReviewTitle = 100;
  const maxCharsDescription = 2000;
  const maxPhotos = 5;

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
    if (!(file.type === "image/jpeg" || file.type === "image/jpg")) {
      setErrorMessages({
        ...errorMessages,
        [index]: "Only JPG or JPEG files are allowed. Please re-upload.",
      });
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
      if (index < photos.length) {
        newPhotos[index] = photoData;
      } else {
        newPhotos.push(photoData);
      }
      setPhotos(newPhotos);
      setErrorMessages({ ...errorMessages, [index]: "" });
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (index) => {
    let filteredPhotos = photos.filter((_, idx) => idx !== index);
    filteredPhotos = filteredPhotos.map((photo, idx) => ({
      ...photo,
      name: `photo${idx + 1}`,
    }));
    setPhotos(filteredPhotos);
    let newErrorMessages = errorMessages.filter((_, idx) => idx !== index);
    setErrorMessages(newErrorMessages);
  };

  const validateForm = () => {
    let errors = {};
    if (!inputValue) errors.reviewTitle = "Review title is required.";
    if (!descriptionValue)
      errors.description = "Product review & description is required.";
    if (!email) errors.email = "Email is required.";
    if (email && !email.endsWith("@gmail.com"))
      errors.email = "Email must be a valid Gmail address.";
    if (!customerName) setCustomerName("Anonymous");

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (customerName === "Anonymous") {
      alert("Please write your name before submitting the review.");
      return;
    }

    const formData = new FormData();
    formData.append("reviewTitle", inputValue);
    formData.append("description", descriptionValue);
    formData.append("email", email);
    formData.append("customerName", customerName);
    formData.append("rating", rating);
    formData.append("timestamp", new Date().toISOString());

    photos.forEach((photo, index) => {
      formData.append(`photo${index + 1}`, photo.file);
    });

    console.log("Form Data Submitted:", Object.fromEntries(formData));

    // Reset the form after submission
    resetForm();
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

  const handleClose = () => {
    resetForm();
    // Additional logic to close the modal/div can be added here
  };  

  return (
    <div className={styles.overlay}>
      <div
        className={styles.ratingreviewmainbody}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.ratingreviewbody}>
          <div className={styles.titlediv}>
            <div className={styles.text}>Rating & Review</div>
            <i
              className={`material-icons ${styles.icon}`}
              onClick={handleClose}
            >
              cancel
            </i>
          </div>
          <div className={styles.bar}></div>
          <div className={styles.imagebody}>
            <Image
              src="/image/image1.webp"
              width={180}
              height={180}
              className={styles.image}
              alt="product image"
            />
            <div className={styles.namerate}>
              <div className={styles.name}>
                Assorted Pack of 6 (with Mango) Cruffins
              </div>
              <div className={styles.rate}>
                {[...Array(5)].map((_, i) => {
                  const ratingValue = i + 1;
                  return (
                    <i
                      key={i}
                      className={`material-icons ${styles.icon} ${
                        ratingValue <= (hover || rating) ? styles.filled : ""
                      }`}
                      onClick={() => setRating(ratingValue)}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    >
                      star
                    </i>
                  );
                })}
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
                <div className={styles.name}>
                  Product Review & Description
                </div>
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
                      name="review-image"
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
                     name="review-photo-field"
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
              name="reviewer-name"
                type="text"
                placeholder="Example: John Wick"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.reviewtitle}>
              <div className={styles.title}>
                <div className={styles.name}>Customer Email</div>
              </div>
              <input
              name="reviewer-email"
                type="email"
                placeholder="Example: example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${styles.input} ${
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

