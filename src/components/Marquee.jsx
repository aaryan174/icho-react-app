import React from "react";
import { motion } from "motion/react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2"
    className="w-full py-20 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl">
      <div className="text border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap text-white overflow-hidden">
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="bebas text-[20vw] leading-none font-semibold -mb-[3vw] pt-10 pr-20"
        >
          WE ARE ICHO&nbsp;&nbsp;WE ARE ICHO&nbsp;&nbsp;WE ARE ICHO
        </motion.h1>
{/* chatgpt better version */}
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="bebas text-[20vw] leading-none font-semibold -mb-[3vw] pt-10 pr-20"
        >
          WE ARE ICHO&nbsp;&nbsp;WE ARE ICHO&nbsp;&nbsp;WE ARE ICHO
        </motion.h1>

        {/* this piece of code has a bug */}
        {/* <motion.h1
             initial={{x: "0"}}
            animate={{ x: "-100% "}}
            transition={{repeat: Infinity, ease: "linear", duration: 10}}
            className='bebas text-[20vw] leading-none font-semibold -mb-[3vw] pt-10 pr-20'>WE ARE ICHO</motion.h1> */}
      </div>
    </div>
  );
};

export default Marquee;
