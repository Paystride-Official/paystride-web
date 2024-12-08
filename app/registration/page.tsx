'use client';

// ADD THE TYPE="SUBMIT" AND CHANGE THE H1 TO LABEL

import React from 'react';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { IoEyeOutline } from 'react-icons/io5';
import Image from 'next/image';



import { useState } from 'react';
import Link from 'next/link';

const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (


    <div className="relative w-full h-full pb-8 flex flex-col justify-center items-center">
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
              <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
              <h1 className="text-[#0F172A] mt-2 font-semibold text-xl">
                Let&apos;s get you started
              </h1>
              <div className="flex flex-col mt-4 space-y-2 w-[100%]">
                <div>
                  <h1 className="font-semibold text-[#475569] ">Business Name</h1>
                  <input
                    type="text"
                    name="bsuiness-name"
                    id="business-name"
                    placeholder="Enter Business Name"
                    className="w-full h-[44px] pl-6 border-[#94A3B8]  border-2 outline-none placeholder-[#94A3B8] rounded-md"
                  />
                </div>

                <div>
                  <h1 className="font-semibold text-[#475569] ">Email</h1>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="w-full h-[44px] pl-6 border-[#94A3B8]  border-2 outline-none placeholder-[#94A3B8] rounded-md"
                  />
                </div>

                <div>
                  <h1 className="font-semibold text-[#475569] ">Phone Number</h1>
                  <input
                    type="phone-number"
                    name="phone-number"
                    id="phone-number"
                    placeholder="Enter Phone Number"
                    className="w-full h-[44px] pl-6 border-[#94A3B8]  border-2 outline-none placeholder-[#94A3B8] rounded-md"
                  />
                </div>

                <div>
                  <h1 className="font-semibold text-[#475569] ">Password</h1>
                  <div className="w-full h-[44px] flex py-1 border-[#94A3B8] border-2 rounded-md object-cover pr-4">
                    <input
                      type={open === false ? 'password' : 'text'}
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      className="w-[100%] border-none pl-6 outline-none placeholder-[#94A3B8] tracking-widest placeholder:tracking-normal"
                    />
                    {open === false ? (
                      <FaRegEyeSlash
                        className="text-2xl m-auto text-[#475569]"
                        onClick={toggle}
                      />
                    ) : (
                      <IoEyeOutline
                        className="text-2xl m-auto text-[#475569]"
                        onClick={toggle}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <h1 className="font-semibold text-[#475569] ">How did you hear about us?(Optional)</h1>
                  <div className="w-full h-[44px] flex py-1 border-[#94A3B8] border-2 rounded-md object-cover pr-2">
                    <select className='outline-none w-full h-full  ml-4'>
                      <option value="">Select an option</option>
                      <option value="option1">Social Media</option>
                      <option value="option2">Outdoor Billboard</option>
                      <option value="option3">Friends/Family</option>
                      <option value="option3">Others</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between py-4">
                  <div className="flex">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      className="w-5 h-5"
                    />
                    <span className="ml-2 text-[#0F172A] cursor-pointer">By checking,you have agreed to our <span className='text-[#091F8E]'> Terms of Services </span>and <span className='text-[#091F8E]'>Polices</span> </span>
                  </div>
                </div>

                <Link href="/registration/verifyEmail" className='m-auto'>
                  <button className="bg-[#F1F5F9] w-[400px] h-[44px] m-auto text-[#94A3B8] hover:bg-[#091F8E] hover:text-white rounded-md ">
                    Continue
                  </button>
                </Link>

                <Link href="/login" className='m-auto cursor-pointer'>
                  <h1 className='m-auto'>Already have an account? <span className='text-[#091F8E] font-semibold'>Sign in</span></h1>
                </Link>

              </div>
            </>
          </div>
        </div>
      </form>
    </div>













  );
}

export default page;





