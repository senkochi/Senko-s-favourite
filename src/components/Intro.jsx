import React from 'react'
import IntroPic from '../assets/intro-pic.jpg'

const Intro = () => {
  return (
    <div>
      <div className='flex flex-col pt-[5%]'>
        <h1 className='text-center font-content text-2xl md:text-3xl'>
          Who is Senko?
        </h1>
        <div className='flex items-center'>
          <img src={IntroPic} alt="Senko-pic" 
          className='w-30 md:w-40 rounded-full m-10' />
          <p className='font-content'>
          Senko-san is an 800-year-old fox spirit who brings peace, warmth, and a bit of fluff into the lives of overworked humans with her gentle care and timeless charm.
          </p>
        </div>
      </div>
      <hr className='divider' />
      <div>
        <div>
          <h1 className='text-center font-content text-2xl md:text-3xl'>
            Why you need Senko at home?
          </h1>
        </div>
      </div>
    </div>
    
  )
}

export default Intro