import { a } from 'motion/react-client'
import React from 'react'

const Footer = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"
     className=' w-full h-screen bg-zinc-100 p-20 flex gap-5 '>
      <div className='w-1/2 h-full flex flex-col justify-between '>
      <div className='heading'>
      <h1 className='text-[8vw] font-semibold bebas leading-none -mb-4 text-[#212121]'>EYE-</h1>
      <h1 className='text-[8vw] font-semibold bebas leading-none -mb-4 text-[#212121]'>OPENING</h1>

      </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="60" viewBox="0 0 300 60">
  <text x="37%" y="50%" font-size="28" font-family="cursive" fill="currentColor" text-anchor="middle" dominant-baseline="middle">
    Coded By Aryan
  </text>
</svg>

      </div>
      <div className='w-1/2 '>
            <h1 className='text-[8vw] font-semibold bebas leading-none -mb-4 text-[#212121]'>PRESENTATIONS</h1>
        <div className='dets mt-10 '>
            <p className='mt-15 mb-8'>S :</p>
            {["Instagram", "Github", "Facebook", "LinkedIn"].map((item, idx)=>{
                return <a className='block text-xl' href="">{item}</a>
            })}
        </div>


        <div className='dets mt-10 '>
            <p className='mt-15 mb-8'>L :</p>
            {["202-1965 W 4th Ave", "Vancouver, Canada","", "30 Chukarina St", "Lviv, Ukraine"].map((item, idx)=>{
                return <a className='block text-xl' href="">{item}</a>
            })}
        </div>

      </div>
    </div>
  )
}

export default Footer
