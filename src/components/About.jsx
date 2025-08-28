import React from 'react'

const About = () => {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl font-black montreal'>
      <h1 className=' text-[55px] font-thin leading-[55px]'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>
      <div className=' flex gap-5 w-full border-t-[1px] mt-20 pt-10 border-[#aab38b]'>
            <div className='w-1/2'>
            <h1 className=' text-[52px] leading-[52px] montreal font-light '>How we can help:</h1>
            <button className='montreal bg-[#212121] text-white flex gap-7 items-center font-bold px-10 py-6 mt-5 rounded-full'>
                READ MORE 
                 <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-[#475417] rounded-lg'>
                <img className='w-full  h-[70vh] bg-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>
      </div>
    </div>
  )
}

export default About
