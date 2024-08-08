import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

function PromoSection() {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <Box className="w-full md:w-1/2 min-w-96 my-auto">
        <Image
          src={"./homeImage1.svg"}
          width={333}
          height={333}
          alt="Home"
          className="w-full h-auto object-cover"
        />
      </Box>
      <Box className="px-10 py-20 my-auto">
        <header className="flex flex-col justify-center">
          <p>Wedding Gallery</p>
          <h1 className="text-4xl font-bold text-gray-800">
            Capture every moment with event wedding app
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Instantly share and relive your event’s best moments in a live photo
            gallery.
          </p>
          <div className="mt-8">
            <button className="mr-4 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700">
              Learn more
            </button>
            <button className="px-6 py-3 text-pink-600 border border-pink-600 rounded-full hover:bg-pink-50">
              Try it for free
            </button>
          </div>
        </header>
      </Box>
    </div>
  );
}

export default PromoSection;
