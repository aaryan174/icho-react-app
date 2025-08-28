import React from 'react'

const Navbar = () => {
  return (
    <div className=' fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between items-center  bg-white/10 backdrop-blur-sm rounded-2xl p-4'> 
     <div className='logo'>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40">
  <text x="0" y="28" font-size="30" font-family="Poppins, sans-serif" fill="currentColor">icho</text>
</svg>


     </div>

     <div className='links flex gap-10'>
        {["services", "Our Network", "About Us", "Insights","Contacts"].map((item, index) => (
            <a key={index} className={`text-lg capitalize font-medium${index === 4 && "ml-32"}`}>{item}</a>
        ))}
     </div>
    </div>
  )
}

export default Navbar
