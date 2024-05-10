import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import bookEvent from "../images/bookEvent.png";
  import connect from "../images/connect.png";
  import location from "../images/location.png";
  import { titleSize, subtitleSize , minititleSize } from "../pages/Styles";

const SehariWorks = () => {
  return (
    <div className="flex flex-col pt-10 mt-10 pr-5 pb-10 pl-5 max-w-full">
        <div className='pb-10 flex flex-col items-center'>
          <div
            className={`text-3xl title tracking-wider whitespace-nowrap`}
          >
            How SEHARI Works
          </div>
          <div
            className={`text-xl tracking-wide text-center title mt-7 `}
          >
            We helps you find your
            perfect venue by searching for what matters most to you.
          </div>
        </div>

        <div className="-z-10 title sm:text-2xl md:text-3xl lg:text-lg">
          <VerticalTimeline>
            <VerticalTimelineElement
              date="step 01" dateClassName={``}
              icon={<img src={location} alt="Location" className='p-1 bg-white'/>}
            >
              <h3 className={`text-xl text-center title mt-4 tracking-wide vertical-timeline-element-title`}>
                search you event location
                all over the world
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="step 02"
              icon={<img src={connect} alt="connect" className='p-1 bg-white' />}
            >
              <h3 className={`text-xl text-center title mt-4 tracking-wide vertical-timeline-element-title`}>
                plan your event
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="step 03"
              icon={<img src={bookEvent} alt="bookEvent" className='p-1 bg-white' />}
            >
              <h3 className={`text-xl text-center title mt-4 tracking-wide  vertical-timeline-element-title`}>
              connect through our agency from social media
              </h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      
  )
}

export default SehariWorks
