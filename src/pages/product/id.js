import React, { useState, useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Nav from '../component/nav';
import Footer from '../component/footer';
import Card from "../component/card";
import ReviewSummary from '../component/reviewsummary';
import ReviewList from '../component/reviewlist';
import RatingReview from '../component/ratingReview';

 // Import context
// import { useProduct } from '../../context/ProductContext';

import Styles from "@/styles/id.module.css";

export default function Id() {

  const detailsRef = useRef(null); // Reference to the details section
  const productMainBodyRef = useRef(null); // Reference to the entire main body
  const [detailsAtBottom, setDetailsAtBottom] = useState(false); // State to track if details section is at the bottom

  const handleScroll = () => {
    const details = detailsRef.current;

    // Check if the details section is at the bottom
    if (details.scrollTop + details.clientHeight >= details.scrollHeight) {
      setDetailsAtBottom(true);
    } else {
      setDetailsAtBottom(false);
    }
  };

  const handleProductMainScroll = (e) => {
    const productMainBody = productMainBodyRef.current;

    // If the details section is not at the bottom, prevent main body scroll
    if (!detailsAtBottom) {
      productMainBody.scrollTop = 0;
    }
  };

  useEffect(() => {
    const details = detailsRef.current;
    const productMainBody = productMainBodyRef.current;

    // Add scroll listener to details section
    details.addEventListener('scroll', handleScroll);

    // Add scroll listener to product main body
    productMainBody.addEventListener('scroll', handleProductMainScroll);

    return () => {
      // Cleanup listeners
      details.removeEventListener('scroll', handleScroll);
      productMainBody.removeEventListener('scroll', handleProductMainScroll);
    };
  }, [detailsAtBottom]);


  
  // const { setProductDetails, setIsPopupVisible } = useProduct();
  // const { setProductDetails, setIsPopupVisible } = useContext(ProductContext);  // Get context methods
  const handleWriteReviewClick = () => {
    const product = {
      id: '1',
      name: 'Assorted Pack of 6 (with Mango) Cruffins',
      image: '/image/image3.jpg',
    };
    
    setProductDetails(product);
    setIsPopupVisible(true);
  };
  
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
  const decrementQuantity = () => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));

  const ratingsDistribution = {
    5: 100,
    4: 30,
    3: 40,
    2: 70,
    1: 0
  };

  const getInitials = fullName => {
    const names = fullName.split(' ');
    return names.map(name => name[0].toUpperCase()).join('');
  };

  const reviews = [
    {
      id: 1,
      author: 'Varsha Prajapati',
      authorInitials: 'vp',
      rating: 4,
      title: 'Loved the photos and others review',
      text: 'I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok',
      date: 'Aug 5, 2024',
      likes: 6,
      photo: "/image/card1.webp",
      photo1: "/image/image2.jpg"
    },
    {
      id: 2,
      authorInitials: 'vp',
      author: 'Harshita hazra',
      rating: 5,
      text: 'Loved the photos and others review. I have not tried these cruffins but I believe that these are very delicious.',
      date: 'Jun 25, 2024',
      likes: 12
    },
    {
        id: 3,
      authorInitials: 'vp',
      author: 'Varsha Prajapati',
        rating: 4,
        text: 'I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok',
        date: 'Aug 5, 2024',
        likes: 4,
        photo1: "/image/card1.webp",
        photo2: "/image/card2.webp",
        photo3: "/image/card1.webp",
        photo4: "/image/card2.webp"
      },
      {
        id: 4,
      authorInitials: 'vp',
      author: 'Harshita',
        rating: 3,
        text: 'Loved the photos and others review. I have not tried these cruffins but I believe that these are very delicious.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok',
        date: 'Jun 25, 2024',
        likes: 12
      },
      {
        id: 5,
      authorInitials: 'vp',
      author: 'Harshita',
        rating: 2,
        text: 'Loved the photos and others review. I have not tried these cruffins but I believe that these are very delicious.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok',
        date: 'Jun 25, 2024',
        likes: 12
      },
      {
        id: 6,
      authorInitials: 'vp',
      author: 'sumit kumar',
        rating: 1,
        text: 'Loved the photos and others review. I have not tried these cruffins but I believe that these are very delicious.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok',
        date: 'Jun 25, 2024',
        likes: 12
      }
  ].map(review => ({
    ...review,
    authorInitials: getInitials(review.author) // dynamically generate initials
  }));


  return (
    <>
      <Nav />
      <div ref={productMainBodyRef} className={Styles.productidmainbody} >

        {/* Product information */}
        <div className={Styles.productinformationbody}>
          <div className={Styles.imagebody}>
            <Image src="/image/image3.jpg" alt="product image" className={Styles.image} width={300} height={300} />
            <div className={Styles.tag}>summer special</div>
            <div className={Styles.sale}>for sale</div>
          </div>
          <div ref={detailsRef} className={Styles.detailsbody} >
            <div className={Styles.store}>
              <Link href="#">My store</Link> {` > `}
              <Link href="#">cruffin</Link>
            </div>
            <div className={Styles.name}>Assorted pack of 6 (with Mango) Cruffins</div>
            <div className={Styles.ratting}>
              <Link href="#">
                <div className={Styles.ratingpoint}>4.2</div>
                <div className={Styles.star}>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`material-icons ${Styles.icons}`}>star</i>
                  ))}
                </div>
                <div className={Styles.totalrating}>5 ratings</div>
              </Link>
            </div>
            <div className={Styles.orderedtimes}>ordered 1161 times this week</div>
            <div className={Styles.amountdiv}>
              <div className={Styles.oldamount}>Rs. 699.00</div>
              <div className={Styles.newamount}>Rs. 599.00</div>
              <div className={Styles.sale}>for sale</div>
            </div>
            <Link href="#" className={Styles.shoppinglink}>free shipping</Link>
            <div className={Styles.quantity}>
              <div className={Styles.text}>quantity</div>
              <div className={Styles.quantitybox}>
                <button className={Styles.quantitybutton} onClick={decrementQuantity}>-</button>
                <div className={Styles.quantityvalue}>{quantity}</div>
                <button className={Styles.quantitybutton} onClick={incrementQuantity}>+</button>
              </div>
            </div>
            <div className={Styles.specialoccasion}>
              <div className={Styles.text}>
                <div className={Styles.occasionname}>Rakshabandhan special</div>
                <i className={`material-icons ${Styles.icons}`}>help</i>
                <div className={Styles.hovertext}>ordering as a gift. Add a rakhi & tikka to your order.</div>
              </div>
              <div className={Styles.occasionitem}>
                <Image src="/image/image2.jpg" alt="Rakhi" className={Styles.occasionimage} width={60} height={60} />
                <div className={Styles.text}>Rakhi & Tekka</div>
              </div>
            </div>
            <div className={Styles.cartbutton}>
              <div className={Styles.text}>powered by frame studio</div>
              <button className={Styles.cart}>add to cart</button>
              <button className={Styles.buy}>buy it now</button>
            </div>
            <div className={Styles.description}>
              Indulge in a deliciously playful treat with our Lotus Biscoff Cruffin. A flaky croissant meets a sweet muffin, filled with the iconic and addictive flavor of Lotus Biscoff. Perfect for a quirky and fun twist on your morning pastry.
            </div>
            <Link href="#" className={Styles.share}>
              <i className={`material-icons ${Styles.icons}`}>share</i> share
            </Link>
          </div>
        </div>

        {/* Product carousel */}
        <div className={Styles.cardcarouselbody}>
          <div className={Styles.title}>you may also like</div>
          <div className={Styles.cardcarousel}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* Reviews */}
        <div className={Styles.reviewdiv}>
          <div className={Styles.title}>customer reviews</div>
          <ReviewSummary averageRating={5.0} totalReviews={8} ratingsDistribution={ratingsDistribution} />
        </div>

        {/* Review comments */}
        <div className={Styles.reviewcommetsdiv}>
          <div className={Styles.title}>Reviews with comments</div>
          <ReviewList reviews={reviews} />
        </div>
      </div>
      <Footer />

      {/* rating review div */}
      {/* <RatingReview/> */}
    </>
  );
}
