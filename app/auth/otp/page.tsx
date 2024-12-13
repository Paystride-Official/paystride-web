'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft } from 'lucide-react';

const verificationSchema = z.object({
  code: z.string().length(6, 'Please enter a valid verification code'),
});

type VerificationData = z.infer<typeof verificationSchema>;

export default function Otp() {
  const [verificationCode, setVerificationCode] = useState<string[]>(
    Array(6).fill('')
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const {
    handleSubmit,
    formState: { isSubmitting },
    setError,
    clearErrors,
  } = useForm<VerificationData>({
    resolver: zodResolver(verificationSchema),
  });

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }

    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Clear any previous errors when user starts typing
    clearErrors('code');
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newVerificationCode = [...verificationCode];

    for (let i = 0; i < pastedData.length; i++) {
      if (i < 6) {
        newVerificationCode[i] = pastedData[i];
      }
    }

    setVerificationCode(newVerificationCode);

    // Focus the next empty input or the last input
    const nextEmptyIndex = newVerificationCode.findIndex((x) => !x);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const onSubmit = async () => {
    const code = verificationCode.join('');
    if (code.length !== 6) {
      setError('code', { message: 'Please enter all digits' });
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Verification code submitted:', code);
    } catch (error) {
      console.error(error);
    }
  };

  const handleResendCode = async () => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Resending verification code');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom p-4">
      <div className="w-full max-w-[600px] bg-[#F8F8F8] rounded-[20px] shadow-lg p-8">
        <button
          onClick={() => window.history.back()}
          className="flex items-center hover:text-gray-900 text-[#091F8E] font-semibold "
        >
          <ArrowLeft className="w-4 h-4 mr-1 text-[#091F8E]" />
          Back
        </button>

        <h1 className="text-lg text-black font-semibold text-center">
          Verify Your Email
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Enter the token sent to your email,
          <br />
          <span className="text-[#091F8E]">amorola@gmail.com</span>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col items-center justify-center"
        >
          <div className="flex justify-center gap-2">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className=" w-8 h-8 md:w-12 md:h-12 text-center text-[#0F172A] font-semibold border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 max-w-[300px] h-[44px] mx-auto  hover:bg-[#091F8E] hover:text-[#F8F8F8]  bg-[#F1F5F9] text-[#94A3B8] rounded-lg font-semibold disabled:opacity-50 transition-colors"
          >
            Continue
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-600 mr-[10px]">Didnt get a code?</span>
          <button
            onClick={handleResendCode}
            className="text-[#091F8E] font-semibold hover:text-[#091F8E]"
          >
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
}
