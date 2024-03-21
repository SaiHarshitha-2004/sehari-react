import React from "react";
import services from "../images/services.jpg";
import gallery from "../images/gallery.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";
import sehariWorks from "../images/sehariWorks.jpg";
import bookEvent from "../images/bookEvent.png";
import connect from "../images/connect.png";
import location from "../images/location.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import servicesTitle from "../images/servicesTitle.jpg";
import { titleSize, subtitleSize } from "./Styles";

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
<div className="flex flex-col pt-10 pr-5 pb-20 pl-5 max-w-full">
        <div
          className={`self-center title ${titleSize} font-light whitespace-nowrap`}
        >
          How <span className="text-blue-400">SEHARI</span> works
        </div>
        <div
          className={`self-center mt-9 subtitle ${subtitleSize} text-center text-black`}
        >
          <span className="text-blue-600">SEHARI</span> helps you find your
          perfect venue by searching for what matters most to you.
        </div>

        <div className="-z-10 title sm:text-2xl md:text-3xl lg:text-lg">
          <VerticalTimeline>
            <VerticalTimelineElement
              date="step 01" dateClassName={``}
              icon={<img src={location} alt="Location" />}
            >
              <h3 className="vertical-timeline-element-title">
                search you event location
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                all over the world
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="step 02"
              icon={<img src={connect} alt="connect" />}
            >
              <h3 className="vertical-timeline-element-title">
                connect through our agency
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                from social media
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="step 03"
              icon={<img src={bookEvent} alt="bookEvent" />}
            >
              <h3 className="vertical-timeline-element-title">
                book your event
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                through online
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      
      {/* sehari slider component */}
      <div
        className={`self-start mt-40 ml-16 tracking-wider leading-[50px] text-black text-opacity-70 max-md:mt-10 max-md:max-w-full title ${titleSize}`}
      >
        Captivating Venues Await <br />
      </div>
      <div
        className={`self-center mt-16  tracking-wide text-center text-black leading-[50px] w-[980px] max-md:mt-10 max-md:max-w-full subtitle ${subtitleSize}`}
      >
        Explore Our Stunning Event Halls! Immerse yourself in a visual feast
        with our curated selection of venue snapshots.
      </div>
      <img className="mt-14 w-full  aspect-[7.69] max-md:mt-10 max-md:max-w-full" />

      
      <Footer />
    </>
  );
};

export default Home;
