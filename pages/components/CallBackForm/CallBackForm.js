import React from 'react'
import Image from 'next/image'
import carphotot from '../../images/rightimg.png';

function CallBackForm() {

    return (
        <div className='bg-white'>
            <div className='flex lg:mx-[77px] p-5 xl:mx-[98px] xs:mx-7 rounded-md justify-center bg-orange-400  items-center pb-5 lg:pt-5 text-white shadow-md'>
                <div className='lg:flex lg:flex-col lg:justify-center lg:items-center xl:p-5 lg:w-2/3 xl:w-2/5 xs:p-4 lg:p-0'>
                    <div className='  xl:px-6 lg:py-3'>
                        <h2 className='md:text-3xl md:font-semibold sm:text-lg font-semibold xs:text-center'>Can't find the perfect? </h2>
                        <p className='text-base lg:pl-9 xs:text-center pt-2 xs:pt-0 xs:text-xs font-normal'>Let us help you on a quick call</p>
                    </div>
                    <form className=' lg:px-6 lg:pb-2 pt-2 flex rounded-m'>
                        <input maxLength={10} className='border-2 border-gray-400 xs:px-0 lg:p-2  text-black px-2 rounded xs:w-3/4' type='text' placeholder='mobile no' />
                        <button className='bg-green-400 ml-0 border-2 border-gray-400 lg:p-2 text-xs px-2 rounded'>Get Callback</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CallBackForm