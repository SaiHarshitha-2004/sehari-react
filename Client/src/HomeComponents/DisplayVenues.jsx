import React, { useState, useEffect } from "react";
import VenuesData from "../Data/VenuesData";
import {Animations} from "../Data/Animations";
import title from "../images/title.jpg"

const DisplayVenues = () => {
  const [venues, venuesIconData , isLoading] = VenuesData();

  return (
    <>
      <div>
        <div className="-z-20 flex-col flex justify-center items-center px-16 bg-white max-md:px-5">
          <div className="flex flex-row justify-center items-center">
            <div className="w-64">
              <img src={title} alt=""/>
            </div>
           <div className="text-center">
            <p className={`text-3xl title`}>Best Venues For Events</p>
              <p className={`text-xl text-center title mt-4`}>
                Explore event spaces at these outstanding venues this month
              </p>
           </div>
          </div>
          {!isLoading ? (
            <div className="flex mt-10w-full max-md:text-4xl">
              <div className="flex gap-5 lg:flex-row items-center justify-center sm:flex-col md:flex-row flex-wrap overflow-hidden relative px-1.5 pt-10 w-full min-h-[464px] max-w-full">
                {venues.map((venue) => (
                  <li
                    key={venue._id}
                    className="border shadow-xl rounded-l cursor-pointer overflow-hidden pb-3 h-[500px] m-2 lg:w-[30%] md:w-[40%] sm:w-[90%] flex flex-row flex-wrap"
                  >
                    <div className="w-full h-1/2 relative">
                      <img
                        src={venue.bgImage}
                        alt={venue.name}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute bottom-0 left-0 w-full bg-white/1 p-2 backdrop-blur-sm flex items-center">
                        <div className="flex justify-between items-center px-4 py-2">
                          <div className="flex items-center">
                            {/* Flag icon */}
                            <img
                              src={venue.image}
                              alt=""
                              className="w-6 h-6 mr-2"
                            />
                            {/* Address */}
                            <div className={`text-xl max-w-xs`}>
                              {venue.address} {venue.country}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 h-1/2 bg-white/100 flex justify-center flex-col items-center w-full">
                      <p
                        className={`text-xl title tracking-wide pb-2 text-center`}
                      >
                        {venue.name}
                        <br />
                      </p>
                      <span
                        className={`text-xl line-clamp-4 subtitle text-gray-700 font-extralight pt-2 tracking-wide text-center`}
                      >
                        {venue.description}
                      </span>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          ) : (
            <Animations />
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayVenues;
