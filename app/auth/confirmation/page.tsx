import successIcon from '@/app/assets/successIcon.svg';
import Image from 'next/image';

const page = () => {
  return (
    <div className="bg-custom  min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[572px] bg-[#F8F8F8] rounded-[20px] shadow-lg px-6 md:px-20 py-12">
        <div className="flex flex-col content-center">
          <Image
            src={successIcon}
            alt="Logo"
            width={126}
            height={120}
            className="m-auto"
          />
          <div>
            <h1 className="font-semibold text-xl text-center mb-[60px] mt-[40px]">
              You’ve successfully reset your password!
            </h1>
          </div>
          <button
            type="submit"
            className="w-[50%] h-[44px] m-auto flex justify-center hover:bg-[#091F8E] hover:text-[#F8F8F8] py-2 px-4 border border-transparent rounded-[8px] shadow-sm text-sm font-semibold text-[#94A3B8] bg-[#F1F5F9] "
          >
            Return to Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
