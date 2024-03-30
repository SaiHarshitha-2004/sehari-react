import React from "react";
import { subtitleSize } from "./Styles";

const Footer = () => {
  return (
    <div>
      <div className="flex gap-4 justify-between items-center self-stretch py-10 pr-10 pl-10 mt-32 w-full bg-stone-700 bg-opacity-60 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 self-stretch items-center my-auto text-4xl font-light whitespace-nowrap text-zinc-50">
          <div className={` subtitle ${subtitleSize} self-center`}>Indore</div>
          <div className={` subtitle ${subtitleSize} mt-8`}>Madya Pradesh</div>
        </div>
        <div className="shrink-0 self-start mt-3.5 w-0.5 bg-white border-2 border-white border-solid h-[171px]" />
        <div className="flex flex-col flex-1 self-stretch items-center my-auto text-4xl font-light whitespace-nowrap text-zinc-50">
          <div className={`subtitle ${subtitleSize}`}>tel no:123-456-789</div>
          <div className={` subtitle ${subtitleSize} mt-10 max-md:mt-10`}>
            sehari@gmail.com
          </div>
        </div>
        <div className="shrink-0 self-start mt-3.5 w-0.5 bg-white border-2 border-white border-solid h-[171px]" />
        <div className="flex flex-col flex-1 items-center self-stretch my-auto">
  <div className={`subtitle ${subtitleSize} mx-8 text-white whitespace-nowrap max-md:mx-2.5`}>
    Connect with us:
  </div>
  <div className="flex gap-5 justify-between mt-9 flex-wrap">
    {/* Apply classes to make images fit and responsive */}
    <img className="w-1/4 max-w-s h-auto" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04d854704eb031290451c1f3de848616eae7399fc980e7300b3174e25b871270?" />
    <img className="w-1/4 max-w-s h-auto" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8541a556cd51624147071d6a8788a4277ab9709b233ff3a2d8347c7b4b530f40?" />
    <img className="w-1/4 max-w-s h-auto" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ebbd276e1e49562eb7b60e532ce3fb94fc5ac774fe206d3aa1e3e585e1501a1?" />
  </div>
</div>

      </div>
    </div>
  );
};

export default Footer;
