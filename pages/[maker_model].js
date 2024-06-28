import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { ImPriceTags } from "react-icons/im";
import customData from './components/kk.json';

const CarDetails = () => {
  const [caritem, setCarItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { maker_model } = router.query;
  // console.log(customData,"customData");


  useEffect(() => {
    async function fetchCarDetails() {
      setLoading(true);

      try {
        const response = await fetch('https://longdrivecarz.in/site/cars-info?location=Hyderabad');
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
    let newstr = str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls', 'https://d12t7i0duidj85.cloudfront.net');
    return newstr
  }
  return (
    <div className='bg-white '>
      <div className='bg-red-100 lg:px-2 mx-auto lg:mx-36'>
        <h2 className='p-1 font-bold text-3xl'>{customData[maker_model?.toLowerCase()]?.id}</h2>

        {/* <div style={{ position: "relative", width: "90vw", height: "60vh"  }}> */}
        <div>
          {/* <div className='relative '> */}
          {loading && <div>Loading...</div>}
          {!loading && (
            <div className="relative h-64">
            <Image
              src={replaceText(caritem?.car_image_car_right_view)}
              alt="Car"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>

          )}
        </div>

        <div className='overview pt-4'>
          <h2 className='font-bold text-2xl border-l-2 border-red-900 mb-4'>Car Overview</h2>
          <ul className='my-2 flex flex-wrap gap-2 pb-4'>
            <li className='flex items-center gap-8'>
              <BsFuelPump size={20} className='text-blue-400' />
              <p className='w-40 font-semibold text-lg'>Vehicle Color</p>
              <p>{caritem?.vehicle_color}</p>
            </li>
            <li className='flex items-center gap-8'>
              <MdOutlineAirlineSeatReclineExtra size={20} className='text-blue-400' />
              <p className='w-40 font-semibold text-lg'>Seater</p>
              <p>{caritem?.seater}</p>
            </li>
            <li className='flex flex-col items-center gap-8'>
              <p><TbManualGearbox size={20} className='text-blue-400' /></p>
              <p className='w-40 font-semibold text-lg'>Transmission Type</p>
              <p>{caritem?.transmission_type}</p>
            </li>
           
            <li className='flex items-center gap-8'>
              <BsFuelPump size={20} className='text-blue-400' />
              <p className='w-40 font-semibold text-lg'>Fuel Type</p>
              <p>{caritem?.fuel_type}</p>
            </li>
          </ul>
        </div>

        <h2 className='font-bold text-2xl border-l-2 border-red-900 mb-3' >Description</h2>
        <p className='font-light p-1 text-sm'>
          {customData[maker_model?.toLowerCase()]?.desc}
        </p>

        <h2 className='font-semibold text-xl'>Why Choose {customData[maker_model?.toLowerCase()]?.id} Self Drive Car Rental From Long Drive Cars</h2>
        <p className='font-light p-1 text-sm'>
          {customData[maker_model?.toLowerCase()]?.subdesc}
        </p>
      </div>
    </div>
  );
};

export default CarDetails;

