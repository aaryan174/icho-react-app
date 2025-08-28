import { motion } from 'motion/react'
import React from 'react'

const Cards = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"
    className='w-full h-screen bg-zinc-100 flex gap-5 items-center px-20'>
      <div className='cardcontainer h-[59vh] w-1/2'> 
      <div className='card relative w-full rounded-xl h-full bg-[#004D43] flex justify-center items-center'>
        <img className='w-37' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="sdf" />
        <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 border-[#ffffff] text-[#CDEA68]'>&copy;2019-2025</button>
      </div>
      </div>

       <div className='cardcontainer flex gap-5 h-[59vh] w-1/2'>
      <div className='card w-full relative  flex items-center justify-center rounded-xl h-full bg-[#212121]'>
        <img className='w-37' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="sdf" /> 
        <motion.button 
        whileHover={{
                 backgroundColor: "#fff",
                  color: "#000",
                }}
                transition={{ duration: 0.4, ease:[0.45, 0, 0.55, 1]}}
        className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 border-[#fefefe] text-[#f6f6f6]'>
          RATING 5.0 ON CLUTCH
          </motion.button>
      </div>
      <div className='card w-full relative flex items-center justify-center rounded-xl h-full bg-[#212121]'>
       <img className='w-37' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="sdf" />
        <motion.button 
        whileHover={{
                  backgroundColor: "#fff",
                  color: "#000",
                }}
                transition={{ duration: 0.4, ease:[0.45, 0, 0.55, 1]}}
        className='absolute px-5 py-1 rounded-full border-2 left-4 bottom-10 border-[#f2f2f2] text-[#ffffff] whitespace-nowrap'>
          BUSINESS BOOTCAMP ALLUMNI
          </motion.button>
      </div>
      </div>
    </div>
  )
}

export default Cards
