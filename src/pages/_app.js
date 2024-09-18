import Head from "next/head";
import dynamic from "next/dynamic";

// import { ProductProvider } from "./component/productContext";
import { ProductProvider } from "../context/ProductContext";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

export default dynamic(() => Promise.resolve(App), { ssr: false });
function App({ Component, pageProps: { session, ...pageProps }  }) {
  return (
    <>
      <Head>
        <title>Cruffin - Next App</title>
      </Head>
      <SessionProvider session={session}>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
      </SessionProvider>
    </>
  );
}
