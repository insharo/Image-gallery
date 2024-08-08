import { Box } from "@mui/material";
import React from "react";

function CaptureMoment() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Your Destination for All Things Wedding
      </h2>
      <Box className="flex flex-col lg:flex-row gap-20 lg:gap-0 justify-between">
        <div className="m-auto min-w-60 px-5">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Ready to Capture Every Moment?
          </h3>
          <p className="text-gray-600 mb-4">
            Create your event and start sharing memories today. It's free and
            easy!
          </p>
          <div className="flex gap-x-4">
            <a href="#contact" className="text-pink-600 underline">
              Contact us
            </a>
            <button className="bg-gradient-to-r from-pink-500 to-pink-300 text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              Try it for free
            </button>
          </div>
        </div>
        <img
          src="/qrcode.svg"
          alt="QR Code"
          width={620}
          height={428}
          className="m-auto"
        />
      </Box>
    </div>
  );
}

export default CaptureMoment;
