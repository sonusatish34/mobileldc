import React from 'react'

const  CarProducts = () => {
    return (
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
    )
}

export default CarProducts