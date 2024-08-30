import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import Image from 'next/image';
import Link from 'next/link';
import CarProducts from '../CarProducts';
import tata from '../../images/tata2.webp';
import skoda from '../../images/skoda1.webp';
import toyota from '../../images/toyota1.webp';
import mg from '../../images/mg.webp';
import kia from '../../images/kia.webp';
import mahindra from '../../images/mahindra.webp';
import suzuki from '../../images/suzuki-logo.webp';
import renault from '../../images/renault.webp'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaSearch } from 'react-icons/fa';
const DynCallBackForm = dynamic(() => import('../CallBackForm/CallBackForm'));
const DynWhyChooseUs = dynamic(() => import('../WhyChooseUs/WhyChooseUs'));
const DynImageChange = dynamic(() => import('../ImageChange/ImageChange'));

const DynamicFaqComponent = dynamic(() => import('../FaqAccordian/FaqAccordian'));
export default function Homepage({ data }) {
  const data2 = data;
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="min-h-screen">
      <DynImageChange />
      <div>
        <div className='text-center'>
          <h2 id='explore' className="px-3 font-bold text-xl pb-4 pt-8 text-blue-950 mb-2 lg:text-5xl lg:mb-9">Self Drive Car Rentals Near You In 20kms</h2>
        </div>
        <div className=' lg:mb-16 pl-3 flex flex-grow items-center justify-center py-4'>
          <input
            placeholder='Search for your favourite car'
            className='placeholder-black text-black px-4 py-3 rounded-full bg-gray-200 w-full  md:max-w-96 lg:max-w-2xl'
            type='search'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FaSearch size={25} className='text-blue-500 relative right-14 lg:right-20 md:right-14' />
        </div>
      </div>
      <CarProducts data={data2} searchQuery={searchQuery} />
      <DynCallBackForm />
      <DynWhyChooseUs />
      <div className='bg-white text-black rounded xl:py-12 lg:px-14 xl:px-14 p-2'>
        <h2 className='uppercase p-2 mb-4 text-center font-bold xl:text-2xl'>Frequently asked questions</h2>
        <DynamicFaqComponent />
      </div>
      <div className='flex justify-around lg:justify-between lg:p-14 flex-wrap bg-orange-500 rounded-md text-white mx-[14px] lg:mx-[58px] my-3 items-center font-sans'>
        <div className='xl:w-5/12 xl:text-left xs:w-full xs:text-center lg:w-3/6 xl:text-4xl lg:text-2xl text-left text-lg font-bold py-3'>
          <div className='flex lg:block flex-col'><span>Get in touch with us </span><span>to arrange your booking</span></div>
        </div>
        <div className='flex flex-col pt-2 lg:pr-16 items-center justify-start gap-2 text-sm lg:p-4 font-semibold cursor-pointer pr-'>
          <p>CONTACT US NOW</p>
          <div className='flex justify-around gap-3 pb-2 pt-2 text-white'>
            <button className='bg-green-500  rounded-md p-2 '>
              <Link href="https://api.whatsapp.com/send?phone=+9666677405&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking." target='_blank'>
                <p className=' flex items-center justify-center gap-1 text-lg'><span><FaWhatsapp size={30} /></span> <span>Whatsapp</span></p>
              </Link>
            </button>
            <button className='bg-blue-500 rounded-md p-2'>
              <Link href="tel:9666677405" target='_blank'>

                <p className='flex items-center justify-center gap-1 text-lg'><span><BiPhoneCall size={30} /></span> <span>Call Us</span></p>

              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

