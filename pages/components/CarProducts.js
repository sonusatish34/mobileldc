import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import React, { useState } from 'react';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import Link from 'next/link';
import disc from '../images/cashback.webp'
import { FaSearch } from 'react-icons/fa';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import StaticData from './StaticData/StaticData'
function CarProducts({ data, searchQuery }) {

    const [visibleItems, setVisibleItems] = useState(7);
    const replaceText = (str) => {
        return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
    };

    const filteredData = data?.filter(item =>
        item.maker_model.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // const sortedData = filteredData.sort((a,b)=>a.price_24_hours-b.price_24_hours)
    const firstItem = filteredData.find((item)=>item.maker_model==='RENAULT KWID')
    // console.log(sortedData,"pne--------");
    
    return (
        <div className=' bg-white'>

            <div className='flex items-center justify-center py-6'>
                <div className="flex flex-wrap gap-x-8 gap-y-8 items-center xs:justify-center lg:max-w-7xl">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] md:w-72 h-[500px] lg:hover:scale-105">
                                <div className="relative h-80">
                                    <Link href={`/${(("car-rental/" + firstItem?.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                                        <Image
                                            src={replaceText(firstItem?.car_image_car_right_view)}
                                            alt={StaticData(String(firstItem?.maker_model.toLowerCase())) + String(firstItem?.maker_model.toLowerCase())}
                                            title={StaticData(String(firstItem?.maker_model.toLowerCase())) + String(firstItem?.maker_model.toLowerCase())}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg relative"
                                            // priority
                                            loading='lazy'
                                        />
                                    </Link>
                                </div>

                                <div className="pt-4 flex flex-col gap-4">
                                    <div className='flex items-baseline justify-between px-2'>
                                        <Link href={`/${(("car-rental/" + firstItem?.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                                            <p className="text-gray-700 cursor-pointer font-sans font-semibold text-xs hover:text-red-600 w-fit">{firstItem?.maker_model}</p>
                                        </Link>
                                        <p className="text-blue-500 font-bold">₹ {firstItem?.price_24_hours * 24}/day</p>
                                    </div>
                                    <div className="flex items-center justify-around border-b border-gray-300 text-black font-normal text-base px-2">
                                        <div className="flex items-center">
                                            <BsFuelPump size={15} className="mr-1" />
                                            <span>{firstItem?.fuel_type}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <TbManualGearbox size={15} className="mr-1" />
                                            <span>{firstItem?.transmission_type}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MdOutlineAirlineSeatReclineExtra size={15} className="mr-1" />
                                            <span>{firstItem?.seater}</span>
                                        </div>
                                    </div>
                                    <div className='pt-2'>
                                        <p className='text-black text-lg text-center font-semibold pb-2'>For Booking</p>
                                        <div className="flex justify-around text-white">
                                            <button className='bg-green-500 w-full rounded-bl-md p-2'>
                                                <Link href="https://api.whatsapp.com/send?phone=+9666677405&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking." target='_blank'>
                                                    <p className=' flex gap-1 text-lg items-center'><span><FaWhatsapp size={20} /></span> <span>Whatsapp</span></p>
                                                </Link>
                                            </button>
                                            <button className='bg-blue-500 w-full rounded-br-md p-2'>
                                                <Link href="tel:9666677405" target='_blank'>
                                                    <p className='flex gap-1 text-lg items-center px-1'><span><BiPhoneCall size={20} /></span> <span>Call Us</span></p>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    {filteredData?.slice(0, visibleItems).map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] md:w-72 h-[500px] lg:hover:scale-105">
                                <div className="relative h-80">
                                    <Link href={`/${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                                        <Image
                                            src={replaceText(item?.car_image_car_right_view)}
                                            alt={StaticData(String(item?.maker_model.toLowerCase())) + String(item?.maker_model.toLowerCase())}
                                            title={StaticData(String(item?.maker_model.toLowerCase())) + String(item?.maker_model.toLowerCase())}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg relative"
                                            // priority
                                            loading='lazy'
                                        />
                                    </Link>
                                </div>

                                <div className="pt-4 flex flex-col gap-4">
                                    <div className='flex items-baseline justify-between px-2'>
                                        <Link href={`/${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                                            <p className="text-gray-700 cursor-pointer font-sans font-semibold text-xs hover:text-red-600 w-fit">{item.maker_model}</p>
                                        </Link>
                                        <p className="text-blue-500 font-bold">₹ {item.price_24_hours * 24}/day</p>
                                    </div>
                                    <div className="flex items-center justify-around border-b border-gray-300 text-black font-normal text-base px-2">
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
                                    <div className='pt-2'>
                                        <p className='text-black text-lg text-center font-semibold pb-2'>For Booking</p>
                                        <div className="flex justify-around text-white">
                                            <button className='bg-green-500 w-full rounded-bl-md p-2'>
                                                <Link href="https://api.whatsapp.com/send?phone=+9666677405&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking." target='_blank'>
                                                    <p className=' flex gap-1 text-lg items-center'><span><FaWhatsapp size={20} /></span> <span>Whatsapp</span></p>
                                                </Link>
                                            </button>
                                            <button className='bg-blue-500 w-full rounded-br-md p-2'>
                                                <Link href="tel:9666677405" target='_blank'>
                                                    <p className='flex gap-1 text-lg items-center px-1'><span><BiPhoneCall size={20} /></span> <span>Call Us</span></p>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {(index + 1) % 3 === 0 && (
                                <div className="bg-orange-100 rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] justify-center md:w-72 h-[500px]  lg:hover:scale-105">
                                    <div>
                                        <Image
                                            src={disc}
                                            height={1000}
                                            width={1000}
                                            alt='discount'
                                            className="scale-90"
                                        />
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

            </div>

            {visibleItems < filteredData?.length && (
                <div className="text-center md:pb-10 pb-6">
                    <button className="bg-blue-500 text-lg font-bold text-white px-9 py-2 rounded-full w-4/5">
                        <Link href={"/explore-self-drive-cars"}>View all cars</Link>
                    </button>
                </div>
            )}
        </div>
    )
}

export default CarProducts