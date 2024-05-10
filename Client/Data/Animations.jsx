import React from 'react'
import { FadeLoader } from 'react-spinners';

export const Animations = () => {
  return (
   <div>
     <div className='flex lg:flex-row md:flex-col sm:flex-col gap-5 justify-center'>
        {/* <FadeLoader /> */}
        <div className="flex flex-col gap-1 w-64">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-16 w-full"></div>
        </div>
        <div className="flex flex-col gap-1 w-64">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-16 w-full"></div>
        </div>
        <div className="flex flex-col gap-1 w-64">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-16 w-full"></div>
        </div>
    </div>
   </div>
  )
}

export const Loader = () => {
  return (
    <div className='flex flex-row gap-5 items-center mt-16 justify-center'>
      <FadeLoader />
    </div>
  )
}
export  const fadeIn = (direction , delay) => {
  return {
    hidden :  {
      x : direction === 'left' ? 80 : direction === 'right' ? -70 : 0 ,
      y : direction === 'up' ? 80 : direction === 'down' ? -80 : 0 ,
    } ,
    show : {
      y : 0,
      x : 0 ,
      opacity : 1 ,
      transition : {
        type : 'tween' , 
        duration : 0.5,
        delay : delay , 
        ease : [0.25 , 0.25 , 0.25 , 0.75] ,
      }
    }
  }
}