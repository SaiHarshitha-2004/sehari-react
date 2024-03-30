import React from 'react'
import { FadeLoader } from 'react-spinners';

const Animations = () => {
  return (
   <div>
     <div className='w-screen h-screen backdrop-blur-sm flex justify-center items-center bg-blur'>
        <FadeLoader />
    </div>
   </div>
  )
}

export default Animations