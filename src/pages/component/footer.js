import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Styles from "./styles/footer.module.css"

export default function Footer() {
  return (
    <>
    <div className={Styles.footerbody}>
        <div className={Styles.informationbody}>
            <div className={Styles.leftside}>
              <Image src="/image/cruffin_logo.png" alt='cruffin-logo' width={120} height={120} className={Styles.logoImage}/>
              <div className={Styles.h2text}>Cruffin Premium Cakes</div>
              <div className={Styles.h3text}>Delhi-NCR's highest rated 100% eggless bakery brand.</div>
              <div className={Styles.text}>All our stores are cloud kitchens, not available for takeaway or dine in, can only order via website or food delivery apps.</div>
              <div className={Styles.followIcons}>
              <Link href="#">
              <i className={`material-icons ${Styles.icons}`} aria-label="Facebook" >facebook</i>
              </Link>
              </div>
            </div>
            <div className={Styles.rightside}>
              <div className={Styles.h1text}>contect information</div>
              <div className={Styles.text}><span>address :</span>Sector 37, Gurugram, Haryana 122001</div>
              <div className={Styles.text}><span>whatsapp :</span>+91 1234567890</div>
              <div className={Styles.text}><span>e-mail :</span>cruffin.premium@gmail.com</div>
              <div className={Styles.text}><span>operating hours :</span>24 * 7</div>
            <ul>
              <li><Link href="#">refund policy</Link></li>
           <li> <Link href="#">privacy policy</Link></li>
           <li> <Link href="#">terms of services</Link></li>
          <li>  <Link href="#">shipping policy</Link></li>
            </ul>
            </div>
        </div>
        <div className={Styles.policybody}>
        <div className={Styles.bar}></div>
         <div className={Styles.poweredby}>
         <div className={Styles.text}>@{new Date().getFullYear()}</div>
            <Link href="#">Cruffin india</Link>
            <div className={Styles.text}>powered by <span>frame studio</span></div>
         </div>
        </div>
    </div>
    </>
  )
}