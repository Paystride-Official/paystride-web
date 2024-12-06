'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

import { signupSchema, type SignupFormData } from '@/lib/schema';
import Paystride from '@/app/assets/paystride.svg';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  // const [showPassword, setShowPassword] = useState(false);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-400 p-4">
      <div className="w-full max-w-[572px] bg-white rounded-[20px] shadow-lg px-6 md:px-20 py-12">
        <button
          onClick={() => window.history.back()}
          className="flex items-center  text-[#091F8E] text-sm "
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </button>
        <div className="flex justify-center ">
          <Image src={Paystride} alt="Logo" width={30} height={50} />
        </div>

        <h1 className="text-[20px] font-semibold text-neutral-900 text-center">
          Forgot password
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-600"
            >
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-1.5 text-sm border border-neutral-400 text-neutral-900 rounded-[8px] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Email Address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 flex justify-center w-full max-w-[320px] h-[44px] py-2 px-4 mx-auto border border-transparent rounded-[8px] shadow-sm text-sm font-medium text-white bg-[#091F8E] "
          >
            {isSubmitting ? 'Processing...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}
