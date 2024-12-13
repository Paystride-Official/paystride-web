'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Support = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/support/confirmation');
  };

  return (
    <div className="h-full w-full bg-[#F8F8F8] flex justify-center items-center py-24">
      <div className="w-[50%]">
        <h1 className="font-semibold text-3xl  text-[#0F172A]"> Need Help?</h1>
        <p className="text-[#475569]">
          Leave us your details and we’ll reach you within 24 hours.
        </p>
        <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
          <div className="w-full flex">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block text-sm text-neutral-600 font-semibold"
              >
                First Name <span className="text-[#FF063C]">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="mt-1 block h-[44px] w-[95%] px-3 py-1.5 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter first name"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block text-sm text-neutral-600 font-semibold"
              >
                Last Name <span className="text-[#FF063C]">*</span>
              </label>

              <input
                type="text"
                id="lastName"
                className="mt-1 block h-[44px]  w-full px-3 py-1.5 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-neutral-600 font-semibold"
            >
              Email Address <span className="text-[#FF063C]">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full h-[44px]  px-3 py-1.5 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="user@paystride.com"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm text-neutral-600 font-semibold"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="mt-1 block w-full h-[44px]  px-3 py-1.5 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="+234"
            />
          </div>

          <div className="">
            <label
              htmlFor="Message"
              className="block text-sm text-neutral-600 font-semibold"
            >
              Message <span className="text-[#FF063C]">*</span>
            </label>
            <textarea
              name="Message"
              id="Message"
              placeholder="Leave us a message..."
              className="mt-1 block w-full  h-[140px] mb-[84px] px-3 py-1.5 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className=" w-[215px] h-[44px] flex justify-center items-center border border-[#091F8E]  text-[#091F8E] font-semibold  bg-[#F1F5F9] rounded-lg"
            >
              <h1>Cancel</h1>
            </button>

            <button
              type="submit"
              className="w-[215px] h-[44px] hover:bg-[#091F8E] hover:text-[#F8F8F8] text-[#94A3B8] flex justify-center items-center font-semibold bg-[#F1F5F9] rounded-lg"
            >
              <h1>Submit</h1>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;
