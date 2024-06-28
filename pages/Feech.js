import { useEffect, useState } from 'react';
import Image from 'next/image';
// import Loader from './loader';
// import HamburgerMenu from './hamburger';
export default function Feech({data}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false); 
  }, []);
  // console.log(cars,"ggggggg");
  // console.log(data,"iiiiiiiiiiiiii");
<h1>HIi im from fetch</h1>
  return (

    <div className='bg-gray-400 p-2'>
      
    </div>
  );
}

// export async function getStaticProps() {
//   const response = await fetch('https://longdrivecarz.in/site/cars-info?location=Hyderabad');
//   const items = await response.json();
//   // const cars = items?.data?.results
//   return {
//     props: {
//       items,
//       // cars
//     },
//   };
// }

