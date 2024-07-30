import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import React, { useState , useEffect } from 'react';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import Link from 'next/link';
import disc from './images/discountonbook.webp'
import { FaSearch } from 'react-icons/fa';
import StaticData from './components/StaticData/StaticData'
import { useMemo } from "react";
import desc from './images/discountonbook.webp'
import img2 from './changeimg/innova.webp'
import img3 from './changeimg/polo.webp'
import img4 from './changeimg/swift.webp'
import img5 from './changeimg/i20.webp'
export default function car_products({cars}) {

    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);
    const pattern = new RegExp(/^\d{10}$/);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isError && mobile.length == 10) {
            fetch('https://longdrivecarz.in/site/contacts', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'user_phone': mobile,
                    'user_location': 'Hyderabad'
                })
            });
        }
        else {
            // console.log("some error");
        }

    };
    const [searchQuery, setSearchQuery] = useState('');

    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedSeater, setSelectedSeater] = useState('');
    const [selectedFuelType, setSelectedFuelType] = useState('');
    const [selectedTransType, setSelectedTransType] = useState('');
    const [priceRanges, setPriceRanges] = useState({
        '1000-2000': false,
        '2000-3000': false,
    });

    const replaceText = (str) => {
        return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
    };

    const handlePriceRangeChange = (e) => {
        const { value, checked } = e.target;
        setPriceRanges(prev => ({ ...prev, [value]: checked }));
    };

    const uniqueBrands = ["maruthi", "kia", "hyundai", "tata"]
    const uniqueFuelTypes = ["petrol", "diesel"]
    const uniqueSeaters = ["5", "7"];
    const uniqueTrasmission = ["manual", "automatic"];

    // const filteredData = cars?.filter(item =>
    //     item.maker_model.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    const filteredData = useMemo(() => {
        if (!Array.isArray(cars)) return [];

        return cars.filter(item => {
            if (!item) return false; // Skip if item is undefined or null

            const matchesBrand = selectedBrand ? item.maker_model.toLowerCase().includes(selectedBrand.toLowerCase()) : true;
            const matchesSeater = selectedSeater ? item.seater === selectedSeater : true;
            const matchesFuelType = selectedFuelType ? item.fuel_type.toLowerCase() === selectedFuelType.toLowerCase() : true;
            const matchesTransType = selectedTransType ? item.transmission_type.toLowerCase() === selectedTransType.toLowerCase() : true;
            const matchesSearch = item.maker_model.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesBrand && matchesSeater && matchesFuelType && matchesSearch && matchesTransType;
        });
    }, [cars, searchQuery, selectedBrand, selectedSeater, selectedFuelType, selectedTransType]);

    const clearFilters = () => {
        setSelectedBrand('');
        setSelectedSeater('');
        setSelectedFuelType('');
        setSelectedTransType('');
        setSearchQuery('');
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        img2, img3, img4, img5
    ];
    const imgalt = [
        "self drive car rental Innova", "cars for rent polo", "car rentals near me swift", "rent a car for self drive i20"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="produvt-page flex flex-col lg:flex-row gap-10 bg-slate-100">

            <div className='flex lg:pt-12 pt-48 bg-white'>

                <div className="text-black-400 px-20  text-black">
                    <div>
                        <div className="image-container block h-[140px] w-[180px] aspect-w-1 aspect-h-1  xs:h-[140px]">
                            <Image priority src={images[currentIndex]} alt={imgalt[currentIndex]} title={imgalt[currentIndex]} height={600} width={600} layout='responsive' />
                        </div>
                    </div>
                    <div className='flex flex-wrap flex-col capitalize gap-6 mb-6 w-max lg:pt-2 pt-2 font-manrope'>
                        <div className="flex gap-6">
                            <p className="text-black text-2xl font-bold">Filters</p>
                            <button className="text-xs opacity-85" onClick={clearFilters}>Clear all </button>
                        </div>
                        <div className='flex flex-col capitalize  '>
                            <label className='font-semibold text-xl'>Brand</label>
                            {uniqueBrands.map(brand => (
                                <label key={brand} className='flex items-center'>
                                    <input
                                        type='radio'
                                        name='brand'
                                        value={brand}
                                        checked={selectedBrand === brand}
                                        onChange={() => setSelectedBrand(brand)}
                                        className='mr-2'
                                    />
                                    {brand}
                                </label>
                            ))}
                        </div>
                        <div className='flex flex-col  '>
                            <label className='font-semibold text-xl'>Seater</label>
                            {uniqueSeaters.map(seater => (
                                <label key={seater} className='flex items-center'>
                                    <input
                                        type='radio'
                                        name='seater'
                                        value={seater}
                                        checked={selectedSeater === seater}
                                        onChange={() => setSelectedSeater(seater)}
                                        className='mr-2'
                                    />
                                    {seater}
                                </label>
                            ))}
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold text-xl'>Fuel Type</label>
                            {uniqueFuelTypes.map(fuelType => (
                                <label key={fuelType} className='flex items-center'>
                                    <input
                                        type='radio'
                                        name='fuelType'
                                        value={fuelType}
                                        checked={selectedFuelType === fuelType}
                                        onChange={() => setSelectedFuelType(fuelType)}
                                        className='mr-2'
                                    />
                                    {fuelType}
                                </label>
                            ))}
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-semibold text-xl'>Transmission Type</label>
                            {uniqueTrasmission.map(TransType => (
                                <label key={TransType} className='flex items-center'>
                                    <input
                                        type='radio'
                                        name='TransType'
                                        value={TransType}
                                        checked={selectedTransType === TransType}
                                        onChange={() => setSelectedTransType(TransType)}
                                        className='mr-2'
                                    />
                                    {TransType}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full'>
                <h2 id='explore' className="px-3 font-bold text-2xl font-jakarta pt-8 text-blue-950 mb-2 lg:text-5xl lg:mb-9 lg:text-center">Explore Self Drive
                    Car Rentals</h2>
                <div className='mb-9 lg:mb-16 flex flex-grow items-center justify-center'>
                    <input
                        placeholder='Search for the cars'
                        className='placeholder-black text-black px-4 py-3 rounded-full w-full max-w-56 md:max-w-96 lg:max-w-2xl'
                        type='search'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <FaSearch size={25} className='text-blue-500 relative right-14 lg:right-20 md:right-14' />
                </div>
                <div className="lg:grid lg:grid-cols-3 gap-x-8 gap-y-8 flex flex-col gap-2 items-center justify-center lg:max-w-7xl">
                    {filteredData?.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] lg:w-80 h-96 lg:hover:scale-105">
                                <div className="relative h-64">
                                    <Link href={`/${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                                        <Image
                                            src={replaceText(item?.car_image_car_right_view)}
                                            alt={StaticData(String(item?.maker_model.toLowerCase()) + `${item?.maker_model.toLowerCase()}`)}
                                            title={StaticData(String(item?.maker_model.toLowerCase()) + `${item?.maker_model.toLowerCase()}`)}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-t-lg relative"
                                            priority
                                        // loading='lazy'
                                        />
                                    </Link>
                                </div>

                                <div className="px-2 pt-4 flex flex-col gap-4 p-1">
                                    <div className='flex items-baseline justify-between px-2'>
                                        <Link href={`/${item.maker_model}`}>
                                            <p className="text-gray-700 cursor-pointer font-sans font-semibold text-[10px] hover:text-red-600 w-fit">{item.maker_model}</p>
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
                                            <Link href="https://api.whatsapp.com/send?phone=+9666677405&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking." target='_blank'>
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
                            {(index + 1) % 10 === 0 && (
                                <div className="bg-orange-400 rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] justify-center md:w-80 h-96 lg:hover:scale-105">
                                    <div className="flex flex-col justify-center items-center">
                                        <h2 className='text-center '>Can't find the perfect car? </h2>
                                        <p className='text-center'>Let us help you on a quick call</p>
                                        <form onSubmit={handleSubmit} className='rounded-lg  text-xs flex p-7'>
                                            <input
                                                value={mobile}
                                                type="text"
                                                placeholder="Enter mobile number"
                                                onChange={(e) => {
                                                    setmobile(e.target.value);
                                                    if (!pattern.test(e.target.value))
                                                        setIsError(true);
                                                    else setIsError(false);
                                                }}
                                                maxLength={10}
                                                className='lg:rounded-md lg:w-full lg:p-3 xs:w-40 xs:rounded-sm xs:p-1'
                                            />

                                            <button className='bg-green-400 ml-0 border-2 xs:ml-1 xs:p-1  border-gray-400 lg:p-2 lg:text-[10px] text-white lg:w-28  w-fit xs:text-[8px] rounded' type="submit">Get Callback</button>
                                        </form>
                                        <div>{isError && mobile.length > 1 && <p className='text-sm text-center '>Please enter a valid number</p>}</div>
                                    </div>
                                </div>
                            )}
                            {(index + 1) % 5 === 0 && (
                                <div className="bg-orange-100 rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] justify-center md:w-80 h-96 lg:hover:scale-105">
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