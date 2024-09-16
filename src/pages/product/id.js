// import React, {useState, useRef} from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// import Nav from '../component/nav'
// import Footer from '../component/footer'
// import Card from "../component/card"
// import ReviewSummary from '../component/reviewsummary'
// import ReviewList from '../component/reviewlist'

// import Styles from "@/styles/id.module.css"

// export default function Id() {

//   // const productInfoRef = useRef(null); // Ref for the productinformationbody

//   //   // Function to handle scrolling in detailsbody
//   //   const handleScroll = (e) => {
//   //     if (e.target.scrollTop === 0) {
//   //       productInfoRef.current?.scrollIntoView({ behavior: 'smooth' });
//   //     }
//   //   };

//   const detailsBodyRef = useRef(null);  // Ref for the detailsbody for direct DOM access

//   // Function to handle scrolling in detailsbody
//   const handleScroll = () => {
//     const scrollTop = detailsBodyRef.current.scrollTop;  // Get the current scrollTop position
//     if (scrollTop === 0) {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     }
//   };

//       // Initialize the quantity state
//   const [quantity, setQuantity] = useState(1);

//   // Function to handle the increment of quantity
//   const incrementQuantity = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   // Function to handle the decrement of quantity
//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   const ratingsDistribution = {
//     5: 100, // Assuming 100% of reviews are 5-star
//     4: 30,
//     3: 40,
//     2: 70,
//     1: 0
//   };

//   // to get author name initials
//   const getInitials = (fullName) => {
//     const names = fullName.split(' ');
//     const initials = names.map(name => name[0].toUpperCase()).join('');
//     return initials.length > 1 ? initials.slice(0, 2) : initials; // Taking only the first two initials
//   };

//   const reviews = [
//     {
//       id: 1,
//       author: 'Varsha Prajapati',
//       authorInitials: 'vp',
//       rating: 4,
//       title: 'Loved the photos and others review',
//       text: 'I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok',
//       date: 'Aug 5, 2024',
//       likes: 6,
//       photo: "/image/card1.webp",
//       photo1: "/image/image2.jpg"
//     },
//     {
//       id: 2,
//       authorInitials: 'vp',
//       author: 'Harshita hazra',
//       rating: 5,
//       text: 'Loved the photos and others review. I have not tried these cruffins but I believe that these are very delicious.',
//       date: 'Jun 25, 2024',
//       likes: 12
//     },
//     {
//         id: 3,
//       authorInitials: 'vp',
//       author: 'Varsha Prajapati',
//         rating: 4,
//         text: 'I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok',
//         date: 'Aug 5, 2024',
//         likes: 4,
//         photo1: "/image/card1.webp",
//         photo2: "/image/card2.webp",
//         photo3: "/image/card1.webp",
//         photo4: "/image/card2.webp"
//       },
//       {
//         id: 4,
//       authorInitials: 'vp',
//       author: 'Harshita',
//         rating: 3,
//         text: 'Loved the photos and others review. I have not tried these cruffins but I believe that these are very delicious.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok',
//         date: 'Jun 25, 2024',
//         likes: 12
//       },
//       {
//         id: 5,
//       authorInitials: 'vp',
//       author: 'Harshita',
//         rating: 2,
//         text: 'Loved the photos and others review. I have not tried these cruffins but I believe that these are very delicious.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok',
//         date: 'Jun 25, 2024',
//         likes: 12
//       },
//       {
//         id: 6,
//       authorInitials: 'vp',
//       author: 'sumit kumar',
//         rating: 1,
//         text: 'Loved the photos and others review. I have not tried these cruffins but I believe that these are very delicious.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok.I order of 6 package in hazelnut and chocolate but I more than hazelnut is very good in taste chocolate little bit less in chocolate flavour mango I don\'t like so I not taste but overall ok',
//         date: 'Jun 25, 2024',
//         likes: 12
//       }
//   ].map(review => ({
//     ...review,
//     authorInitials: getInitials(review.author) // dynamically generate initials
//   }));
  

//   return (
//     <>
//     <Nav/>
//     <div className={Styles.productidmainbody}>

//         {/* product information body */}
//         <div className={Styles.productinformationbody} ref={detailsBodyRef}>
//             <div className={Styles.imagebody}>
//                 <Image src="/image/image3.jpg" alt='image' className={Styles.image} width={300} height={300}/>
//                 <div className={Styles.tag}>summer spacial</div>
//                 <div className={Styles.sale}>for sale</div>
//             </div>
//             <div className={Styles.detailsbody} onScroll={handleScroll}>
//                 <div className={Styles.store}><Link href="#">My store</Link>{` > `}<Link href="#">cruffin</Link></div>
//                 <div className={Styles.name}>Assorted pack of 6 (with Mango) Cruffins</div>
//                 <div className={Styles.ratting}>
//                     <Link href="#">
//                     <div className={Styles.ratingpoint}>4.2</div>
//                     <div className={Styles.star}>
//                     <i className={`material-icons ${Styles.icons}`} aria-label="Search" >star</i>
//                     <i className={`material-icons ${Styles.icons}`} aria-label="Search" >star</i>
//                     <i className={`material-icons ${Styles.icons}`} aria-label="Search" >star</i>
//                     <i className={`material-icons ${Styles.icons}`} aria-label="Search" >star</i>
//                     <i className={`material-icons ${Styles.icons}`} aria-label="Search" >star</i>
//                     </div>
//                     <div className={Styles.totalrating}>5 ratings</div>
//                     </Link>
//                 </div>
//                 <div className={Styles.orderedtimes}>ordered 1161 times this week</div>
//                 <div className={Styles.amountdiv}>
//                     <div className={Styles.oldamount}>Rs. 699.00</div>
//                     <div className={Styles.newamount}>Rs. 599.00</div>
//                     <div className={Styles.sale}>for sale</div>
//                 </div>
//                 <Link href="#" className={Styles.shoppinglink}>free shipping</Link>
//                 <div className={Styles.quantity}>
//                     <div className={Styles.text}>quantity</div>
//                         <div className={Styles.quantitybox}>
//                             <button className={Styles.quantitybutton} onClick={decrementQuantity}>-</button>
//                             <div className={Styles.quantityvalue}>{quantity}</div>
//                             <button className={Styles.quantitybutton} onClick={incrementQuantity}>+</button>
//                         </div>
//                 </div>
//                 <div className={Styles.specialoccasion}>
//                     <div className={Styles.text}>
//                         <div className={Styles.occasionname}>Rakshabandhan special</div>
//                         <i className={`material-icons ${Styles.icons}`} aria-label="Help" >help</i>
//                         <div className={Styles.hovertext}>ordering as an gift. add a rakhi & tikka with this item to your order.</div>
//                     </div>
//                     <div className={Styles.occasionitem}>
//                         <Image src="/image/image2.jpg" alt='image' className={Styles.occasionimage} width={60} height={60}/>
//                         <div className={Styles.text}>Rakhi & Tekka</div>
//                     </div>
//                 </div>
//                 <div className={Styles.cartbutton}>
//                     <div className={Styles.text}>powered by frame studio</div>
//                     <button className={Styles.cart}>add to cart</button>
//                     <button className={Styles.buy}>buy it now</button>
//                 </div>
//                 <div className={Styles.description}>Indulge in a deliciously playful treat with our Lotus Biscoff Cruffin. A flaky croissant meets a sweet muffin, filled with the iconic and addictive flavor of Lotus Biscoff. Perfect for a quirky and fun twist on your morning pastry or as a mid-day pick-me-up. (Warning: highly addictive!)</div>
//                 <Link href="#" className={Styles.share}>
//                 <i className={`material-icons ${Styles.icons}`} aria-label="Share" >share</i>
//                     share
//                 </Link>
//             </div>
//         </div>

//         {/* product card */}
//         <div className={Styles.cardcarouselbody}>
//             <div className={Styles.title}>you may also like</div>
//             <div className={Styles.cardcarousel}>
//                 <Card/>
//                 <Card/>
//                 <Card/>
//                 <Card/>
//                 <Card/>
//                 <Card/>
//                 <Card/>
//                 <Card/>
//             </div>
//         </div>

//         {/* review system */}
//         <div className={Styles.reviewdiv}>
//             <div className={Styles.title}>coustomer reviews</div>
//             <ReviewSummary averageRating={5.0} totalReviews={8} ratingsDistribution={ratingsDistribution} />
//         </div>

//         {/* review comments system */}
//         <div className={Styles.reviewcommetsdiv}>
//             <div className={Styles.title}>Review with commetns</div>
//             <ReviewList reviews={reviews} />
//         </div>

//     </div>
//     <Footer/>
//     </>
//   )
// }


import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Nav from '../component/nav';
import Footer from '../component/footer';
import Card from "../component/card";
import ReviewSummary from '../component/reviewsummary';
import ReviewList from '../component/reviewlist';

import Styles from "@/styles/id.module.css";

export default function Id() {
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
      <div className={Styles.productidmainbody}>
        {/* Product information */}
        <div className={Styles.productinformationbody}>
          <div className={Styles.imagebody}>
            <Image src="/image/image3.jpg" alt="product image" className={Styles.image} width={300} height={300} />
            <div className={Styles.tag}>summer special</div>
            <div className={Styles.sale}>for sale</div>
          </div>
          <div className={Styles.detailsbody}>
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
    </>
  );
}
