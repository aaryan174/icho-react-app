import React from "react";
import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (idx) => {
    cards[idx].start({ y: "0%" });
  };

  const handleHoverEnd = (idx) => {
    cards[idx].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-6xl tracking-tight font-normal">
          Featured Products
        </h1>
      </div>

      {/* dots and line */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 mt-10 ml-[100px]">
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <h4 className="whitespace-nowrap">Salience Labs</h4>
        </div>
        <div className="flex items-center gap-3 mt-10 mr-[530px]">
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <h4 className="whitespace-nowrap">Medallia Experience</h4>
        </div>
      </div>

      {/* cards */}
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          {/* First card */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcantainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold whitespace-nowrap">
              {"Salience Labs".split("").map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt="pic"
              />
            </div>

            {/* buttons */}
            <div className="flex items-center gap-7">
              <motion.button
                whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                transition={{ duration: 0.4, ease:[0.45, 0, 0.55, 1]}}
                className="border border-black px-9 py-2 mt-5 rounded-full uppercase font-light"
              >
                Brand identity
              </motion.button>
                {/* second btn */}
              <motion.button 
              whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                transition={{ duration: 0.4, ease:[0.45, 0, 0.55, 1]}}

              className="border border-black p-1 text-black flex items-center font-light px-5 py-2 mt-5 rounded-full uppercase">
                Pitch black
              </motion.button>
            </div>
          </motion.div>

          {/* Second card */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcantainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl font-semibold whitespace-nowrap">
              {"Medallia Experience".split("").map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
                alt="pic"
              />
            </div>

            {/* buttons */}
            <div className="flex items-center gap-5">
              <motion.button 
              whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                transition={{ duration: 0.4, ease:[0.45, 0, 0.55, 1]}}
              className="border border-black p-2 text-black flex items-center font-light px-9 py-2 mt-5 rounded-full uppercase">
                Conference
              </motion.button>
              <motion.button 
              whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                transition={{ duration: 0.4, ease:[0.45, 0, 0.55, 1]}}
              className="border border-black p-2 text-black flex items-center font-light px-5 py-2 mt-5 rounded-full uppercase">
                Executive keynote
              </motion.button>
              <motion.button 
              whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                transition={{ duration: 0.4, ease:[0.45, 0, 0.55, 1]}}
              className="border border-black p-2 text-black flex items-center font-light px-5 py-2 mt-5 rounded-full uppercase">
                Product launch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
