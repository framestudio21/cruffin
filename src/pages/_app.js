import Head from "next/head";
import dynamic from "next/dynamic";

import "@/styles/globals.css";

export default dynamic(() => Promise.resolve(App), { ssr: false });
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cruffin - Next App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
