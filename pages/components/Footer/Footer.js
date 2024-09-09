import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaSearch, FaYoutube } from 'react-icons/fa';
import { SiLinkedin } from "react-icons/si";
import Image from 'next/image';

function Footer() {
    return (
        <div className='bg-white'>
            <div className='flex px-10 py-5 md:justify-between text-white xl:px-28 lg:py-14 flex-wrap bg-orange-500 rounded-md mx-[14px] lg:mx-[58px] my-3 items-center font-sans'>
                <div className=' xl:text-left lg:text-base text-left text-xs font-semibold'>
                    <ul className='gap-2 flex flex-col'>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/gachibowli'}>Self drive car rental in Gachibowli</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/medipally'}>Self drive car rental in Medipally</Link></li>
                        <li className='hover:scale-105 '><Link href={'/self-drive-car-rental/miyapur'}>Self drive car rental in Miyapur</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ramanthapur'}>Self drive car rental in Ramanthapur</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/secunderabad'}>Self drive car rental in Secunderabad</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/shamshabad'}>Self drive car rental in Shamshabad</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/mehdipatnam'}>Self drive car rental in Mehdipatanam</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/khajaguda'}>Self drive car rental in Khajaguda</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/hitech'}>Self drive car rental in Hitech</Link></li>

                    </ul>
                </div>
                <div className=' xl:text-left lg:text-base text-left text-xs font-semibold'>
                    <ul className='gap-2 flex flex-col pt-1 lg:pt-0'>
                        <li className='hover:scale-105'> <Link href={'/self-drive-car-rental/dilshuknagar'}>Self drive car rental in Dilshuknagar</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/madhapur'}>Self drive car rental in Madhapur</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/kukatpally'}>Self drive car rental in Kukatapally</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ameerpet'}>Self drive car rental in Ameerpet</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ecil'}>Self drive car rental in Ecil</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/patancheru'}>Self drive car rental in Patancheru </Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/lbnagar'}>Self drive car rental in LB Nagar </Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/nanakramguda'}>Self drive car rental in Nanakramguda </Link></li>
                        {/* <li className='hover:scale-105'><Link href={'/self-drive-car-rental/tarnaka'}>Self drive car rental in Tarnaka </Link></li> */}




                    </ul>
                </div>
            </div>
            <div className='xs:bg-[1600px,700px] lg:bg-cover lg:px-16 text-white sm:bg-cotain bg-cover bg-black lg:bg-center bg-bottom'>
                <footer className='lg:pb opacity-'>
                    <div className="flex flex-wrap px-4 justify-between gap-3 b0 text-white z-10 pt-16 lg:pb-24">
                        <div className='lg:w-3/6'>
                            <div className='flex flex-col text-lef'>
                                <p className='lg:text-lg xs:text-xs xs:font-medium lg:font-semibold font-sans'>Long drive cars a leading car rental company offers rental cars for self drive in Hyderabad and various other cities. Currently operational in Hyderabad, Warangal and Bangalore, Long drive cars offer a huge selection of cars ranging from luxury suvs or a sensible sedan.</p>
                            </div>
                        </div>
                        <div className='xl:pr-9'>
                            <p className='text-left mb-1 text-xl font-bold'>Contact Info</p>
                            <div className='flex md:flex-col xs:flex-row text-left text-lg xs:gap-4 xs:pb-4'>
                                <div className='flex items-center'>
                                    <ul >
                                        <li className='text-base'>Telangana, AP</li>
                                        <li className='text-xl lg:text-4xl font-bold'><Link href="tel:9666677405" target='_blank'>9666-677-405</Link></li>
                                    </ul>
                                </div>
                                <div className='flex items-center'>
                                    <ul>
                                        <li className='text-base'>Bangalore</li>
                                        <li className='text-xl lg:text-4xl font-bold'><Link href="tel:9129122525" target='_blank'>912-912-25-25</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-black border-t-2 border-slate-300 pb-4'>
                        <ul className='flex flex-wrap items-center lg:justify-between justify-center lg:pb-4 gap-5 pt-4 text-white flex-grow'>
                            <li>© selfdrivecars all rights reserved</li>
                            <li className='flex justify-end items-center gap-5 pl-2'>
                                <Link href={'https://www.facebook.com/selfdrivecarsbylongdrivecars/'} target='_blank'>
                                    <p className='hover:text-blue-500 cursor-pointer'><FaFacebook className='lg:size-8 size-9' /></p>
                                </Link>
                                <Link href={'https://www.instagram.com/longdrivecars_official/'} target='_blank'>
                                    <p className='hover:text-blue-500 cursor-pointer'><FaInstagram className='lg:size-8 size-9' /></p>
                                </Link>
                                <Link href={'https://in.linkedin.com/company/long-drive-cars'} target='_blank'>
                                    <p className='hover:text-blue-500 cursor-pointer'><SiLinkedin className='lg:size-8 size-9' /></p>
                                </Link>
                                <Link href={'https://www.youtube.com/@longdrivecars_official'} target='_blank'>
                                    <p className='hover:text-blue-500 cursor-pointer'><FaYoutube className='lg:size-8 size-9' /></p>
                                </Link>
                            </li>
                            <li className='flex gap-5 text-base'>
                                <p className='hover:text-blue-500 cursor-pointer'>Privacy & Policy</p>
                                <p className='hover:text-blue-500 cursor-pointer'>Blog</p>
                                <p className='hover:text-blue-500 cursor-pointer'> Policy</p>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default Footer