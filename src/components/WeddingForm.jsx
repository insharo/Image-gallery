import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

function WeddingForm() {
  return (
    <div className="flex flex-col md:flex-row gap-20">
      <Box className="w-full md:w-1/2 min-w-96 my-auto">
        <Image
          src={"./homeImage2.svg"}
          width={333}
          height={333}
          alt="Home"
          className="w-full h-auto object-cover"
        />
      </Box>
      <section className="flex flex-col items-center py-20 px-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Looks great! Now add your names
        </h2>
        <form className="mt-8 w-full max-w-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              type="text"
              id="name"
              name="name"
              placeholder="Mohammed Ahmed"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="partnerName"
            >
              Partner’s name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
              type="text"
              id="partnerName"
              name="partnerName"
            />
          </div>
          <button className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
            Try it for free
          </button>
        </form>
      </section>
    </div>
  );
}

export default WeddingForm;
