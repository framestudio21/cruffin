import Head from "next/head";
import dynamic from "next/dynamic";

// import { ProductProvider } from "./component/productContext";
import { ProductProvider } from "../context/ProductContext";

import "@/styles/globals.css";

export default dynamic(() => Promise.resolve(App), { ssr: false });
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cruffin - Next App</title>
      </Head>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </>
  );
}
