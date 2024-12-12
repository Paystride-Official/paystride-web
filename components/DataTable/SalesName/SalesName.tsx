import Image from 'next/image';

type SalesNameProps = {
  image: string;
  name: string;
  phone: string;
};

const SalesName = ({ image, name, phone }: SalesNameProps) => {
  return (
    <div className="font-medium whitespace-nowrap flex items-center gap-2 text-start">
      <Image src={image} alt={name} width={30} height={30} />
      <div>
        <p className="font-semibold text-[#0F172A]">{name}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default SalesName;
