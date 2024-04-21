import React from 'react'
import { FadeLoader } from 'react-spinners';

export const Animations = () => {
  return (
   <div>
     <div className='w-screen h-screen backdrop-blur-sm flex justify-center items-center bg-blur'>
        <FadeLoader />
    </div>
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