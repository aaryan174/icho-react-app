import { motion } from "motion/react";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"
    className="w-full bg-white h-screen pt-1">
      <div className="textstructure mt-50 px-20">
        {["We Created", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit items-center flex overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[6.5vw] h-[7vw] relative -top-1.5 mr-[1vw] rounded"
                  >
                    <img
                      className="bg-cover  w-[7vw] h-[7vw] rounded "
                      src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjhhZGMyNjA1OTdjODE5MTg2YzRkODRiM2M2YjFiMmE6ZmlsZV8wMDAwMDAwMGY4MmM2MWY5YTVlMTgyMzc3MjZjZjBjNSIsInRzIjoiNDg3ODM4IiwicCI6InB5aSIsInNpZyI6Ijg0ZTRmMjRhNzcxNGEyZGVhNGQ2NTMwNjhkN2YxNjNjYWM2Njk1MjFmYTAyMmQwNTUzNjJlYmRiMmZhZGU4NTkiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="uppercase text-[10vw] leading-[8vw] tracking-tighter bebas font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] mt-10 border-zinc-700 flex justify-between items-center py-5 px-20 ">
        {[
          "Presenting the storytelling agency",
          "For innovation teams and global brands",
        ].map((item, index) => (
          <p className="text-lg font-medium tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex justify-center items-center gap-4">
          <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full font-medium text-sm ">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center ">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
