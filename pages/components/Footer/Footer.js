import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaSearch, FaYoutube } from 'react-icons/fa';
import { FiPhone } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import Image from 'next/image';
import logo from '../../images/sdc.png'
import android from '../../images/playstore.png'
// import apple from '../../images/appstore.png'
function Footer() {
    return (
        <div className='lg:p-16 bg-gray-800'>
            {/* <div>
                <Image
                    className='bg-white p-2  rounded-sm'
                    src={logo}
                    alt="carrr"
                    width={400}
                    height={300
                />
 
            </div> */}
            <footer className="flex flex-wrap justify-between gap-3 bg-gray-800 text-white p-4 lg:px-28 border-b-2 border-b-blue-400">
                <div className='lg:w-3/6'>
                    <h2 className='text-left font-newfont font-bold text-xl mb-1'>About Long Drive Cars</h2>
                    <div className='flex flex-col text-lef'>
                        <p className='leadi'>Long drive cars a leading car rental company offers rental cars for self drive in Hyderabad and various other cities. Currently operational in Hyderabad, Warangal and Bangalore, Long drive cars offer a huge selection of cars ranging from luxury suvs or a sensible sedan.</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-left mb-1 text-xl font-bold'>Contact Info</h2>
                    <div className='flex flex-col text-left text-lg gap-2'>
                        <div className='flex items-center'>
                            <ul >
                                <li>Telangana, AP</li>
                                <li className=' text-xl'>9000-478-478</li>
                            </ul>
                        </div>
                        <div className='flex items-center'>
                            <ul>
                                <li>Bangalore</li>
                                <li className=' text-xl'>912-912-25-25</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className='flex bg-black'>
                    <Image
                    src={android}
                    height={200}
                    width={300}
                    className='bg-black'
                    />
                    <Image
                    className='bg-black'
                    src={apple}
                    height={200}
                    width={300}
                    />
                </div> */}
            </footer>
            <div >
                <ul className='flex flex-wrap items-center justify-around py-5 gap-5 text-white flex-grow'>
                    <li>© selfdrivecars all rights reserved</li>
                    <li className='flex gap-6'>

                        <p className='hover:text-blue-500 cursor-pointer'><FaFacebook size={35} /></p>
                        <p className='hover:text-pink-500 cursor-pointer'><FaInstagram size={35} /></p>
                        <p className='hover:text-blue-300 cursor-pointer'><FaTwitter size={35} /></p>
                        <p className='hover:text-red-500 cursor-pointer'><FaYoutube size={35} /></p>
                    </li>
                    <li className='flex gap-5 text-base'>
                        <p className='hover:text-blue-500 cursor-pointer'>Privacy & Policy</p>
                        <p className='hover:text-blue-500 cursor-pointer'>Blog</p>
                        <p className='hover:text-blue-500 cursor-pointer'> Policy</p>
                    </li>

                </ul>
            </div>
        </div>
    )
}
export default Footer