import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { ImPriceTags } from "react-icons/im";
import customData from './components/kk.json';
import { PiCarFill } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
const CarDetails = () => {
  const [caritem, setCarItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { maker_model } = router.query;

  useEffect(() => {
    async function fetchCarDetails() {
      setLoading(true);

      try {
        const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=Hyderabad');
        const items = await response.json();
        const cars = items?.data?.results;
        const car = cars?.find(i => i?.maker_model.toLowerCase() === maker_model?.toLowerCase());

        setCarItem(car);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    if (maker_model) {
      fetchCarDetails();
    }
  }, [maker_model]);
  function replaceText(str) {
    let newstr = str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
    return newstr
  }
  return (
    <div className='bg-white text-black'>
      <div className=' lg:px-2 mx-auto lg:mx-36 xl:mx-16 md:p-28 lg:p-4  sm:pt-44 px-2'>


        {/* <div style={{ position: "relative", width: "90vw", height: "60vh"  }}> */}
        <div className='flex flex-col xs:mt-48 md:mt-20 lg:mt-2 md:flex-row p-2 border-2 border-orange-400 rounded-md'>
          {/* <div className='relative '> */}
          {loading && <div>Loading...</div>}
          {!loading && (
            <div className="relative md:w-2/3 w-full p-1 xl:pt-6 xs:pt-8 border-1 border-gray-300 h-96">
              <Image
                src={replaceText(caritem?.car_image_car_right_view)}
                alt="Car"
                layout="fill"
                objectFit="cover"
                className="relative"
              />
            </div>
          )}
          <div className='flex flex-col justify-center'>
            <h2 className='p-1 font-bold font-manrope text-3xl lg:pl-20'>{customData[maker_model?.toLowerCase()]?.id}</h2>
            <h2 className='p-1 font-bold md:text-3xl text-xl lg:pl-20'><span className='text-lg'>Starting from</span><span className='text-blue-400'> ₹ {caritem?.price_24_hours * 24}/day</span></h2>
          </div>
        </div>
        <div className='pt-4'>
          <h2 className='font-semibold text-xl font-manrope'>Contact us by</h2>
          <div className='flex justify-start lg:gap-5 pb-2 xs:pt-2 text-white'>
            <button className='bg-green-500 rounded-full p-2 lg:p-7'>
              <Link href="https://api.whatsapp.com/send?phone=9000478478" target='_blank'>
                <p className=' flex gap-1 text-sm'><span><FaWhatsapp size={20} /></span> <span>Whatsapp</span></p>
              </Link>
            </button>
            <button className='bg-blue-500 rounded-full p-2 lg:p-9'>
              <Link href="tel:9000478478" target='_blank'>
                <p className=' flex gap-1 text-sm'><span><BiPhoneCall size={20} /></span> <span>Call Us</span></p>
              </Link>
            </button>
          </div>
        </div>
        <div className='overview pt-4'>
          <h2 className='font-bold text-xl border-l-2 border-red-900 mb-4 font-manrope'>Car Overview</h2>
          <ul className='my-2 flex flex-wrap pb-4'>
            <li className='w-32 flex flex-col justify-center gap-2 items-center border-[1px] border-gray-100 py-2   '>
              <BsFuelPump size={30} className='text-green-700' />
              <p className='font text-sm'>Fuel Type</p>
              <p className='font-bold text-lg'>{caritem?.fuel_type}</p>
            </li>

            <li className='w-32 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <PiCarFill size={30} className={`text-${caritem?.vehicle_color.toLowerCase()}-400`} />
              <p className='font text-sm'>Vehicle Color</p>
              <p className='font-bold text-lg'>{caritem?.vehicle_color}</p>
            </li>
            <li className='w-32 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <MdOutlineAirlineSeatReclineExtra size={30} className='text-amber-900' />
              <p className='font- text-sm'>Seater</p>
              <p className='font-bold text-lg'>{caritem?.seater}</p>
            </li>

            <li className='w-32 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <TbManualGearbox size={30} className='text-yellow-500' />
              <p className='font- text-sm'>Transmission</p>
              <p className='font-bold text-lg'>{caritem?.transmission_type}</p>
            </li>

          </ul>
        </div>

        <h2 className='font-bold text-2xl border-l-2 border-red-900 mb-3 font-manrope' >Description</h2>
        <p className='font-light p-1 text-[14px]  font-jakarta'>
          {customData[maker_model?.toLowerCase()]?.desc}
        </p>

        <h2 className='font-semibold text-xl font-dmsans py-3'>Why Choose {customData[maker_model?.toLowerCase()]?.id} from Self Drive Cars Rental Hyderabad</h2>
        <p className='font-light p-1 text-[14px] font-jakarta'>
          {customData[maker_model?.toLowerCase()]?.subdesc}
        </p>
      </div>
    </div>
  );
};

export default CarDetails;

