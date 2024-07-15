import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import styles from '../HomePage/HomePage.module.css'
import Image from 'next/image';
function BrowseByBrand() {
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
  return (
    <div><div className='bg-gray-800 flex flex-col justify-center items-center gap-y-6 py-20'>
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
  </div></div>
  )
}

export default BrowseByBrand