import React, { useState, useEffect } from 'react';
import { titleSize , subtitleSize } from '../pages/Styles';

const BestVenues = () => {

  const [venues, setVenues] = useState([]);


  useEffect(() => {
    fetch( "http://localhost:8000/database/bestvenues" )
      .then(response => response.json()) 
      .then(data => {
        setVenues(data)
      })
      .catch(err => {
        console.error("Error in displaying data" , err);
      })
  }, []);


  return (
    <div className="-z-1 flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-2 w-full">
          <div className="flex w-full max-md:ml-0 max-md:w-full">
            <div className="flex mt-10 max-md:max-w-full max-md:text-4xl">
              <div className="flex  lg:flex-row border border-red-500 items-center justify-center sm:flex-col md:flex-row flex-wrap overflow-hidden relative  px-1.5 pt-10 w-full min-h-[464px] max-w-full">

                {venues.map(venue => (
                  <li key={venue._id} className=' border border-blue-500 m-2 lg:w-[30%] md:w-[40%] sm:w-[90%] flex flex-col flex-wrap'>
                    <img
                      src={venue.bgImage} alt={venue.name}
                    />
                
                    <div className="flex relative gap-5 items-start px-11 py-8 mt-64 backdrop-blur-[2px] bg-zinc-300 bg-opacity-60 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:text-4xl">
                      <img
                        src={venue.image} alt=""
                      />
                      <div className="flex-auto mt-3 max-md:max-w-full max-md:text-4xl">
                        {venue.address} {venue.country}
                      </div>
                    </div>
                  <div className="mx-5 mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
                    <p className={`${titleSize} text-center text-blue-300`}>
                    {venue.name}
                    <br />
                    </p>
                    <span className={`${subtitleSize}`}>
                    {venue.description}
                      </span>
                  </div>
                  </li>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>

  )
}

export default BestVenues;

              {/* {venues.map(venue => (
        <li key={venue._id}>
          <h2>{venue.name}</h2>
          <img src={venue.bgImage} alt={venue.name} />
          <p>{venue.description}</p>
          <p>Address: {venue.address}, {venue.country}</p>
          <img src={venue.image} alt={venue.name} />

          <a href={venue.website}>Website</a>
        </li>
      ))} */}
