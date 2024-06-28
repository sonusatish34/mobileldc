import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/sdc.png';
import logo2 from '../../images/sdcnew.png';
import { LuPhoneCall } from 'react-icons/lu';
import styles from './HamburgerMenu.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaSearch, FaYoutube } from 'react-icons/fa';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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
    <div className=''>
      <div className=' hidden  lg:flex justify-between items-center lg:px-14'>
        <div className={`${styles.scrollContainer} w-full`}>
          <div className={`${styles.scrollText} p-1 text-xl`}>
            Zero Deposit Unlimited Kilometers
          </div>
        </div>
        <div className='border-l-2 border-l-black'><li className='flex justify-end  gap-5 pl-2'>
          <p className='hover:text-blue-500 cursor-pointer'><FaFacebook size={25} /></p>
          <p className='hover:text-pink-500 cursor-pointer'><FaInstagram size={25} /></p>
          <p className='hover:text-blue-300 cursor-pointer'><FaTwitter size={25} /></p>
          <p className='hover:text-red-500 cursor-pointer'><FaYoutube size={25} /></p>
        </li>
        </div>
      </div>
      <subhead>
        <div className="lg:flex hidden  bg-gray-800 justify-between text-white text-base py-2 px-14">
          <h2 className='lg:text-2xl lg:font-bold'>For Booking Help</h2>
          <div className="flex items-center gap-1">
            <h2><LuPhoneCall size={20} /></h2>
            <h2 className='lg:text-2xl lg:font-bold'>9000-478-478</h2>
          </div>
        </div>
      </subhead>

      <div className="flex md:w-full lg:justify-between items-center z-50 fixed lg:relative lg:gap-x-36 bg-white lg:py-14 lg:px-14 border-8 border-orange-100 lg:h-20">
        <div className=" flex">
          <Link href={'/'}>
          <div className='flex cursor-pointer items-center'>
            <Image
              className="w-24 lg:w-48  lg:h-48"
              src={logo2}
              alt="carrr"
              width={150}
              height={150}
            />
            <div className='w-56 lg:w-fit flex flex-col al lg:mt-2'>
              <p className='font-semibold text-[11px] lg:text-4xl'>Self Drive Cars Hyderabad</p>
              <p className='text-[9px] lg:text-2xl lg:pl-2 pl-1'>Powered By <span className='text-[#004aad] ml-1 lg:font-extrabold lg:text-2xl'>LONG DRIVE CARS</span></p>
            </div>
          </div>
          </Link>
        </div>
        <div className={`${isOpen ? "hidden" :  'block overflow-auto'} hidden lg:block lg:pr-40`}>
          <ul className={`${isOpen ? "hidden" :  'block overflow-auto'}  font-semibold text-lg flex gap-8`}>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Home</Link></li>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Blog</Link></li>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>About Us</Link></li>
            <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Contact Us</Link></li>
            
            
          </ul>
        </div>
        <div className='lg:hidden block'>
          <button
            ref={buttonRef}
            className="fixed top-10 right-4 z-40 text-orange-400"
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
          className={`${isOpen ? 'block overflow-auto' : 'hidden'} w-3/4 h-fit absolute top-28   p-2 pt-6 lg:pr-16 right-0 z-50 transition-transform delay-2000 ease-out bg-white text-black`}
          style={{ transform: `${isOpen ? 'translateX(0)' : 'translateX(-100%)'}` }}
        >
          <div className='flex'>
            <Image
              className="w-20 h-16"
              src={logo2}
              alt="carrr"
              width={139}
              height={140}
            />
            <div className='w-1/3 ml-3 flex flex-col al mt-2'>
              <p className='font-bold text-sm '>Self Drive Cars Hyderabad</p>
              <p className='text-xs'>Powered By<span className='inline-block'><Image /> </span> <span className='text-xs'>LONG DRIVE CARS</span></p>
            </div>
          </div>
          <ul className="pl-11 pt-4 font-semibold flex flex-col gap-3 bg-s items-start text-black">
            <li className="w-32 text-start"><Link href={'/'}>Home</Link></li>
            <li className="  w-32 text-start"><Link href={''}>Contact</Link></li>
            <li className="  w-32 text-start"><Link href={''}>Blog</Link></li>
            <li className="  w-32 text-start"><Link href={''}>Reviews</Link></li>
          </ul>
          <div className="flex flex-col text-left gap-2 p-6 justify-center ">
            <p>For Booking Help Call</p>
            <div className="flex items-center   ">
              <ul className="">
                <li>Telangana, AP</li>
                <li className="font-bold text-2xl">9000-478-478</li>
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

