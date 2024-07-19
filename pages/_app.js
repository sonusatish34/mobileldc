import "@/styles/globals.css";
import Head from "next/head";
import React from 'react';
import Layout from './components/Layout/Layout';
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/sdcnew.png" />
        <link rel="canonical" href="https://selfdrivecarshyderabad.com/" />
        {/* <!-- Google tag (gtag.js) --> */}
        
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
