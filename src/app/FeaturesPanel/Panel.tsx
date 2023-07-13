"use client";
import Image from "next/image";

const Panel = ({ text, logo }: { text: string; logo: any }) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 h-64 ">
      <div className="flex items-center justify-center w-48 h-48 mb-4 ">
        {/* <Metrics /> */}
        <Image src={logo} width={180} height={180} alt={`${text} logo`} />
      </div>
      <h4 className="text-lg font-extrabold text-black">{text}</h4>
    </div>
  );
};

export default Panel;
