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
    <div className="bg-custom  min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[572px] bg-[#F8F8F8] rounded-[20px] shadow-lg px-6 md:px-20 py-12">
        <div className="flex justify-center pb-4">
          <Image src={Paystride} alt="Logo" width={35} height={70} />
        </div>

        <h1 className="text-[20px] font-semibold text-neutral-900 text-center">
          Welcome back! Enter your login details
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-[20px]">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-neutral-600 font-semibold"
            >
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="mt-1 block w-full h-[44px]  px-3 py-1.5 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
              htmlFor="password"
              className="block text-sm text-neutral-600 font-semibold"
            >
              Password
            </label>
            <div className="relative">
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="mt-1 block w-full px-3 py-1.5 text-sm border  h-[44px]  border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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

          <div className="flex justify-between pt-[20px] pb-[40px]">
            <div className="flex">
              <input type="checkbox" className="w-[20px] h-[20px] mr-2" />
              <h1 className="text-[#0F172A]">Remember me</h1>
            </div>
            <h1 className="font-semibold text-[#091F8E] cursor-pointer">
              Forget password
            </h1>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[50%] h-[44px] m-auto flex justify-center hover:bg-[#091F8E] hover:text-[#F8F8F8] py-2 px-4 border border-transparent rounded-[8px] shadow-sm text-sm font-semibold text-[#94A3B8] bg-[#F1F5F9] "
          >
            {isSubmitting ? 'Processing...' : 'Log in'}
          </button>
        </form>

        <h1 className="mt-2 text-center text-[#000000] #000000">
          Are you new to Paystride?
          <Link
            href="/auth/signup"
            className="text-[#091F8E] hover:underline font-semibold ml-2"
          >
            Sign Up
          </Link>
        </h1>
      </div>
    </div>
  );
}
