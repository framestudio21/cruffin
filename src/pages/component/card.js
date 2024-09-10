import React from 'react'
import Image from 'next/image'

import Styles from "./styles/card.module.css"

export default function card() {
  return (
    <div className={Styles.card}>
        <div className={Styles.cardimage}>
            <Image src="/image/card1.webp" className={Styles.image} alt='card-image' width={20} height={20}/>
            <div className={Styles.bestseller}>Summer Special</div>
            <div className={Styles.sale}>Sale</div>
        </div>
        <div className={Styles.cardbody}>
            <div className={Styles.title}>Assorted Pack of 6 (with Mango) Cruffin</div>
            <div className={Styles.starrating}>
            <div className={Styles.stars}>
            <i className={`material-icons ${Styles.icons}`}>star</i>
            <i className={`material-icons ${Styles.icons}`}>star</i>
            <i className={`material-icons ${Styles.icons}`}>star</i>
            <i className={`material-icons ${Styles.icons}`}>star</i>
            <i className={`material-icons ${Styles.icons}`}>star_outline</i>
            </div>
            <div className={Styles.rating}>(10)</div>
            </div>
            {/* <div className={Styles.ordertitle}>ordered 270 times this week</div> */}
            <div className={Styles.amount}>
              <div className={Styles.oldrate}>Rs. 1,400 /-</div>
              <div className={Styles.newrate}>Rs. 400 /-</div>
            </div>
            <button className={Styles.addtocart}>add to cart</button>
        </div>
    </div>
  )
}