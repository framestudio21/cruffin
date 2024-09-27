import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./styles/subpage.module.css";

// Modal component
function EditModal({
  show,
  onClose,
  onSave,
  field,
  userData,
  isPasswordRequired,
  isOTPRequired,
}) {
  const [formData, setFormData] = useState({ ...userData });
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (isPasswordRequired && !password) {
      alert("Password is required to update.");
      return;
    }

    if (field === "email" && isOTPRequired && !otp) {
      alert("OTP is required to update email.");
      return;
    }

    // Perform API call for validation and save changes
    onSave(formData);
    onClose();
  };

  const handleEmailValidation = (email) => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    return gmailPattern.test(email);
  };

  if (!show) return null; // Don't render modal if 'show' is false

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Edit {field}</h2>
        <form className={styles.formbody}>
          {field === "name_gender" && (
            <>
              <div className={styles.inputfieldsection}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className={styles.inputfield}
                />
              </div>
              <div className={styles.inputfieldsection}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className={styles.inputfield}
                />
              </div>
              <div className={styles.inputfieldsection}>
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={styles.inputfield}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </>
          )}

          {field === "email" && (
            <div className={styles.inputfieldsection}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.inputfield}
              />
              {!handleEmailValidation(formData.email) && (
                <p className={styles.error}>
                  Please enter a valid Gmail address.
                </p>
              )}
            </div>
          )}

          {field === "phone" && (
            <div className={styles.inputfieldsection}>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.inputfield}
              />
            </div>
          )}

          {isPasswordRequired && (
            <div className={styles.inputfieldsection}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputfield}
              />
            </div>
          )}

          {isOTPRequired && field === "email" && (
            <div className={styles.inputfieldsection}>
              <label>OTP</label>
              <input
                type="text"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className={styles.inputfield}
              />
            </div>
          )}

          <div className={styles.buttonsection}>
            <button
              type="button"
              className={styles.submitbtn}
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className={styles.submitbtn}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function UserDetails() {
  // sample user details
  // const userSampleData = [
  //   {
  //     id: 1,
  //     firstname: "sumit kumar",
  //     lastname: "duary",
  //     email: "duary.sumit21@gmail.com",
  //     phone: "6290985252",
  //     gender: "male",
  //   },
  // ];

  const [userData, setUserData] = useState({
    firstname: "sumit kumar",
    lastname: "duary",
    email: "duary.sumit21@gmail.com",
    phone: "6290985252",
    gender: "male",
    password: "Sumit21",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editField, setEditField] = useState("");
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
  const [isOTPRequired, setIsOTPRequired] = useState(false);

  const handleEditClick = (field) => {
    setEditField(field);

    if (field === "email" || field === "phone") {
      setIsPasswordRequired(true);
      if (field === "email") {
        setIsOTPRequired(true); // OTP verification for email
      }
    } else {
      setIsPasswordRequired(false);
      setIsOTPRequired(false);
    }

    setIsModalOpen(true);
  };

  const handleSave = (updatedData) => {
    // Simulate saving updated data to backend
    setUserData(updatedData);
  };

  return (
    <>
      <div className={styles.accountsubpagemainbody}>
        {/* page header div */}
        <div className={styles.header}>personal information</div>

        {/* user form and details */}
        <form className={styles.formbody}>
          {/* personal details section */}
          <div className={styles.inputfieldsection}>
            <div className={styles.title}>
              <div className={styles.name}>name</div>
              <button
                type="button"
                className={styles.editbtn}
                onClick={() => handleEditClick("name_gender")}
              >
                edit
              </button>
            </div>
            <div className={styles.inputfielddiv}>
              <input
                type="text"
                value={userData.firstname}
                readOnly
                name="first-name"
                className={styles.inputfield}
                placeholder="your name"
              />
              <input
                type="text"
                name="last-name"
                value={userData.lastname}
                readOnly
                className={styles.inputfield}
                placeholder="your Surname"
              />
            </div>
            <div className={styles.inputfielddiv}>
              {/* <input
                type="radio"
                id="male"
                name="gender"
                className={styles.radioinput}
                value={userData.gender}
                readOnly
              />
              <label for="male" className={styles.radioinputtitle}>
                male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                className={styles.radioinput}
                value={userData.gender}
                readOnly
              />
              <label for="female" className={styles.radioinputtitle}>
                female
              </label> */}

              <input
                type="text"
                value={userData.gender}
                readOnly
                className={styles.inputfield}
              />
            </div>
          </div>

          {/* email id section */}
          <div className={styles.inputfieldsection}>
            <div className={styles.title}>
              <div className={styles.name}>email</div>
              <button   type="button" className={styles.editbtn}  onClick={() => handleEditClick("email")}>edit</button>
            </div>
            <input
              type="email"
              className={styles.inputfield}
              placeholder="example@gmai.com"
              name="email"
              value={userData.email} 
              readOnly
            />
          </div>

          {/* phone section */}
          <div className={styles.inputfieldsection}>
            <div className={styles.title}>
              <div className={styles.name}>mobile</div>
              <button type="button" className={styles.editbtn}  onClick={() => handleEditClick("phone")}>edit</button>
            </div>
            <input
              type="tel"
              className={styles.inputfield}
              placeholder="+91 1234567890"
              name="mobile"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              value={userData.phone} readOnly
            />
          </div>
        </form>

        {/* faq div */}
        <div className={styles.faqbody}>
          <div className={styles.title}>frequently asked questions</div>
          <div className={styles.questionanswerbody}>
            <div className={styles.questionanswer}>
              <div className={styles.question}>
                <span className={styles.q}>Q.</span>What happens when I update
                my email address (or mobile number)?
              </div>
              <div className={styles.answer}>
                <span className={styles.ans}>ans.</span>Your login email id (or
                mobile number) changes, likewise. You'll receive all your
                account related communication on your updated email address (or
                mobile number).
              </div>
            </div>
            <div className={styles.questionanswer}>
              <div className={styles.question}>
                <span className={styles.q}>Q.</span>When will my Flipkart
                account be updated with the new email address (or mobile
                number)?
              </div>
              <div className={styles.answer}>
                <span className={styles.ans}>ans.</span>It happens as soon as
                you confirm the verification code sent to your email (or mobile)
                and save the changes.
              </div>
            </div>
            <div className={styles.questionanswer}>
              <div className={styles.question}>
                <span className={styles.q}>Q.</span>What happens to my existing
                Flipkart account when I update my email address (or mobile
                number)?
              </div>
              <div className={styles.answer}>
                <span className={styles.ans}>ans.</span>Updating your email
                address (or mobile number) doesn't invalidate your account. Your
                account remains fully functional. You'll continue seeing your
                Order history, saved information and personal details.
              </div>
            </div>
          </div>
        </div>

        {/* detele or deactivate account */}
        <div className={styles.buttonsection}>
          <button type="submit" className={styles.submitbtn}>
            deactivate account
          </button>
          <button type="submit" className={styles.submitbtn}>
            delete account
          </button>
        </div>
      </div>

      {/* Modal for editing user details */}
      <EditModal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        field={editField}
        userData={userData}
        isPasswordRequired={isPasswordRequired}
        isOTPRequired={isOTPRequired}
      />

    </>
  );
}
