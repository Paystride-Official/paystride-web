'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';

import { signupSchema, type SignupFormData } from '@/lib/schema';
import Paystride from '@/app/assets/paystride.svg';
import { useRouter } from 'next/navigation';

export default function ResetPassword() {
  const [showPassword] = useState(false);
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
    <div className="min-h-screen flex items-center justify-center bg-custom">
      <div className="w-full max-w-[572px] h-[500px] bg-[#F1F5F9] rounded-[20px] shadow-lg px-6 md:px-20 pt-20">
        <div className="flex justify-center pb-4">
          <Image src={Paystride} alt="Logo" width={30} height={50} />
        </div>

        <h1 className="text-[20px] font-semibold text-neutral-900 text-center">
          Reset your password
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-neutral-600"
            >
              Password
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="mt-1 block w-full h-[44px] px-3 py-1.5 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Password"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-neutral-600"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="mt-1 block w-full h-[44px] px-3 py-1.5 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm Password"
              />
              {/* <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600"
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button> */}
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full max-w-[300px] h-[44px] m-auto   hover:bg-[#091F8E] hover:text-[#F8F8F8] flex justify-center py-2 px-4 border border-transparent rounded-[8px] shadow-sm text-sm font-semibold mt-[40px] text-[#94A3B8] bg-[#F1F5F9]"
          >
            {isSubmitting ? 'Processing...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
}
