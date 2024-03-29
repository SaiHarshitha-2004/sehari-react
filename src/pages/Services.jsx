import React from "react";
import homeTitle from "../images/homeTitle.jpg";
import NavBar from "./NavBar";
import { CiSearch } from "react-icons/ci";
import Footer from "./Footer";
import { titleSize, subtitleSize } from "./Styles";
import theme from "../images/theme.jpg";
import meeting from "../images/meeting.jpg";
import wedding from "../images/wedding.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import SearchVenue from "../images/SearchVenue.jpg";

const Card = ( {title , content , img }) => {
  return (

    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-89">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-7 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-2xl pb-2 mb-7 top-0 font-semibold text-white">
           <button className="border p-3 rounded-xl">Explore</button>
        </h1>
        <h1 class="font-dmserif text-3xl pb-3 top-0 font-bold text-white">{title}</h1>
        <button class="rounded-full bg-neutral-900 py-5 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
  )    
}

const Services = () => {
  const searchVenue = (e) => {
      if(e.key == "Enter"){
        alert("dfghjk")
      }
  }
  return (
    <div className="mt-1 z-10">
      <div>
        <div className="fixed w-full max-h-fit top-0 bottom-0 z-20">
          <NavBar />
        </div>
        <div className="w-full">
          <img src={homeTitle} alt="" className="w-full" />
        </div>
      </div>

      {/* search your venue */}
      <div className="flex flex-col px-10 py-10 -z-10 max-md:px-5">
        <div className="flex w-full  justify-center">
          <div className="w-1/4 justify-center">
            <img src={SearchVenue} alt="venu" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative top-5 border border-black w-1/2 flex items-center mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <CiSearch />
              </span>
            </div>
            <input
              type="text" onKeyDown={searchVenue}
              className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="search"
            />
          </div>
        </div>


        <div class="flex w-full mt-10 items-center justify-center">
          <div class=" grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3">
             <Card title="Wedding Events" content="Explore" img={wedding} />
             <Card title="Meeting Events" content="Explore" img={meeting} />
             <Card title="themed Events" content="Explore" img={theme} />
          </div>
        </div>

      </div>

      {/* // sample costs */}
      <div className="flex flex-col items-center pb-5 bg-white">
        <div className="shrink-0 mt-5 max-w-full h-px w-[1278px] max-md:mt-10" />
        <div className="flex gap-5 justify-between items-start py-20 pr-9 pl-20 mt-14 max-w-full text-4xl text-black bg-red-50 w-[1208px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <div className="flex flex-col self-start">
            <div className={`self-center whitespace-nowrap title ${titleSize}`}>
              Jamnagar halls
            </div>
            <div className={`mt-8 subtitle ${subtitleSize}`}>Wedding</div>
          </div>
          <div className={`self-end mt-6 subtitle ${subtitleSize}`}>
            1 hr <br />
            $600
          </div>
          <div
            className={`justify-center px-11 py-7 my-auto text-3xl title text-white whitespace-nowrap bg-blue-400 bg-opacity-60 max-md:px-5`}
          >
            Book Now
          </div>
        </div>
        <div className="shrink-0 mt-16 max-w-full h-px bg-black border border-black border-solid w-[1278px] max-md:mt-10" />
        <div className="flex gap-5 justify-between items-start py-20 pr-9 pl-20 mt-14 max-w-full text-4xl text-black bg-red-50 w-[1208px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <div className="flex flex-col self-start">
            <div className={`self-center whitespace-nowrap title ${titleSize}`}>
              Kahmir hall
            </div>
            <div className={`mt-8 subtitle ${subtitleSize}`}>
              {" "}
              Birthday Party
            </div>
          </div>
          <div className={`self-end mt-6 subtitle ${subtitleSize}`}>
            1 hr <br />
            $100
          </div>
          <div className="justify-center px-11 py-7 my-auto text-3xl text-white whitespace-nowrap bg-blue-400 bg-opacity-60 max-md:px-5">
            Book Now
          </div>
        </div>
        <div className="shrink-0 mt-16 max-w-full h-px bg-black border border-black border-solid w-[1278px] max-md:mt-10" />
        <div className="flex gap-5 justify-between items-start py-20 pr-9 pl-20 mt-12 max-w-full text-4xl text-black bg-red-50 w-[1208px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <div className="flex flex-col self-start">
            <div className={`whitespace-nowrap title ${titleSize}`}>
              vaibhav hall
            </div>
            <div className={`mt-9 subtitle ${subtitleSize}`}>Full Package</div>
          </div>
          <div className={`self-end mt-7 subtitle ${subtitleSize}`}>
            1 hr <br />
            $200
          </div>
          <div className="justify-center px-11 py-7 my-auto text-3xl text-white whitespace-nowrap bg-blue-400 bg-opacity-60 max-md:px-5">
            Book Now
          </div>
        </div>
        <div className="shrink-0 mt-28 max-w-full h-px bg-black border border-black border-solid w-[1278px] max-md:mt-10" />
        <div className="flex gap-5 justify-between items-start px-16 py-20 mt-14 max-w-full text-4xl text-black bg-red-50 w-[1208px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <div className="flex flex-col self-start">
            <div className={`self-center whitespace-nowrap title ${titleSize}`}>
              Raj mahal
            </div>
            <div className={`subtitle ${subtitleSize} mt-6`}>
              Partial Package
            </div>
          </div>
          <div className={`subtitle ${subtitleSize} self-end mt-5`}>
            1 hr <br />
            $100
          </div>
          <div className="justify-center px-11 py-7 my-auto text-3xl text-white whitespace-nowrap bg-blue-400 bg-opacity-60 max-md:px-5">
            Book Now
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
