import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

function Testimonials() {
  return (
    <Box className="relative w-full h-screen max-w-7xl mx-auto">
      {/* Background Image */}
      <Image
        src="/testimonial.svg"
        alt="Wedding"
        layout="fill"
        className="object-cover"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 pt-12 bg-black bg-opacity-50">
        <div className="flex flex-row justify-between text-white">
          <div className="flex items-center mb-4">
            <span className="text-pink-500 text-4xl md:text-6xl lg:text-8xl">
              &quot;
            </span>
            <p className="ml-4 text-base md:text-lg lg:text-xl">
              Gallery Wedding made our wedding <br />
              unforgettable. The live photo wall was a hit!
            </p>
          </div>
          <div className="flex flex-col md:mt-11 md:mr-24">
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Arzu & Kaan
            </p>
            <p className="text-xs md:text-sm lg:text-base">Bride & Groom</p>
          </div>
        </div>
        {/* Navigation Controls */}
        <div className="flex justify-between items-center w-32">
          <button className="text-white text-xl md:text-2xl lg:text-3xl">
            &lt;
          </button>
          <p className="text-white text-sm md:text-base lg:text-lg">
            <span className="font-bold">01</span> / 03
          </p>
          <button className="text-white text-xl md:text-2xl lg:text-3xl">
            &gt;
          </button>
        </div>
      </div>
      <div className="absolute bottom-60 right-24 md:bottom-44 md:right-32 lg:bottom-40 lg:right-44">
        <Image
          src="/quotes.svg"
          alt="Quotes"
          width={100}
          height={100}
          className="w-20 h-20 md:w-36 md:h-36 lg:w-48 lg:h-48"
        />
      </div>
    </Box>
  );
}

export default Testimonials;
