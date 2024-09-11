import React from 'react'
import Link from 'next/link'

import Styles from "./styles/footer.module.css"

export default function Footer() {
  return (
    <>
    <div className={Styles.footerbody}>
        <div className={Styles.informationbody}>
            <div className={Styles.leftside}>leftside</div>
            <div className={Styles.rightside}>rightside
            <Link href="#">refund policy</Link>
            <Link href="#">privacy policy</Link>
            <Link href="#">terms of services</Link>
            <Link href="#">shipping policy</Link>
            </div>
        </div>
        <div className={Styles.policybody}>
        <div className={Styles.bar}></div>
         <div className={Styles.poweredby}>
         <div className={Styles.text}>@{new Date().getFullYear()}</div>
            <Link href="#">Cruffin india</Link>
            <div className={Styles.text}>powered by frame studio</div>
         </div>
        </div>
    </div>
    </>
  )
}