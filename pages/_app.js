import "@/styles/globals.css";
import Head from "next/head";
import React from 'react';
import Layout from './components/Layout/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>

        {/* <link rel="icon" href="/sdcnew.webp" /> */}
        <link rel="canonical" href="https://selfdrivecarshyderabad.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
