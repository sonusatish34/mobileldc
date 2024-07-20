import Homepage from "./components/HomePage/Homepage";
import Head from "next/head";

export default function Home({ cars }) {
  return (
    <div className="bg-white">

      <Head>
        <title>Zero Deposit & Unlimited km - Self-Drive Car Rentals In Hyderabad</title>
        <meta name="description" content="Self-drive cars start at 62/hr, We offer Self Drive Cars for the best prices with unlimited km & Zero deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Zero Deposit & Unlimited km - Self-Drive Car Rentals In Hyderabad" />
        <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Self Drive Cars for the best prices with unlimited km & Zero deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E5F1QT47V0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E5F1QT47V0');
            `,
          }}
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16647839094">
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16647839094');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-P3SZC8HS');
              `,
          }}
        />
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