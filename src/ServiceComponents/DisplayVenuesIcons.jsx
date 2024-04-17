import React from 'react';
import VenuesData from "../Data/VenuesData"
import { titleSize , subtitleSize , minititleSize } from '../pages/Styles';
import Animations from '../Data/Animations';

const DisplayVenuesIcons = () => {
  const [ venues, venuesIconData, isLoading ] = VenuesData() 

  const encodedSvgs = venuesIconData.map(venue =>  ( {
    name : venue.name , 
    img : btoa(venue.bgImage)
  } ) )
  
  return (
   <div>
     <div className='flex flex-col items-center justify-center'>
       <p className={`${titleSize} mt-10 mb-5`}>Venues By Event Type</p>
       <p className={`${subtitleSize} text-center mt-5`}>Venues recognised for their outstanding performance in hosting particular event types</p>
      </div>
          {!isLoading ? (
      <div className="flex justify-center bg-gray-50 border w-full items-center flex-row mt-16 flex-wrap">
      {encodedSvgs.map((encodedSvg, index) => (
              <div className='w-fit p-10'>  
                 <div className='w-32'>
                 <img
                 key={index}
                 src={`data:image/svg+xml;base64,${encodedSvg.img}`}
                 alt="Venue background image"
               />
                 </div>
                <h3 className={`${minititleSize} text-center pt-3`}>{encodedSvg.name}</h3>
              </div>
           ))}
           </div>
          ) : <Animations />}
      </div>
  )
}

export default DisplayVenuesIcons;
