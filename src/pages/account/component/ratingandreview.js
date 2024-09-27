import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles/subpage.module.css";
export default function RatingAndReview() {
  return (
    <>
      <div className={styles.accountsubpagemainbody}>
       
        {/* page header div */}
        <div className={styles.header}>my reviews</div>

        {/* rating & review and link amd main body */}
        <div className={styles.reviewsectionmainbody}>

            <div className={styles.oldreviewmainbody}>
                <Image src="/image/image2.jpg" className={styles.image} alt="image" width={80} height={80}/>
                <div className={styles.textsection}>
                    <div className={styles.title}>vivo Stylist Earphone with mic (white) Wired</div>
                    <div className={styles.stardiv}>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                    </div>
                    <div className={styles.reviewtext}>After buying this earphones some days later...the microphone become...not working....then i exchange .....after exchange the exchange product also become disable....from right ear</div>
                    <div className={styles.ownerdate}>
                      <div className={styles.owner}>sumit kumar duary</div>
                      <div className={styles.date}>05 May, 2020</div>
                    </div>
                    <div className={styles.btndiv}>
                      <button className={styles.btn}>edit</button>
                      <button className={styles.btn}>delete</button>
                      <button className={styles.btn}>share</button>
                    </div>
                </div>
            </div>

            
            <div className={styles.oldreviewmainbody}>
                <Image src="/image/image2.jpg" className={styles.image} alt="image" width={80} height={80}/>
                <div className={styles.textsection}>
                    <div className={styles.title}>vivo Stylist Earphone with mic (white) Wired</div>
                    <div className={styles.stardiv}>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                    </div>
                    <div className={styles.reviewtext}>After buying this earphones some days later...the microphone become...not working....then i exchange .....after exchange the exchange product also become disable....from right ear</div>
                    <div className={styles.ownerdate}>
                      <div className={styles.owner}>sumit kumar duary</div>
                      <div className={styles.date}>05 May, 2020</div>
                    </div>
                    <div className={styles.btndiv}>
                      <button className={styles.btn}>edit</button>
                      <button className={styles.btn}>delete</button>
                      <button className={styles.btn}>share</button>
                    </div>
                </div>
            </div>

        </div>

        {/* page header div */}
        <div className={styles.header}>
          Orders you might be interested reviewing
        </div>

        {/* rating & review and link amd main body */}
        <div className={styles.reviewsectionmainbody}>

        <div className={styles.needreviewmainbody}>
                <Image src="/image/image2.jpg" className={styles.image} alt="image" width={80} height={80}/>
                <div className={styles.textsection}>
                    <div className={styles.title}>vivo Stylist Earphone with mic (white) Wired</div>
                    <div className={styles.stardiv}>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                    </div>
                      <button className={styles.btn}>write a review</button>
                </div>
        </div>
        <div className={styles.needreviewmainbody}>
                <Image src="/image/image2.jpg" className={styles.image} alt="image" width={80} height={80}/>
                <div className={styles.textsection}>
                    <div className={styles.title}>vivo Stylist Earphone with mic (white) Wired</div>
                    <div className={styles.stardiv}>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                    </div>
                      <button className={styles.btn}>write a review</button>
                </div>
        </div>
        <div className={styles.needreviewmainbody}>
                <Image src="/image/image2.jpg" className={styles.image} alt="image" width={80} height={80}/>
                <div className={styles.textsection}>
                    <div className={styles.title}>vivo Stylist Earphone with mic (white) Wired</div>
                    <div className={styles.stardiv}>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                    </div>
                      <button className={styles.btn}>write a review</button>
                </div>
        </div>
        <div className={styles.needreviewmainbody}>
                <Image src="/image/image2.jpg" className={styles.image} alt="image" width={80} height={80}/>
                <div className={styles.textsection}>
                    <div className={styles.title}>vivo Stylist Earphone with mic (white) Wired</div>
                    <div className={styles.stardiv}>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                      <i className={`material-icons ${styles.staricon}`}>star</i>
                    </div>
                      <button className={styles.btn}>write a review</button>
                </div>
        </div>

        </div>
      </div>
    </>
  );
}
