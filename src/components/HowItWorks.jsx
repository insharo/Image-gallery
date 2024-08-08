import React from "react";
import { Box, Typography } from "@mui/material";

function HowItWorks() {
  return (
    <Box className="flex flex-col items-center justify-center py-16">
      <Typography
        variant="h4"
        className="text-3xl font-semibold mb-8 text-gray-800"
      >
        How it works
      </Typography>
      <Box className="flex flex-col lg:flex-row justify-around items-center w-full max-w-7xl space-y-8 md:space-y-0 px-4">
        <Box className="flex flex-row items-center text-center min-w-80">
          <img
            src="/howItWorksPost.svg"
            alt="Scan and Upload"
            className="w-16 h-16 mt-4"
          />
          <Box className="flex flex-col min-w-64">
            <Typography
              variant="h6"
              className="text-xl font-bold text-gray-800"
            >
              1. Scan and Upload:
            </Typography>
            <Typography variant="body1" className="text-gray-600 mt-2">
              Guests scan the QR code and upload photos through WhatsApp.
            </Typography>
          </Box>
        </Box>
        <Box className="flex flex-row items-center text-center min-w-80">
          <img
            src="/howItWorksQRCode.svg"
            alt="Capture Moments"
            className="w-16 h-16 mt-4"
          />
          <Box className="flex flex-col min-w-64">
            <Typography
              variant="h6"
              className="text-xl font-bold text-gray-800"
            >
              2. Capture Moments:
            </Typography>
            <Typography variant="body1" className="text-gray-600 mt-2">
              Guests upload photos directly from their devices. Watch your
              gallery update in real-time.
            </Typography>
          </Box>
        </Box>
        <Box className="flex flex-row items-center text-center">
          <img
            src="/howItWorksBag.svg"
            alt="Enjoy and Share"
            className="w-16 h-16 mt-4"
          />
          <Box className="flex flex-col min-w-72">
            <Typography
              variant="h6"
              className="text-xl font-bold text-gray-800"
            >
              3. Enjoy and Share:
            </Typography>
            <Typography variant="body1" className="text-gray-600 mt-2">
              View, download, and share your event’s best moments. Keep the
              memories alive forever.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HowItWorks;
