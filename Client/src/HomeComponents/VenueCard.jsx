import React from 'react'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import NavBar from '../pages/NavBar';

const VenueCard = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const venueId = searchParams.get('venue');
  
    // Parse venueData JSON string to object
    const venue = JSON.parse(decodeURIComponent(venueId));
    console.log(venue)

  return (
    <div>
      <div className='mt-24 w-full h-full flex items-center justify-center'>
      <li
                    key={venue._id}
                    className="border h-full shadow-xl lg:w-1/2  rounded-l cursor-pointer overflow-hidden pb-3 flex flex-row flex-wrap"
                  >
                    <div className="w-full h-full relative">
                      <img
                        src={venue.bgImage}
                        alt={venue.name}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute bottom-0  left-0 w-full bg-white/1 p-2 backdrop-blur-sm flex items-center">
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

                    <div className="p-2 h-[250px] bg-white/100 flex justify-center flex-col gap-4 items-center w-full">
                      <p
                        className={`text-xl title tracking-wide pb-2 text-center`}
                      >
                        {venue.name}
                        <br />
                      </p>
                      <span
                        className={`text-xl subtitle text-gray-700 font-extralight pt-2 tracking-wide text-center`}
                      >
                        {venue.description}
                      </span>
                      <span>
                        <a
                          href={venue.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-500 title tracking wide mt-16 hover:text-blue-700"
                        >
                           link to website
                        </a>

                      </span>
                    </div>
                  </li>
      </div>

    </div>
  )
}

export default VenueCard