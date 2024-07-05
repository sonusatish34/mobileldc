import Image from "next/image";
// import { Inter } from "next/font/google";
import Login from "./components/Login";
// import Home from "./components/Homepage";
import Homepage from "./components/HomePage/Homepage";
// import Dashboard from "./components/Dashboard";
// import II from "./components/II";
import Feech from "./Feech";

// const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

export default function Home({ items, cars }) {
  // console.log(cars,"carrrr");
  // console.log("hoo");
  return (
    <div className="bg-white">
      <Head>
        <title>Self Drive Cars</title>
        <meta name="description" content="This is my Next.js app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="self drive cars" />
        <meta property="og:description" content="This is my Next.js app" />
        {/* <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.my-next-app.com" />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <Homepage data={cars} />

    </div>

  );
}
export async function getStaticProps() {
  const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=Hyderabad');
  const items = await response.json();
  const cars = items?.data?.results
  return {
    props: {
      items,
      cars
    },
  };
}
