import successIcon from '@/app/assets/successIcon.svg';
import Image from 'next/image';

const page = () => {
  return (
    <div className="w-full h-full flex justify-center bg-[#F8F8F8]">
      <div className="flex flex-col w-[50%] space-y-10  mt-10">
        <Image
          src={successIcon}
          alt="Logo"
          width={126}
          height={120}
          className="m-auto"
        />
        <div className="w-full flex flex-col justify-center">
          <h1 className="m-auto text-xl font-semibold text-[#0F172A]">
            Support Request Submitted
          </h1>
          <h1 className="m-auto text-xl font-semibold text-[#0F172A]">
            Successfully!
          </h1>
        </div>

        <div className="w-full flex flex-col justify-center text-[#475569]">
          <h1 className="m-auto">
            Thank you for reaching out. Your request has
          </h1>
          <h1 className="m-auto">
            been received, and our support team will get
          </h1>
          <h1 className="m-auto">
            back to you shortly. You can check your email
          </h1>
          <h1 className="m-auto"> for updates on your request. </h1>
        </div>

        <div className="w-full flex justify-center items-center text-[#475569] font-semibold">
          <h1 className="m-auto">Request ID: SR-0012345</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
