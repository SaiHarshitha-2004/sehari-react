import React from "react";
import gallery from "../images/gallery.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carousel from "../HomeComponents/Carousel";
import servicesTitle from "../images/servicesTitle.jpg";
import BestVenues from "../HomeComponents/BestVenues";
import SehariWorks from "../HomeComponents/SehariWorks";
import services from "../images/services.jpg";


const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div>
          <div className="z-10 fixed w-full max-h-fit top-0 bottom-0">
            <NavBar />
          </div>
          <div className=" w-full">
            <img src={servicesTitle} alt="" className="w-full" />
          </div>
          
        </div>
        <div className="flex justify-center mt-10 ">
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
                className={`ml-5 title text-2xl whitespace-nowrap tracking-wide max-md:ml-2.5`}
              >
                Our Services
              </div>
              <div
                className={`text-xl pt-5 subtitle text-gray-700 font-extralight tracking-wide text-center`}
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
              className={`ml-5 whitespace-nowrap max-md:ml-2.5 title tracking-wide text-2xl`}
            >
              Our Gallery
            </div>
            <div
              className={`text-xl subtitle text-gray-700 font-extralight pt-5 tracking-wide text-center`}
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
      <Carousel />

      
      <Footer />
    </>
  );
};

export default Home;
