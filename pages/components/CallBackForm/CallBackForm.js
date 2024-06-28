import React from 'react'
import Image from 'next/image'
import carphotot from '../../images/rightimg.png';

function CallBackForm() {

    return (
        <div>
            <div className=' flex justify-center bg-orange-200 items-center pb-5 pt-5 text-white'>
            <Image
            className='hidden'
            src={carphotot}
            height={200}
            width={200}
            />

                <div className=' p-4'>
                    <h2>Can't find the perfect car</h2>
                    <p>Let us help you on a quick call</p>

                    <form className='mt-6 flex rounded'> 
                        <input type='text' placeholder='mobile no' />
                        <button className='bg-orange-400 ml-0 pl-2 rounded'>Get Callback</button>
                    </form>
                </div>
                <Image
                className='hidden'
            src={carphotot}
            height={200}
            width={200}
            />
            </div>
        </div>
    )
}

export default CallBackForm