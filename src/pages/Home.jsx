import React from "react";
import services from "../images/services.jpg";
import gallery from "../images/gallery.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { Swiper  , SwiperSlide } from "swiper/react"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import servicesTitle from "../images/servicesTitle.jpg";
import { titleSize, subtitleSize } from "./Styles";
import BestVenues from "../HomeComponents/BestVenues";
import SehariWorks from "../HomeComponents/SehariWorks";

const Home = () => {
  return (
    <>
      <div className="z-1">
        <div>
          <div className="fixed w-full max-h-fit top-0 bottom-0">
            <NavBar />
          </div>
          <div className=" w-full">
            <img src={servicesTitle} alt="" className="w-full" />
          </div>
          
        </div>
        <div className="flex justify-center ">
          <div className="flex gap-5 md:flex-col md:items-center sm:flex-col sm:items-center lg:flex-row lg:justify-between w-3/4 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="-z-10 border border-red-200">
              <div className="flex flex-col items-start self-start max-sm:max-h-full max-sm:max-w-full max-md:max-h-full max-md:max-w-3/4">
                <div className="relative">
                  <div className="bg-red-50 w-full">
                    <img
                      src={services}
                      alt="Your Image"
                      className="relative sm:top-10 sm:left-10 md:top-10 md:left-10 lg:top-10 lg:left-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:mt-10 sm:mt-10 md:ml-10 lg:ml-10 px-16 pt-12 pb-20 bg-stone-200 max-sm:max-h-full max-sm:max-w-full max-md:max-h-full max-md:max-w-full">
              <div
                className={`ml-5 title ${titleSize} whitespace-nowrap  max-md:ml-2.5`}
              >
                Our Services
              </div>
              <div
                className={`mt-10 tracking-wide text-center leading-[50px] subtitle ${subtitleSize}`}
              >
                Discover and book stunning venues effortlessly on{" "}
                <span className="">Sehari</span>. Enjoy exclusive discounts,
                gift vouchers, and special offers for your unforgettable event
                planning journey.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:mt-5">
        <div className="flex gap-5 md:flex-col md:items-center sm:flex-col sm:items-center lg:flex-row lg:justify-between w-3/4 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center md:mt-10 sm:mt-10 md:ml-10 lg:ml-10 px-16 pt-12 pb-20 bg-stone-200 max-sm:max-h-full max-sm:max-w-full max-md:max-h-full max-md:max-w-full">
            <div
              className={`ml-5 whitespace-nowrap max-md:ml-2.5 title ${titleSize}`}
            >
              Our Gallery
            </div>
            <div
              className={`mt-10 tracking-wide text-center leading-[50px] subtitle ${subtitleSize}`}
            >
              Step into our gallery and be captivated by the elegance and charm
              of our handpicked event venues. Explore, dream, and plan your
              perfect celebration
            </div>
          </div>
          <div className="-z-10 border border-red-200">
            <div className="flex flex-col items-start self-start max-sm:max-h-full max-sm:max-w-full max-md:max-h-full max-md:max-w-3/4">
              <div className="relative">
                <div className="bg-red-50 w-full">
                  <img
                    src={gallery}
                    alt="Your Image"
                    className="relative sm:top-10 sm:left-10 md:top-10 md:left-10 lg:top-10 lg:left-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* how EHARI WORKS  */}
       <SehariWorks />

      {/* bestVenues compnent */}
      <BestVenues />


      {/* sehari slider component */}
      <div
        className={`self-start mt-40 ml-16 tracking-wider leading-[50px] text-black text-opacity-70 max-md:mt-10 max-md:max-w-full title ${titleSize}`}
      >
        Captivating Venues Await <br />
      </div>
      <div
        className={`self-center mt-16 mb-16  tracking-wide text-center text-black leading-[50px] w-[980px] max-md:mt-10 max-md:max-w-full subtitle ${subtitleSize}`}
      >
        Explore Our Stunning Event Halls! Immerse yourself in a visual feast
        with our curated selection of venue snapshots.
      </div>
      <Swiper
      // install Swiper modules
      className="border border-black "
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="">
        <img src={services} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={services} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={services} alt="" />
      </SwiperSlide>    
      <SwiperSlide>
        <img src={services} alt="" />
      </SwiperSlide>  
      
    </Swiper>
      <Footer />
    </>
  );
};

export default Home;
