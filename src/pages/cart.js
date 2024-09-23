import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import Nav from "./component/nav";

import styles from "../styles/cart.module.css";


export default dynamic(() => Promise.resolve(Cart), { ssr: false });
function Cart() {
  // Initial product data
  const initialProductItem = [
    {
      Id: "1",
      name: "berry donut set of 4",
      oldprice: "499.00",
      newprice: "399.00",
      image: "/image/image1.webp",
      quantity: 1, // Default quantity
    },
    {
      Id: "2",
      name: "berry donut set of 6",
      oldprice: "799.00",
      newprice: "599.00",
      image: "/image/image2.jpg",
      quantity: 1, // Default quantity
    },
    {
      Id: "3",
      name: "berry donut set of 2",
      oldprice: "599.00",
      newprice: "349.00",
      image: "/image/image3.jpg",
      quantity: 1, // Default quantity
    },
  ];

  const deliveryCharge = 100;
  const packagingFee = 70;
  const couponDiscount = 100; // Assuming a flat discount of Rs. 100

  // Manage product state
  const [products, setProducts] = useState(initialProductItem);

  // Function to increment quantity
  const incrementQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.Id === id
          ? { ...product, quantity: parseInt(product.quantity) + 1 }
          : product
      )
    );
  };

  // Function to decrement quantity
  const decrementQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.Id === id
          ? {
              ...product,
              quantity: Math.max(parseInt(product.quantity) - 1, 1),
            }
          : product
      )
    );
  };

  // Function to remove product from cart
  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.Id !== id)
    );
  };

  // Calculate total price for each product (newprice * quantity)
  const calculateTotalPrice = (price, quantity) => {
    return (parseFloat(price) * parseInt(quantity)).toFixed(2);
  };

  // Calculate total old price for all items
  const totalOldPrice = products.reduce(
    (acc, product) => acc + parseFloat(product.oldprice) * product.quantity,
    0
  );

  // Calculate total new price for all items
  const totalNewPrice = products.reduce(
    (acc, product) => acc + parseFloat(product.newprice) * product.quantity,
    0
  );

  // Calculate total product count
  const totalItems = products.reduce((acc, product) => acc + product.quantity, 0);

  // Calculate total discount amount
  const totalDiscount = totalOldPrice - totalNewPrice;

  // Calculate percentage discount
  const discountPercentage = ((totalDiscount / totalOldPrice) * 100).toFixed(2);

  // Calculate final amount after applying delivery, packaging, and coupon
  const totalAmount = totalNewPrice + deliveryCharge + packagingFee - couponDiscount - totalDiscount;

  // Calculate total savings
  const totalSavings = totalOldPrice - totalAmount;


  // Track the text input and character count
  const [remarks, setRemarks] = useState("");
  const maxCharacters = 2000;

  // Update the state as the user types
  const handleRemarksChange = (e) => {
    setRemarks(e.target.value);
  };

  // Handle form submission and gather FormData
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Add each product's details to FormData
    products.forEach((product, index) => {
      formData.append(`products[${index}][name]`, product.name);
      formData.append(`products[${index}][image]`, product.image);
      formData.append(`products[${index}][newprice]`, product.newprice);
      formData.append(`products[${index}][oldprice]`, product.oldprice);
      formData.append(`products[${index}][quantity]`, product.quantity);
      formData.append(
        `products[${index}][total]`,
        calculateTotalPrice(product.newprice, product.quantity)
      );
    });

        // Add the order remarks
        formData.append("orderRemarks", remarks);
        formData.append("totalOldPrice", totalOldPrice);
        formData.append("totalNewPrice", totalNewPrice);
        formData.append("totalDiscount", totalDiscount);
        formData.append("totalAmount", totalAmount);
        formData.append("totalSavings", totalSavings);

    // Add the order remarks
    formData.append("orderRemarks", remarks);

    // You can now log the FormData to check or send it via an API request
    // For example:
    console.log("FormData:", formData);

    // Log FormData contents for debugging
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Example to send FormData using fetch:
    fetch("/api/submitOrder", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log("Order submitted:", data))
      .catch((error) => console.error("Error:", error));
  };

  const ProductRow = ({ item, incrementQuantity, decrementQuantity, removeProduct, calculateTotalPrice }) => (
    <tr className={styles.tabledatarow} key={item.Id}>
                    <td className={styles.tabledata1}>
                      <Image
                        src={item.image}
                        width={100}
                        height={100}
                        className={styles.image}
                        alt={item.name}
                      />
                      <div className={styles.itemdetailsdiv}>
                        <div className={styles.title}>{item.name}</div>
                        <div className={styles.amount}>
                          <div className={styles.oldprice}>
                            Rs. {item.oldprice}
                          </div>
                          <div className={styles.newprice}>
                            Rs. {item.newprice}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.tabledata2}>
                      <div className={styles.quantitybox}>
                        <button
                          className={styles.quantitybutton}
                          onClick={() => decrementQuantity(item.Id)}
                        >
                          -
                        </button>
                        <div className={styles.quantityvalue}>
                          {item.quantity}
                        </div>
                        <button
                          className={styles.quantitybutton}
                          onClick={() => incrementQuantity(item.Id)}
                        >
                          +
                        </button>
                      </div>
                      <i
                        className={`material-icons ${styles.icon}`}
                        onClick={() => removeProduct(item.Id)}
                      >
                        delete
                      </i>
                    </td>
                    <td className={styles.tabledata3}>
                      Rs. {calculateTotalPrice(item.newprice, item.quantity)}
                    </td>
                  </tr>
)

  return (
    <>
      <Nav />
      <div className={styles.cartpagemainbody}>
        {/* title header */}
        <div className={styles.toptitlediv}>
          <div className={styles.title}>your cart</div>
          <Link href="/" className={styles.titlelink}>
            Continue Shopping
          </Link>
        </div>

        {/* product cart with item */}
        <form onSubmit={handleSubmit}>
          <div className={styles.productcartmainbody}>
            <table className={styles.itemtable}>
              <thead>
                <tr className={styles.tableheaderrow}>
                  <th className={styles.tableheader1}>product</th>
                  <th className={styles.tableheader2}>quantity</th>
                  <th className={styles.tableheader3}>amount</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                <ProductRow
                key={item.Id}
                item={item}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeProduct={removeProduct}
                calculateTotalPrice={calculateTotalPrice}
              />
                ))}
              </tbody>
            </table>
          </div>

          {/* remarks section */}
          <div className={styles.remarksection}>
            <div className={styles.titlesection}>
              <div className={styles.title}>any special instructions</div>
              <div className={styles.count}>
                {maxCharacters - remarks.length}
              </div>
            </div>
            <textarea
              name="order-remarks"
              className={styles.textarea}
              placeholder="i like to add some other topings"
              value={remarks} // Bind the textarea to state
              onChange={handleRemarksChange} // Update state on change
              maxLength={maxCharacters} // Limit to max characters
            />
          </div>

          {/* total amount conunt and cupons etc */}
          <div className={styles.checkoutsection}>
            <Link href="#" className={styles.cuponsection}>
              <div className={styles.text}>
                <i className={`material-icons ${styles.icon}`} alt="loyalty">
                  loyalty
                </i>
                <div className={styles.text1}>apply coupons</div>
              </div>
                <i
                  className={`material-icons ${styles.icon}`}
                  alt="arrow_forward"
                >
                  arrow_forward
                </i>
            </Link>
            <div className={styles.textandlinksection}>
              <div className={styles.text}>
                Taxes and discounts calculated at checkout
              </div>
              <Link href="#" className={styles.link}>
                free shopping
              </Link>
            </div>
            <div className={styles.amountsection}>
              <div className={styles.billbody}>
                <div className={styles.text}>
                  <div className={styles.title}>Price ({totalItems} items)</div>
                  <div className={styles.amount}>Rs. {totalOldPrice.toFixed(2)}</div>
                </div>

                <div className={styles.text}>
                  <div className={styles.title}>delivery charges</div>
                  <div className={styles.amount}>
                    <div className={styles.cutprice}>Rs. {deliveryCharge}</div>
                    <div className={styles.free}>free</div>
                  </div>
                </div>

                <div className={styles.text}>
                  <div className={styles.title}>secured packaging fee</div>
                  <div className={styles.amount}>
                    <div className={styles.cutprice}>Rs. {packagingFee}</div>
                    <div className={styles.free}>free</div>
                  </div>
                </div>

                <div className={styles.text}>
                  <div className={styles.title}>discount</div>
                  <div className={styles.amount}>
                    <div className={styles.price}>Rs. {totalDiscount.toFixed(2)} ({discountPercentage}%)</div>
                  </div>
                </div>

                <div className={styles.text}>
                  <div className={styles.title}>
                    coupon <span className={styles.couponcode}>#order100</span>
                  </div>
                  <div className={styles.amount}>
                    <div className={styles.price}>Rs. - {couponDiscount}</div>
                  </div>
                </div>
              </div>
              <div className={styles.billbody}>
                <div className={styles.text}>
                  <div className={styles.title}>total amount</div>
                  <div className={styles.amount}>Rs. {totalAmount.toFixed(2)}</div>
                </div>
              </div>
              <div className={styles.saveamounttext}>
                you will save Rs. {totalSavings.toFixed(2)} on this order
              </div>
            </div>
            <button type="submit" className={styles.orderbtn}>
              place order
            </button>
          </div>
        </form>
      </div>
    </>
  );
  }
