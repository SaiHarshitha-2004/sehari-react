import React from "react";
import gallery from "../images/gallery.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Carousel from "../HomeComponents/Carousel";
import BestVenues from "../HomeComponents/BestVenues";
import SehariWorks from "../HomeComponents/SehariWorks";
import services from "../images/services.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../Data/Animations";

const Home = () => {
  return (
    <>
      <div className="z-10 fixed w-full max-h-fit top-0 bottom-0">
        <NavBar />
      </div>
      <div className="relative top-35 overflow-hidden">
        {/* home page title */}
        <div className="relative w-full b justify-center items-center  bg-home border bg-cover md h-[700px] flex flex-row">
          <div className="ml-5 mr-5 p-5 lg:w-1/2 w-full h-1/2 backdrop-blur-sm">
            <div className="flex h-full w-full flex-col justify-center items-center">
              <div className="flex flex-col">
                <div className="h-full overflow-hidden">
                  <motion.h1
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7}}
                  >
                    <div className="title text-6xl text-center text-[#410825]">SEHARI</div>
                  </motion.h1>
                </div>
                <div className="h-full overflow-hidden">
                  <motion.h1
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7}}
                  >
                  <div className="title text-3xl max-w-fit-content text-[#410825] pt-5">
                    Add a touch of the timeless
                  </div>
                </motion.h1>
                </div>
              </div>

              <div className="flex flex-wrap text-l pb-5 title text-center mt-5 text-[#410825]">
                An online platform to make your event shine and find the venue
                that matches your vision.
              </div>
              <div className="flex items-center">
                <button className="bg-button-color title p-3 rounded-xl">
                  Explore Now
                </button>
                <div className="rating ml-10 flex gap-1">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 border bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask  mask-star-2 border bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 border bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 border bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 border bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* home page services */}

      <div className="flex justify-center mt-16">
        <div className="flex gap-5 md:flex-col md:items-center sm:flex-col sm:items-center lg:flex-row lg:justify-between w-3/4 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="-z-10">
            <div className="flex flex-col gap-15 self-start max-md:max-w-3/4">
              <div className="">
                <div className="border bg-light-color">
                  <img
                    src={services}
                    alt="Your Image"
                    className="translate-y-10 shadow-lg rounded-lg translate-x-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col border bg-white shadow-xl md:mt-12 lg:ml-16 md:ml-12 items-center px-16 pt-12 pb-20">
            <div
              className={`whitespace-nowrap text-[#410825] max-md:ml-2.5 title tracking-wide text-2xl`}
            >
              Our Services
            </div>
            <div
              className={`text-xl subtitle text-[#410825] font-extralight pt-5 tracking-wide text-center`}
            >
              Discover and book stunning venues effortlessly on{" "}
              <span className="">Sehari</span>. Enjoy exclusive discounts, gift
              vouchers, and special offers for your unforgettable event planning
              journey.
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:mt-5">
        <div className="flex gap-5 md:flex-col md:items-center sm:flex-col sm:items-center lg:flex-row lg:justify-between w-3/4 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col border bg-white items-center md:mt-10 sm:mt-10 md:ml-10 lg:ml-10 px-16 pt-12 pb-20 shadow-xl max-sm:max-h-full max-sm:max-w-full max-md:max-h-full max-md:max-w-full">
            <div
              className={`ml-5 max-md:ml-2.5 title tracking-wide text-[#410825] text-2xl`}
            >
              Our Gallery
            </div>
            <div
              className={`text-xl subtitle text-[#410825] font-extralight pt-5 tracking-wide text-center`}
            >
              Step into our gallery and be captivated by the elegance and charm
              of our handpicked event venues. Explore, dream, and plan your
              perfect celebration
            </div>
          </div>
          <div className="-z-10">
            <div className="flex flex-col items-start self-start max-sm:max-h-full max-sm:max-w-full max-md:max-h-full max-md:max-w-3/4">
              <div className="relative">
                <div className="border bg-light-color">
                  <img
                    src={gallery}
                    alt="Your Image"
                    className="shadow-lg rounded-lg  translate-y-10 translate-x-10"
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
