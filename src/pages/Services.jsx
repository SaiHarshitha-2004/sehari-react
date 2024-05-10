import React from "react";
import homeTitle from "../images/homeTitle.jpg";
import NavBar from "./NavBar";
import { CiSearch } from "react-icons/ci";
import servicesTitle from "../images/servicesTitle.jpg";
import Footer from "./Footer";
import theme from "../images/theme.jpg";
import meeting from "../images/meeting.jpg";
import wedding from "../images/wedding.jpg";
import { IoLocationOutline } from "react-icons/io5";
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import DisplayVenuesIcons from "../ServiceComponents/DisplayVenuesIcons";

const Card = ( {title , img }) => {
  return (

    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-89">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-7 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-2xl pb-2 mb-7 top-0 font-semibold text-white">
           <button className="border p-3 rounded-xl">Explore</button>
        </h1>
        <h1 className="font-dmserif text-3xl pb-3 top-0 font-bold text-white">{title}</h1>
        <button className="rounded-full bg-neutral-900 py-5 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
  )    
}


const SampleBookings = ( {hallName , EventType , hr , dollar , border}) => {
  const hallClass = `self-center whitespace-nowrap text-xl subtitle text-[#410825] tracking-wide text-center`;
  const dollarClass = `self-end  text-xl subtitle text-[#410825] tracking-wide text-center` ;
  const btnClass =`justify-center p-3 text-xl title rounded-xl whitespace-nowrap bg-button-color transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-button-color duration-300 bg-opacity-60 max-md:px-5`

  return (
     <>
     <div className="shrink-0 mt-16 max-w-full h-px flex justify-center items-center w-[1278px] max-md:mt-10" />
        <div className="flex gap-5 justify-between items-center  py-20 pr-9 pl-20 mt-6 max-w-full text-4xl text-black bg-red-50 w-[1208px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
          <div className="flex flex-col self-start">
            <div className={hallClass}>
              {hallName}
            </div>
            <div className={hallClass}>
              {" "}
              {EventType}
            </div>
          </div>
          <div className={dollarClass}>
            {hr} <br />
            {dollar}
          </div>
          <div 
            className={btnClass              }            >
            Book Now
          </div>
        </div>
      </>
  )
}

const Services = () => {
  const searchVenue = (e) => {
      if(e.key == "Enter"){
        alert("dfghjk")
      }
  }
 
  return (
    <div className="z-10">
        
        <div className="w-full">
          <img src={servicesTitle} alt="" className="w-full" />
        </div>
      {/* search your venue */}
      <div className="flex flex-col px-10 py-10 -z-10 max-md:px-5">
        <div className="flex w-full  justify-center">
          <div className=" title mt-5 text-2xl w-full flex items-center justify-center">
            <div>Search your venue</div>
            <div className="absolute mb-10 animate-bounce text-5xl"><IoLocationOutline /></div>
          </div>
        </div>
        <div className="flex justify-center mt-6 items-center mb-10">
          <div className="relative border border-black w-1/5 flex items-center rounded-md shadow-sm">
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
          <a href="/map">
            <div className="p-2 ml-5 tooltip tooltip-bottom" data-tip="Geoposition">
              <TravelExploreOutlinedIcon />
            </div>
          </a>
        </div>


        <div className="flex w-full mt-10 items-center justify-center">
          <div className=" grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3">
             <Card title="Wedding Events" img={wedding} />
             <Card title="Meeting Events" img={meeting} />
             <Card title="themed Events" img={theme} />
          </div>
        </div>

      </div>

      <div>
        <DisplayVenuesIcons />
      </div>

      {/* // sample costs */}
      <div className="flex flex-col items-center pb-5 bg-white">

        <div>
          <p className={`title text-3xl mt-20`}>Sample Bookings</p>
        </div>
        <SampleBookings hallName="Jamnagar halls" EventType = "Wedding" hr = "1 hr" dollar= "$600" border={true} />
        <SampleBookings hallName="vaibhav hall" EventType = "Birthday event" hr = "1 hr" dollar= "$200"  border={true}/>
        <SampleBookings hallName="Raj mahal" EventType = "Partial Package" hr = "1 hr" dollar= "$100" border={true} />        
        <SampleBookings hallName="kashmir halls" EventType = "meeeting" hr = "1 hr" dollar= "$600" border={false} />        
      </div>
      <Footer />
    </div>
  );
};

export default Services;
