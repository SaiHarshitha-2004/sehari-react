import React from "react";
import testi1 from "../images/testi1.jpg";
import testi2 from "../images/testi2.jpg";

const Carousel = () =>{
  return (
    <div>
      <div className="text-center text-3xl title ">Our Testimonals</div>
      <div className={`text-xl text-center title mt-4`}>Hear from Our Customers</div>
      <div className="flex flex-row flex-wrap gap-16  justify-center">
      <div className="lg:w-1/3 p-5">
        <div className="relative mt-16 h-[200px] p-10 leading-9 w-full flex border 
        text-xl subtitle text-gray-700 font-extralight tracking-wide text-center
        items-center rounded-md justify-center bg-gray-50">
        Sehari made finding our dream venue effortless with detailed listings and easy contact. 
              Highly recommend for stress-free event planning!
          <div className="absolute -bottom-4 left-10 h-8 w-8 rotate-45 rounded border border-l-0 border-t-0 bg-gray-50">
          </div>
          <div className="absolute -bottom-5 left-10 h-4 w-8 border border-b-gray-200 shadow-lg border-l-0 border-t-0 border-r-0"></div>
        </div>
        <div className="mt-10 flex w-full flex-row items-center gap-20">
          <img src={testi1} alt="" className="rounded-full w-32 h-32" />
          <div className="flex flex-1 h-full flex-col justify-center">
            <div className="pb-5 great-vibes-regular text-2xl">Lauren and Tyler</div>
            <div className="border w-1/2 border-b-black"></div>
            <div className="pt-5 subtitle font-extralight text-gray-700">Destination Wedding</div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 p-5">
        <div className="relative mt-16 h-[200px] w-full p-10 leading-9 flex border items-center rounded-md 
        text-xl subtitle text-gray-700 font-extralight tracking-wide text-center
        justify-center bg-gray-50">
                    Sehari simplified our baby's birthday venue search with clear listings and easy contact options. 
          Highly recommended for hassle-free party planning!
          <div className="absolute -bottom-4 left-10 h-8 w-8 rotate-45 rounded border border-l-0 border-t-0 bg-gray-50">
          </div>
          <div className="absolute -bottom-5 left-10 h-4 w-8 border border-b-gray-200 shadow-lg border-l-0 border-t-0 border-r-0"></div>
        </div>
        <div className="mt-10 flex w-full flex-row items-center gap-5">
          <img src={testi2} alt="" className="rounded-full w-32 h-32" />
          <div className="flex flex-1 h-full flex-col items-center justify-center">
            <div className="pb-5 great-vibes-regular text-2xl">Clara</div>
            <div className="border w-1/2 border-b-black"></div>
            <div className="subtitle text-gray-700 pt-5 font-extralight">Event type</div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex justify-center">
      <a href="#" className={`text-2xl pt-5 pl-2 pb-2 full-width-underline`}>show more {">"} </a>

      </div>
    </div>
  );
}

export default Carousel;
