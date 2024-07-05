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
        // <div style={{backgroundImage:"url('https://assets.website-files.com/60801cda8fa75d1cf863cacd/60801cda8fa75da2d963cc65_header%202.png')", backgroundRepeat:'no-repeat', backgroundSize:"cover", backgroundPosition:"center top", opacity:""}} className='lg:p-16 text-white'>
        // <div className='lg:p-16 text-white bg-black'>
        <div style={{backgroundImage:"url('/hyd.gif')",backgroundRepeat:'no-repeat', backgroundSize:"cont", backgroundPosition:" center", opacity:"",backgroundRepeat:'no-repeat'}} className='lg:p-16 text-white sm:bg-contain bg-black'>
            {/* <div>
                <Image
                    className='bg-white p-2  rounded-sm'
                src={logo}
                alt="carrr"
                    width={400}
                    height={300
                />
 
            </div> */}
            <footer className="flex pb-28 flex-wrap justify-between gap-3 b0 text-white z-10 p-4 lg:px-28 xl:px-2 border-b-2 border-b-blue-400">
                <div className='lg:w-3/6'>
                    {/* <h2 className='text-left font-newfont font-bold text-xl mb-1'>About Long Drive Cars</h2> */}
                    <div className='flex flex-col text-lef'>
                        <p className='lg:text-lg xs:text-sm xs:font-medium lg:font-bold'>Long drive cars a leading car rental company offers rental cars for self drive in Hyderabad and various other cities. Currently operational in Hyderabad, Warangal and Bangalore, Long drive cars offer a huge selection of cars ranging from luxury suvs or a sensible sedan.</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-left mb-1 text-xl font-bold'>Contact Info</h2>
                    <div className='flex flex-col text-left text-lg gap-2'>
                        <div className='flex items-center'>
                            <ul >
                                <li className='text-base'>Telangana, AP</li>
                                <li className='text-2xl font-bold'><Link href="tel:9666677405" target='_blank'>9666-677-405</Link></li>
                            </ul>
                        </div>
                        <div className='flex items-center'>
                            <ul>
                                <li className='text-base'>Bangalore</li>
                                <li className='text-2xl font-bold'><Link href="tel:9129122525" target='_blank'>912-912-25-25</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div  >
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