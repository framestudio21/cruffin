import Head from "next/head";
import Image from "next/image";  // Next.js Image component
import { useSession } from 'next-auth/react';
import localFont from "next/font/local";
import Styles from "@/styles/Home.module.css";

import HeroCarousel from "./component/herocarousel";
import Card from "./component/card";
import NavBar from "./component/nav";
import Footer from "./component/footer";
import PopLogin from "./component/poplogin";
import Cart from "./component/cart";
import Login from "./component/login";
import LoginOtpVerify from "./component/loginotpverify";

export default function Home() {
  const { data: session, status } = useSession();

  // Handle loading state
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Cruffin Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div>
        <NavBar />
        Show content based on the session state
        {session ? (
          <div>
            <h1>Welcome, {session.user.name}!</h1>
            Optimized image loading with Next.js Image
            <Image 
              src={session.user.image} 
              alt="User image" 
              width={96} 
              height={96} 
              className={Styles.userImage} // Add CSS styling if needed
            />
          </div>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div> */}

      <NavBar/>
      <HeroCarousel/>
      <Footer/>
      {/* <PopLogin/> */}
      {/* <Login/> */}
      <LoginOtpVerify/>
      {/* <Cart/> */}
    </>
  );
}
