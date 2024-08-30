import React, { useEffect } from 'react'
import Image from 'next/image'
// import carphotot from '../../images/rightimg.webp';
import { useState } from 'react';

const  CallBackForm = () => {

    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);
    const pattern = new RegExp(/^\d{10}$/);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!isError && mobile.length == 10)
        {
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

    return (
        <div className='bg-white'>
            <div className='flex lg:mx-[77px] p-5 xl:mx-[98px] xs:mx-4 rounded-md justify-center bg-orange-500  items-center pb-5 lg:pt-5 text-white shadow-md'>
                <div className='flex flex-col justify-center items-center xl:p-5 lg:w-2/3 xl:w-2/5 xs:p-0 lg:p-0'>
                    <div className='  xl:px-6 lg:py-3'>
                        <p className='capitalize text-base md:text-2xl md:font-semibold xl:text-2xl font-semibold text-center pb-2'>
                        <span className='flex flex-col gap-1'><span>Unable to find your favorite car? </span><span>We have all types of cars.</span> </span>   </p>
                        <p className='text-sm lg:pl-9 xl:pl-0 xl:text-lg xs:text-center pt-0 font-semibold'>Let us help you on a quick call</p>
                    </div>
                    <form onSubmit={handleSubmit} className='rounded-md text-black text-xs flex pt-4'>
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
                            className='lg:rounded-md lg:w-full lg:p-3 xs:w-40 xs:rounded-sm xs:p-2'
                        />

                        <button className='bg-green-400 ml-0 border-2 xs:ml-1 xs:p-1  border-gray-400 lg:p-2 lg:text-[10px] text-white lg:w-28  w-fit xs:text-xs rounded' type="submit">Get Callback</button>
                    </form>
                    <div>{isError && mobile.length>1 && <p className='text-sm text-center '>Please enter a valid number</p>}</div>
                </div>
            </div>
        </div>
    ) 
}

export default CallBackForm