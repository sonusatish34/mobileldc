"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/sdc.png';
import logo2 from '../../images/sdcnew.png';
import { LuPhoneCall } from 'react-icons/lu';
import styles from './HamburgerMenu.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaSearch, FaYoutube } from 'react-icons/fa';
import { TbPointFilled } from "react-icons/tb";
import Marquee from 'react-fast-marquee';
// import { document } from 'postcss';
import { SiLinkedin } from "react-icons/si";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  // console.log(document.getElementById('sub'),'gm');
  useEffect(() => {
    if (typeof document !== 'undefined') {
      console.log(document.getElementById('sub'), 'gm');
      console.log("hello");
    }
  }, []);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='fixed lg:relative top-0 left-0 right-0 z-50 bg-white text-black shadow-md'>
      <div className='flex justify-between items-center lg:px-14'>
        <Marquee speed={50}>
          <div className={'flex p-1 text-xs gap-2 lg:text-xl '}>
            <p className='flex items-center justify-center'><TbPointFilled /><span>Zero Deposit</span></p>
            <p className='flex items-center justify-center'><TbPointFilled /><span>Unlimited Kilometers</span></p>
            <p className='flex items-center justify-center'><TbPointFilled /><span>24/7 Breakdown Service</span></p>
            <p className='flex items-center justify-center'><TbPointFilled /><span>Neately Washed Car</span></p>
          </div>
        </Marquee>
        <div className='border-l-2 border-l-black'>
          <li className='flex justify-end gap-5 pl-2'>
            <Link href={'https://www.facebook.com/selfdrivecarsbylongdrivecars/'} target='_blank'>
              <p className='hover:text-blue-500 cursor-pointer'><FaFacebook className='lg:size-6'/></p>
            </Link>
            <Link href={'https://www.instagram.com/longdrivecars_official/'} target='_blank'>
              <p className='hover:text-blue-500 cursor-pointer'><FaInstagram className='lg:size-6'/></p>
            </Link>
            <Link href={'https://in.linkedin.com/company/long-drive-cars'} target='_blank'>
              <p className='hover:text-blue-500 cursor-pointer'><FaTwitter className='lg:size-6'/></p>
            </Link>
            <Link href={'https://www.facebook.com/selfdrivecarsbylongdrivecars/'} target='_blank'>
              <p className='hover:text-blue-500 cursor-pointer'><FaYoutube className='lg:size-6'/></p>
            </Link>
            {/* <p className='hover:text-pink-500 cursor-pointer'><FaInstagram   /></p>
          <p className='hover:text-blue-300 cursor-pointer'><FaTwitter   /></p>
          <p className='hover:text-red-500 cursor-pointer'><FaYoutube   /></p> */}
          </li>
        </div>
      </div>
      <subhead className="">
        <div id='sub' className="flex bg-gray-800 justify-between text-white text-base py-2 px-3 lg:px-14">
          <h2 className='lg:text-2xl lg:font-bold'>For Booking Help</h2>
          <div className="flex items-center gap-1">
            <h2><LuPhoneCall size={20} /></h2>
            <h2 className='lg:text-2xl lg:font-bold'><Link href="tel:9666677405" target='_blank'>9666-677-405</Link></h2>
          </div>
        </div>
      </subhead>

      <div className="flex w-full lg:justify-between items-center z-50 fixed lg:relative bg-white lg:py-14  lg:pr-14 border-8 border-orange-100 lg:h-20 ">
        <div className=" flex">
          <Link className='' href={'/'}>
            <div className=' rounded-md flex cursor-pointer items-center'>
              <Image
                className="w-24 lg:w-48  lg:h-48"
                src={logo2}
                alt="carrr"
                width={150}
                height={150}
              />
              <div className='w-48 text-black 2xl:w-full lg:w-96 flex flex-col al lg:mt-2'>
                <p className='font-semibold xl:text-xl lg:text-xl text-xs'>Self Drive Cars Hyderabad</p>
                <p className='lg:text-[15px] lg:pl-2 text-[9px] xl:text-base pl-1'>Powered By <span className='text-[#004aad] ml-1 lg:font-extrabold 2xl:text-2xl'>LONG DRIVE CARS</span></p>
              </div>
            </div>
          </Link>
        </div>
        <div className={`${isOpen ? "hidden" : 'block '} hidden  lg:block 2xl:pr-40`}>
          <ul className={`${isOpen ? "hidden" : 'block'}  font-semibold text-lg flex gap-8`}>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Home</Link></li>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Blog</Link></li>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>About Us</Link></li>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Contact Us</Link></li>
          </ul>
        </div>
        <div className='lg:hidden block'>
          <button
            ref={buttonRef}
            className="fixed top-[7rem] right-4 z-40 text-orange-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 fill-current text-orange-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>

        <nav
          ref={menuRef}
          className={`${isOpen ? 'block overflow-auto' : 'hidden'} w-11/12 h-fit absolute top-24 bg-orange-50 rounded-md  p-2 pt-6 lg:pr-16 right-0 z-50 transition-transform delay-2000 ease-out text-black`}
          style={{ transform: `${isOpen ? 'translateX(0)' : 'translateX(-100%)'}` }}
        >

          <Link href={'/'}>
            <div className='flex cursor-pointer items-center'>
              <Image
                className="w-24 lg:w-48  lg:h-48"
                src={logo2}
                alt="carrr"
                width={150}
                height={150}
              />
              <div className='w-96 font-jakarta flex flex-col md:mt-2'>
                <p className='font-semibold md:text-2xl text-[0.6rem]'>Self Drive Cars Hyderabad</p>
                <p className='md:text-sm text-[0.6rem]'>Powered By <span className='text-[#004aad] lg:font-extrabold 2xl:text-2xl text-[0.5rem]'>LONG DRIVE CARS</span></p>
              </div>
            </div>
          </Link>
          <ul className="pl-6 pt-1 font-semibold flex flex-col gap-2 bg-s items-start text-black">
            <li className="w-32 text-start"><Link href={'/'}>Home</Link></li>
            <li className="  w-32 text-start"><Link href={''}>Contact</Link></li>
            <li className="  w-32 text-start"><Link href={''}>Blog</Link></li>
            <li className="  w-32 text-start"><Link href={''}>Reviews</Link></li>
          </ul>
          <div className="flex flex-col text-left gap-2 pl-6 justify-center ">
            <p>For Booking Help Call</p>
            <div className="flex items-center   ">
              <ul className="">
                <li>Telangana, AP</li>
                <li className="font-bold text-2xl"><Link href="tel:9666677405" target='_blank'>9666-677-405</Link></li>
              </ul>
            </div>
            <div className="flex items-center   ">
              <ul className="">
                <li>Bangalore</li>
                <li className="font-bold text-2xl">912-912-25-25</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;

