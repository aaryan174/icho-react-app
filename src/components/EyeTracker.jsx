import React, { useState, useEffect } from "react";

const EyeTracker = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      const angle = Math.atan2(deltaY, deltaX);

      
      const radius = 50; 
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      setPos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-screen eyes overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* First Eye */}
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-50 flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center text-white font-thin text-lg bebas">
            Play
              <div
                className="w-10 h-10 rounded-full bg-white absolute"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                }}
              ></div>
            </div>
          </div>
          {/* Second Eye */}
         <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-50 flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-black flex items-center justify-center text-white font-thin text-lg bebas">
            Play
              <div
                className="w-10 h-10 rounded-full bg-white absolute"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeTracker;
