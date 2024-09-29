import React, { useState } from "react";
import Image from "next/image";

import styles from "./styles/subpage.module.css";

export default function ManagerAddress() {
  const [sampleAddress, setSampleAddress] = useState([
    {
      id: "1",
      type: "home",
      name: "Sumit Kumar Duary",
      mobile: "6290985252",
      email: "duary.sumit21@gail.com",
      addressDetails: {
        locality: "Duarypara",
        address: "moynapur, kharia moynapur, uluberia",
        city: "Uluberia",
        district: "Howrah",
        state: "West Bengal",
        landmark: "Near Duary Chicken Center",
        pincode: "711316",
      },
      alternateMobile: "9748383135",
    },
  ]);
  const [newAddress, setNewAddress] = useState({
    type: "",
    name: "",
    mobile: "",
    email: "",
    alternateMobile: "",
    addressDetails: {
        locality: "", // Corrected the spelling from 'locallity' to 'locality'
        address: "",
        city: "",
        district: "",
        state: "",
        landmark: "",
        pincode: "",
      },
  });

  const [formErrors, setFormErrors] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // Track which address is being edited

  // Geolocation handling
  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getAddressFromCoordinates(latitude, longitude);
        },
        (error) => {
          alert("Error getting location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const getAddressFromCoordinates = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();

      // Check if results array exists and has at least one result
      if (data.results && data.results.length > 0) {
        const addressComponents = data.results[0].address_components;

        setNewAddress({
          ...newAddress,
          address: data.results[0].formatted_address,
          city: extractAddressComponent(addressComponents, "locality"),
          state: extractAddressComponent(
            addressComponents,
            "administrative_area_level_1"
          ),
          pincode: extractAddressComponent(addressComponents, "postal_code"),
          locality: extractAddressComponent(addressComponents, "sublocality"), // Update locality directly here
        });
      } else {
        console.error("No results found in Google Maps API response", data);
      }
    } catch (error) {
      console.error("Error fetching data from Google Maps API", error);
    }
  };

  const extractAddressComponent = (components, type) => {
    const component = components.find((c) => c.types.includes(type));
    return component ? component.long_name : "";
  };

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is for addressDetails
    if (name in newAddress) {
        setNewAddress({ ...newAddress, [name]: value });
    } else if (name in newAddress.addressDetails) {
        setNewAddress({
            ...newAddress,
            addressDetails: { 
                ...newAddress.addressDetails, 
                [name]: value 
            },
        });
    }
};


  // Handle form submission
  const handleFormSubmit = () => {

      // Reset previous errors
  setFormErrors({});

  let errors = {};

  const { name, mobile, email, pincode, address, city, district, state, type } = newAddress;

  if (!name) errors.name = "Name is required.";
  if (!mobile) errors.mobile = "Mobile number is required.";
  if (!email) errors.email = "Email is required.";
  if (!pincode) errors.pincode = "Pincode is required.";
  if (!address) errors.address = "Address is required.";
  if (!address) errors.city = "city is required.";
  if (!address) errors.district = "district is required.";
  if (!address) errors.state = "state is required.";
  if (!type) errors.type = "Please select an address type (Home or Work).";

  // If there are any errors, set the errors state and return
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return; // Prevent submission if validation fails
  }

      // Validation for required fields
  if (!name || !mobile || !email || !pincode || !address || !type) {
    alert("Please fill out all required fields.");
    return; // Prevent submission if validation fails
  }


    console.log("Form Data:", newAddress);
    setSampleAddress([newAddress, ...sampleAddress]);

    if (editingIndex !== null) {
      // Edit existing address
      const updatedAddresses = [...sampleAddress];
      updatedAddresses[editingIndex] = newAddress;
      setSampleAddress(updatedAddresses);
    } else {
      // Add new address
      setSampleAddress([newAddress, ...sampleAddress]);
    }

    // Clear the form after submission
    resetForm();

    // Clear the form after submission
    setNewAddress({
        type: "",
        name: "",
        mobile: "",
        email: "",
        alternateMobile: "",
        addressDetails: {
            locality: "", // Corrected the spelling from 'locallity' to 'locality'
            address: "",
            city: "",
            district: "",
            state: "",
            landmark: "",
            pincode: "",
          },
    });
    setShowForm(false); // Close the form after saving
  };

  const resetForm = () => {
    setNewAddress({
      type: "",
      name: "",
      mobile: "",
      email: "",
      alternateMobile: "",
      addressDetails: {
        locality: "",
        address: "",
        city: "",
        district: "",
        state: "",
        landmark: "",
        pincode: "",
      },
    });
    setEditingIndex(null);
    setShowForm(false); // Close the form after saving
  };

  const handleEditClick = (index) => {
    setNewAddress(sampleAddress[index]);
    setEditingIndex(index); // Set the index of the address being edited
    setShowForm(true); // Show the form
  };

  const handleDeleteClick = (index) => {
    const updatedAddresses = sampleAddress.filter((_, i) => i !== index);
    setSampleAddress(updatedAddresses);
  };

  return (
    <>
      <div className={styles.accountsubpagemainbody}>
        <div className={styles.header}>Manage Addresses</div>

        <button
          className={styles.addaddressbtndiv}
          
          onClick={() =>  {resetForm(); setShowForm(true)}}
        >
          <span>+</span> Add a New Address
        </button>

        <div className={styles.addresssectionbody}>
          {sampleAddress.map((address, index) => (
            <div key={index} className={styles.addressbody}>
              <div className={styles.tag}>
                <div className={styles.tagname}>{address.type}</div>
              </div>
              <div className={styles.name}>{address.name}</div>
              <div className={styles.contactdiv}>
                <div className={styles.mobile}>
                  <div className={styles.title}>Mobile:</div>
                  <div className={styles.number}>+91 {address.mobile}</div>
                </div>
                {/* Check if email is provided before displaying */}
                {address.email && (
                  <div className={styles.email}>
                    <div className={styles.title}>Email:</div>
                    <div className={styles.emailid}>+91 {address.email}</div>
                  </div>
                )}
              </div>
              <div className={styles.address}>
                {/* Check if addressDetails exists before accessing its properties */}
                {address.addressDetails && (
                  <>
                    {address.addressDetails.landmark &&
                      `${address.addressDetails.landmark}, `}
                    {address.addressDetails.locality},{" "}
                    {address.addressDetails.address},{" "}
                    {address.addressDetails.city},{" "}
                    {address.addressDetails.district},{" "}
                    {address.addressDetails.state} - {address.addressDetails.pincode}
                  </>
                )}
              </div>
              <div className={styles.btn}>
                <button className={styles.edit} onClick={() => handleEditClick(index)}>Edit</button>
                <button className={styles.delete} onClick={() => handleDeleteClick(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div className={styles.formpopupdiv}>
            <div className={styles.formcontainer}>
            <div className={styles.title}>{editingIndex !== null ? "Edit Address" : "Add a New Address"}</div>
              <div>
              <button className={styles.googlemapbtn} onClick={handleUseCurrentLocation}>
                <Image src="/image/google-map-icon.svg" className={styles.mapimage} width={50} height={50} alt="google-map-image"/>
                Use My Current Location
              </button>
              </div>
              <div className={styles.inputfieldsection}>
             <div className={styles.formpopupdivinputfielddiv}>
             <input
                type="text"
                name="name"
                placeholder="Name"
                value={newAddress.name || ""}
                onChange={handleInputChange}
                className={styles.inputfield}
              />
              {formErrors.name && <div className={styles.error}>{formErrors.name}</div>}
              </div>
              </div>
              <div className={styles.inputfieldsection}>
             <div className={styles.formpopupdivinputfielddiv}>
              <input
                type="text"
                name="mobile"
                placeholder="10-digit mobile number"
                value={newAddress.mobile || ""}
                className={styles.inputfield}
                onChange={handleInputChange}
              />
              {formErrors.name && <div className={styles.error}>{formErrors.mobile}</div>}
              </div>
             <div className={styles.formpopupdivinputfielddiv}>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={newAddress.email || ""}
                className={styles.inputfield}
                onChange={handleInputChange}
              />
              {formErrors.name && <div className={styles.error}>{formErrors.email}</div>}
              </div>
              </div>
              <div className={styles.inputfieldsection}>
             <div className={styles.formpopupdivinputfielddiv}>
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={newAddress.addressDetails.pincode || ""}
                className={styles.inputfield}
                onChange={handleInputChange}
              />
               {formErrors.name && <div className={styles.error}>{formErrors.pincode}</div>}
               </div>
             <div className={styles.formpopupdivinputfielddiv}>
              <input
                type="text"
                name="locality" // Ensure the name matches the state
                placeholder="Locality"
                value={newAddress.addressDetails.locality || ""}
                className={styles.inputfield}
                onChange={handleInputChange}
              />
               </div>
              </div>
              <div className={styles.inputfieldsection}>
             <div className={styles.formpopupdivinputfielddiv}>
              <input
                type="text"
                name="address"
                placeholder="Address (Area and Street)"
                value={newAddress.addressDetails.address || ""}
                className={styles.inputfield}
                onChange={handleInputChange}
              />
              {formErrors.name && <div className={styles.error}>{formErrors.address}</div>}
              </div>
              </div>
              <div className={styles.inputfieldsection}>
             <div className={styles.formpopupdivinputfielddiv}>
             <input
                type="text"
                name="city"
                placeholder="City/Town"
                value={newAddress.addressDetails.city || ""}
                className={styles.inputfield}
                onChange={handleInputChange}
              />
              {formErrors.name && <div className={styles.error}>{formErrors.city}</div>}
              </div>
             <div className={styles.formpopupdivinputfielddiv}>
             <input
                type="text"
                name="district"
                placeholder="District"
                value={newAddress.addressDetails.district || ""}
                className={styles.inputfield}
                onChange={handleInputChange}
              />
              {formErrors.name && <div className={styles.error}>{formErrors.district}</div>}
              </div>
             <div className={styles.formpopupdivinputfielddiv}>
             <input
                type="text"
                name="state"
                placeholder="State"
                value={newAddress.addressDetails.state || ""}
                className={styles.inputfield}
                onChange={handleInputChange}
              />
              {formErrors.name && <div className={styles.error}>{formErrors.state}</div>}
              </div>
              </div>
              <div className={styles.inputfieldsection}>
              <input
                type="text"
                name="landmark"
                placeholder="Landmark (Optional)"
                value={newAddress.addressDetails.landmark || ""}
                className={styles.inputfield}
                onChange={handleInputChange}
              />
              </div>
              <div className={styles.inputfieldsection}>
              <input
                type="text"
                name="alternateMobile"
                placeholder="Alternate Phone (Optional)"
                value={newAddress.alternateMobile || ""}
                className={styles.inputfield}
                onChange={handleInputChange}
              />
              </div>

              <div>
             <div className={styles.formpopupdivinputfielddiv}>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="home" // This should be the value representing "Home"
                    checked={newAddress.type === "home"} // Check if newAddress.type is "home"
                    onChange={handleInputChange}
                  />{" "}
                  Home
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="work" // This should be the value representing "Work"
                    checked={newAddress.type === "work"} // Check if newAddress.type is "work"
                    onChange={handleInputChange}
                  />{" "}
                  Work
                </label>
                {formErrors.name && <div className={styles.error}>{formErrors.type}</div>}
                </div>
              </div>

              <div className={styles.btnsection}>
              <button className={styles.submitbtn} onClick={handleFormSubmit}>Save</button>
              <button className={styles.closebtn} onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
