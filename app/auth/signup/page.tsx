'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';

import { signupSchema, type SignupFormData } from '@/lib/schema';
import Paystride from '@/app/assets/paystride.svg';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push('/auth/otp');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom  py-8">
      <div className="w-full max-w-[600px] bg-[#F8F8F8] rounded-[20px] shadow-lg px-6 md:px-20  py-16 ">
        <div className="flex justify-center pb-4">
          <Image src={Paystride} alt="Logo" width={35} height={70} />
        </div>

        <h1 className="text-[20px] font-semibold text-neutral-900 text-center">
          Let&apos;s get you started
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label
              htmlFor="businessName"
              className="block text-sm font-semibold text-neutral-600"
            >
              Business Name
            </label>
            <input
              {...register('businessName')}
              type="text"
              id="businessName"
              className="mt-1 block w-full h-[44px] px-3 py-1 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Business Name"
            />
            {errors.businessName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.businessName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-neutral-600"
            >
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="mt-1 block w-full h-[44px] px-3 py-1 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Email Address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-neutral-600"
            >
              Phone Number
            </label>
            <input
              {...register('phoneNumber')}
              type="tel"
              id="phoneNumber"
              className="mt-1 block w-full h-[44px] px-3 py-1 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Phone Number"
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-neutral-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="mt-1 block w-full h-[44px] px-3 py-1 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600"
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="referralSource"
              className="block text-sm font-semibold text-gray-700"
            >
              How did you hear about us? (Optional)
            </label>
            <select
              {...register('referralSource')}
              id="referralSource"
              className="mt-1 block w-full h-[44px] px-3 py-1 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Option</option>
              <option value="social">Social Media</option>
              <option value="referral">Outdoor Billboard</option>
              <option value="referral">Fiends/Family</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex items-start">
            <input
              {...register('termsAccepted')}
              type="checkbox"
              id="termsAccepted"
              className="h-[44px] w-4 text-blue-600 accent-[#091F8E] focus:ring-blue-500 border-neutral-400 rounded-[8px]"
            />
            <label
              htmlFor="termsAccepted"
              className="ml-2 mt-3 block text-sm text-gray-700"
            >
              By checking, you have agreed to our{' '}
              <Link href="/terms" className="text-[#091F8E] hover:underline">
                Terms of Service
              </Link>
              <span className="mx-1">and</span>
              <Link href="/policies" className="text-[#091F8E] hover:underline">
                Policies
              </Link>
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-sm text-red-600">
              {errors.termsAccepted.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[50%] m-auto flex justify-center  hover:bg-[#091F8E] hover:text-[#F8F8F8] py-2 px-4 border border-transparent rounded-[8px] shadow-sm text-sm font-medium    text-[#94A3B8] bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isSubmitting ? 'Processing...' : 'Continue'}
          </button>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?
          <Link
            href="/auth/login"
            className="text-[#091F8E] hover:underline ml-1 font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
