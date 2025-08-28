import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import EyeTracker from './components/EyeTracker'
import Featured from './components/Featured'
import FeaturedTwo from './components/FeaturedTwo'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=' text-black'>
      <Navbar /> 
      <LandingPage />
      <Marquee />
      <About />
      <EyeTracker />
      <Featured />
      <FeaturedTwo />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
