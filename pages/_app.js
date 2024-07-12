import "@/styles/globals.css";
import Head from "next/head";
import React from 'react';
import Layout from './components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
       <Head>
        <link rel="icon" href="/bangalore.png" />
        <link rel="canonical" href="https://selfdrivecarsBangalore.com/"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
