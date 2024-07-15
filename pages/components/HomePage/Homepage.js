import React, { useState } from 'react';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import tata from '../../images/tata2.jpg';
import disc from '../../images/discountonbook.png'
import skoda from '../../images/skoda1.jpg';
import toyota from '../../images/toyota1.jpg';
import mg from '../../images/mg.png';
import kia from '../../images/kia.jpg';
import mahindra from '../../images/mahindra.png';
import suzuki from '../../images/suz.png';
import NearYou from '../NearYou/NearYou';
import renault from '../../images/renault.jpg'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import CallBackForm from '../CallBackForm/CallBackForm';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import FaqAccordian from '../FaqAccordian/FaqAccordian';
import styles from './HomePage.module.css';
import { LuPhoneCall } from 'react-icons/lu';
import './HomePage.module.css'
import ImageChange from '../ImageChange/ImageChange';

export default function Homepage({ data }) {
  const [visibleItems, setVisibleItems] = useState(7);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 7);
  };

  const replaceText = (str) => {
    return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
  };

  const filteredData = data?.filter(item =>
    item.maker_model.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // const sliderRef = useRef(null);
  // const [autoplayPaused, setAutoplayPaused] = useState(false);

  var settings = {
    // infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: true,
    // arrows: false,

    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          // slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: true,
          pauseOnFocus: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          pauseOnHover: true,

          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          pauseOnFocus: true,
          pauseOnHover: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          // rows: 2,
          slidesPerRow: 2, // 2 slides per row (2 columns)
          pauseOnHover: true,
          autoplay: true,
          speed: 2000,
          vertical: true,
          verticalSwiping: true, // Enable vertical swiping
          swipeToSlide: true,
          arrows: false

        }
      }
    ]
  };
  function scrollToTarget() {
    const element = document.getElementById('explore');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="min-h-screen">
        <ImageChange />
      <div className='bg-gray-800 flex flex-col justify-center items-center gap-y-6 py-20'>
        <div className='text-center'>
          <p className='py-3 md:text-5xl xs:text-3xl mb-7 text-white font-jakarta font-bold'>Browse By Brand</p>
          <div className="flex items-center text-black justify-center">

            <div className="slider-container my-2 ">
              <Slider className={`${styles.widthscreenset} lg:w-[80vw] w-[70vw]`} {...settings}>

                <div className={`${styles.brandlogo} bg-yello`}>
                  <div onClick={() => { setSearchQuery("mahindra"); scrollToTarget() }} className='my-2 p-6 bg-white rounded-lg  lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2  hover:border-blue-700 cursor-pointer '>
                    <Image
                      src={mahindra}
                      alt="Car"
                      width={180}
                      height={180}
                      className="rounded-lg"
                    />
                    <p className='pt-2 font-bold'>Mahindra</p>
                  </div>
                </div>
                <div >
                  <div onClick={() => { setSearchQuery("tata"); scrollToTarget() }} className='p-6 my-2 bg-white rounded-lg  lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer  '>
                    <Image
                      src={tata}
                      alt="Car"
                      width={180}
                      height={180}
                      className="rounded-lg lg:mb-5"
                    />
                    <p className='pt-2 font-bold'>Tata</p>
                  </div>
                </div>
                <div >
                  <div onClick={() => { setSearchQuery("skoda"); scrollToTarget() }} className='lg:p-6 my-2 bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer  '>
                    <Image
                      src={skoda}
                      alt="Car"
                      width={100}
                      height={100}
                      className="rounded-lg w-16"
                    />
                    <p className='pt-2 font-bold'>Skoda</p>
                  </div>
                </div>
                <div>
                  <div onClick={() => { setSearchQuery("toyota"); scrollToTarget() }} className='my-2 lg:p-6 bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer  '>
                    <Image
                      src={toyota}
                      alt="Car"
                      width={180}
                      height={180}
                      className="rounded w-20"

                    />
                    <p className='pt-2 font-bold'>Toyota</p>
                  </div>
                </div>
                <div >
                  <div onClick={() => { setSearchQuery("mg"); scrollToTarget() }} className='my-2 lg:p-6 bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer  '>
                    <Image
                      src={mg}
                      alt="Car"
                      width={200}
                      height={220}
                      className="rounded lg:h-24 lg:w-36"
                    />
                    <p className='pt-2 font-bold'>MG</p>
                  </div>
                </div>
                <div >
                  <div onClick={() => { setSearchQuery("kia"); scrollToTarget() }} className='my-2 lg:p-6 bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer  '>
                    <Image
                      src={kia}
                      alt="Car"
                      width={180}
                      height={180}
                      className="rounded"

                    />
                    <p className='pt-2 font-bold'>Kia</p>
                  </div>
                </div>
                <div >
                  <div onClick={() => { setSearchQuery("maruthi"); scrollToTarget() }} className='my-2 lg:p-6 bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer'>
                    <Image
                      src={suzuki}
                      alt="Car"
                      width={180}
                      height={180}
                      className="rounded hover:bg-red-500"
                    />
                    <p className='pt-2 font-bold'>Suzuki</p>
                  </div>
                </div>
                <div >
                  <div onClick={() => { setSearchQuery("renault"); scrollToTarget() }} className='p- bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center items-center flex-col hover:border-2  mt-2 hover:border-blue-700 hover: -105 cursor-pointer'>
                    <Image
                      src={renault}
                      alt="Car"
                      width={180}
                      height={180}
                      className="rounded hover:bg-red-500 xs:h-24 lg:h-16"
                    />
                    <p className='pt- font-bold'>Renault</p>
                  </div>
                </div>

              </Slider>

            </div>
          </div>
        </div>
      </div>
      <div><NearYou /></div>
      <div className=' bg-white'>
        <div className='text-center'>
          <h2 id='explore' className="px-3 font-bold text-2xl font-jakarta pt-8 text-blue-950 mb-2 lg:text-5xl lg:mb-9">Explore Self Drive Car Rentals</h2>
        </div>
        <div className='mb-9 lg:mb-16 flex flex-grow items-center justify-center'>
          <input
            placeholder='Search for the cars'
            className='placeholder-black text-black px-4 py-3 rounded-full bg-gray-200 w-full max-w-56 md:max-w-96 lg:max-w-2xl'
            type='search'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FaSearch size={25} className='text-blue-500 relative right-14 lg:right-20 md:right-14' />
        </div>
        <div className='flex items-center justify-center py-6'>
          <div className="flex flex-wrap gap-x-8 gap-y-8 items-center xs:justify-center lg:max-w-7xl">
            {filteredData?.slice(0, visibleItems).map((item, index) => (
              <React.Fragment key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] md:w-72 h-96 lg:hover:scale-105">
                  <div className="relative h-64">
                    <Link href={`/${item.maker_model}`}>
                      <Image
                        src={replaceText(item?.car_image_car_right_view)}
                        alt="Car"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg relative"
                        priority
                      />
                    </Link>
                  </div>

                  <div className="px-2 pt-4 flex flex-col gap-4 p-1">
                    <div className='flex items-baseline justify-between px-2'>
                      <Link href={`/${item.maker_model}`}>
                        <p className="text-gray-700 cursor-pointer font-semibold text-[11px] hover:text-red-600 w-fit">{item.maker_model}</p>
                      </Link>
                      <p className="text-blue-500 font-bold">₹ {item.price_24_hours * 24}/day</p>
                    </div>
                    <div className="flex items-center justify-around border-b border-gray-300 text-black font-normal text-base">
                      <div className="flex items-center">
                        <BsFuelPump size={15} className="mr-1" />
                        <span>{item.fuel_type}</span>
                      </div>
                      <div className="flex items-center">
                        <TbManualGearbox size={15} className="mr-1" />
                        <span>{item.transmission_type}</span>
                      </div>
                      <div className="flex items-center">
                        <MdOutlineAirlineSeatReclineExtra size={15} className="mr-1" />
                        <span>{item.seater}</span>
                      </div>
                    </div>
                    <div className='text-black flex justify-center font-semibold'>For Booking</div>
                    <div className='flex justify-around gap-1 pb-2 text-white'>
                      <button className='bg-green-500 rounded-full p-2'>
                        <Link href="https://api.whatsapp.com/send?phone=+9666677405&text=Hi%21" target='_blank'>
                          <p className=' flex gap-1 text-sm'><span><FaWhatsapp size={20} /></span> <span>Whatsapp</span></p>
                        </Link>
                      </button>
                      <button className='bg-blue-500 rounded-full p-2'>
                        <Link href="tel:9666677405" target='_blank'>
                          <p className=' flex gap-1 text-sm'><span><BiPhoneCall size={20} /></span> <span>Call Us</span></p>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                {(index + 1) % 5 === 0 && (
                  <div className="bg-orange-100 rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] justify-center md:w-72 h-96 lg:hover:scale-105">
                    <div>
                      <Image
                        src={disc}
                        height={400}
                        width={400}
                        alt='discount'
                      />
                    </div>
                  </div>

                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {visibleItems < filteredData?.length && (
          <div className="text-center md:pb-10 pb-6 ">
            <button
              className="bg-blue-500 text-lg font-bold text-white px-9 py-2 rounded-full"
              onClick={handleLoadMore}
            >
              <div className='flex justify-center items-center gap-2'><span>Load more</span><span><IoReload /></span></div>
            </button>
          </div>
        )}
      </div>
      <CallBackForm />
      <WhyChooseUs />
      <div className='bg-white text-black rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
        <h2 className='uppercase p-2 mb-4 text-center font-bold xl:text-2xl font-newfont'>Frequently asked questions</h2>
        <FaqAccordian />
      </div>
      <div className='flex p-5 justify-around xl:justify-between lg:p-8 flex-wrap bg-orange-500 rounded-md text-white mx-[14px] lg:mx-[58px] my-3 items-center'>
        <div className='xl:w-2/6 xl:text-left xs:w-full xs:text-center lg:w-2/5 lg:text-xl text-left text-lg  lg:p-4 font-semibold'>
          Get in touch with us to arrange your booking
        </div>
        <div className='flex flex-col pt-4 items-center justify-start gap-2 text-lg lg:p-4 font-semibold cursor-pointer pr-'>

          <p>CONTACT US NOW</p>

          <div className='flex justify-around gap-1 pb-2 text-white'>
            <button className='bg-green-500 rounded-full p-2 '>
              <Link href="https://api.whatsapp.com/send?phone=9666677405" target='_blank'>
                <p className=' flex gap-1 text-sm'><span><FaWhatsapp size={20} /></span> <span>Whatsapp</span></p>
              </Link>
            </button>
            <button className='bg-blue-500 rounded-full p-2'>
              <Link href="tel:9666677405" target='_blank'>

                <p className=' flex gap-1 text-sm'><span><BiPhoneCall size={20} /></span> <span>Call Us</span></p>

              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

