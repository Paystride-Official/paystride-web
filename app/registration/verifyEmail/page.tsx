'use client';
import Link from 'next/link';
import Image from 'next/image';

import { FaArrowLeftLong } from 'react-icons/fa6';
import React, { useState } from 'react';


const page = () => {

    const [otp, setOtp] = useState(new Array(6).fill(""));

    function handlechange(e: any, index: number) {
        if (isNaN(e.target.value)) return false;

        setOtp([
            ...otp.map((data, indx) => (
                indx === index ? e.target.value : data
            ))
        ])

        if (e.target.value && e.target.nextSibling) {
            e.target.nextSibling.focus()
        }

        if (e.target.value === '' && index > 0) {
            const previousInput = document.getElementById(`otp-${index - 1}`);
            previousInput?.focus();
        }
    }



    return (
        <div className="relative w-full h-screen pb-8 flex flex-col justify-center items-center">
            <Image
                src="/images/rectangle.png"
                alt="backgroundImage"
                layout="fill"
                objectFit="cover"
                priority={true}
                className='relative -z-10 flex justify-center items-center'
            />

            <div className="flex m-4">
                <div className='w-[36px] h-[36px] flex justify-center items-center rounded-full bg-[#091F8E] font-semibold text-2xl text-[#F8F8F8]'>1</div>
                <div className='w-[100px] h-[2px] bg-[#94A3B8] m-auto mx-2'></div>
                <div className='w-[36px] h-[36px] flex justify-center items-center rounded-full font-semibold text-2xl text-[#FFFFFF] bg-[#DEE4FF]'>2</div>
            </div>
            <form className="w-[50%] flex justify-center py-16 bg-[#F8FAFC] rounded-3xl">
                <div className="w-[80%] h-[80%]">
                    <div className="w-[100%]  flex flex-col items-center">

                        <>
                            <div className="flex w-[100%] text-[#091F8E] font-semibold">
                                <Link href="/registration" className="flex">
                                    <div className="h-[50%] flex">
                                        <FaArrowLeftLong className="text-[#091F8E] mt-1" />
                                        <h1 className="text-[#091F8E] ml-2">Back</h1>
                                    </div>
                                </Link>

                                <div className='flex space-y-2 flex-col justify-center items-center w-[70%]'>
                                    <h1 className='text-2xl text-[#0F172A] font-semibold'>Verify Your Email </h1>
                                    <h1 className='text-[#0F172A]' >Enter the token sent to your email,</h1>
                                    <p className='text-[#091F8E]'>amotola@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex space-x-3 my-4">
                                {
                                    otp.map((data, i) => {
                                        return <input type="text"
                                            className='w-16 h-16 p-6 border-2 border-[#94A3B8] rounded-md focus:outline-none focus:border-2 focus:border-[#091F8E]'
                                            onChange={(e) => handlechange(e, i)}
                                            value={data}
                                            maxLength={1}
                                        />
                                    })
                                }
                            </div>
                            <Link href="/login">
                                <button className="bg-[#F1F5F9] w-[400px] h-[44px] m-auto text-[#94A3B8] hover:bg-[#091F8E] hover:text-white rounded-md my-6">
                                    Continue
                                </button>
                            </Link >

                            <div className="">
                                <h1>Didn't get a code <span className='text-[#091F8E] font-semibold ml-4'>Resend code</span></h1>
                            </div>
                        </>
                    </div>
                </div>
            </form>
        </div>









    );



}
export default page;
