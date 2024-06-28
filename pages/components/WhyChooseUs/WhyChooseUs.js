import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import rightimg from '../../images/creta.png'
import Image from 'next/image';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Ri24HoursLine } from "react-icons/ri";

function WhyChooseUs() {
    return (
        <div className='flex flex-wrap'>
            <div className='lg:pl-20 lg:pt-16 2xl:pl-36 2xl:pt-16 p-2 '>
                <div className='p-2 lg:p-8 border-2 border-gray-800 rounded-lg'>
                    <h2 className='lg:text-7xl text-2xl font-medium mb-2 lg:'>Why Choose Us?</h2>
                    <div className="grid lg:grid-cols-2 lg:grid-cols-1 gap-4 lg:pt-24 pt-4 text-lg font-semibold text-black lg:w-full">
                        <div className="flex items-center gap-1 p-2 border-[1px] border-black rounded-md">
                            <RiMoneyRupeeCircleFill className="bg-orange-200 rounded-md p-1" size={40} />
                            <p className="ml-2">Zero Deposit</p>
                        </div>
                        <div className="flex items-center gap-1 p-2 border-[1px] border-black rounded-md">
                            <RiCustomerService2Fill className="bg-orange-200 rounded px-[4px]" size={50} />
                            <p className=" ml-2">24/7 Breakdown Service</p>
                        </div>
                        <div className="flex items-center gap-1 p-2 border-[1px] border-black rounded-md">
                            <SlSpeedometer className="bg-orange-200 rounded-md p-1" size={40} />
                            <p className=" ml-2">Unlimited Kilometers</p>
                        </div>
                        <div className="flex items-center gap-1 p-2  border-[1px] border-black rounded-md">
                            <Ri24HoursLine className="bg-orange-200 rounded-md p-1" size={50} />
                            <p className=" ml-2 mt-1">Choose Your Own Hours</p>
                        </div>
                    </div>

                </div>
            </div>
            {<Image
                className=''
                alt="creta"
                src={rightimg}
                width={600}
                height={600}
            //   layout='fill'
            //   objectFit="cover"

            />}
        </div>
    )
}

export default WhyChooseUs