import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

function GetStarted() {
  return (
    <div className="relative flex items-center justify-center p-8">
      <Image
        src={"./landingLeftFlower.svg"}
        width={200}
        height={200}
        alt="Home"
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
      />
      <Box className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">Get Started</h2>
        <p className="text-xl text-olive mb-8 text-center">
          Add your photos from WhatsApp to start a
          <br />
          Marriage!
        </p>
        <button className="bg-gradient-to-r from-pink-500 to-pink-300 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out mb-8">
          Try it for free
        </button>
        <div className="flex space-x-4">
          <TwitterShareButton url={"url"}>
            <TwitterIcon
              size={32}
              round={true}
              iconFillColor="#e91e63"
              bgStyle={{ fill: "none" }}
            />
          </TwitterShareButton>
          <FacebookShareButton url={"url"}>
            <FacebookIcon
              size={32}
              round={true}
              iconFillColor="#e91e63"
              bgStyle={{ fill: "none" }}
            />
          </FacebookShareButton>
          <EmailShareButton url={"url"}>
            <EmailIcon
              size={32}
              round={true}
              iconFillColor="#e91e63"
              bgStyle={{ fill: "none" }}
            />
          </EmailShareButton>
        </div>
      </Box>
    </div>
  );
}

export default GetStarted;
