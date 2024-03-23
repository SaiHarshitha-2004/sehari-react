import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import sehariWorks from "../images/sehariWorks.jpg";
  import bookEvent from "../images/bookEvent.png";
  import connect from "../images/connect.png";
  import location from "../images/location.png";
  import { titleSize, subtitleSize } from "../pages/Styles";

const SehariWorks = () => {
  return (
    <div className="flex flex-col pt-10 pr-5 pb-10 pl-5 max-w-full">
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
      
  )
}

export default SehariWorks
