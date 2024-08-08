import React from "react";
import { Box, Typography, Button } from "@mui/material";

function WhyChooseWeddingApp() {
  return (
    <Box className="flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16">
      <Typography
        variant="h4"
        className="text-3xl font-semibold mb-8 text-gray-800"
      >
        Why Choose wedding app?
      </Typography>
      <Box className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl space-y-8 lg:space-y-0 xl:gap-x-20">
        <Box>
          <img
            src="/whyChooseUsImg.svg"
            alt="QR Code"
            width={385}
            height={385}
          />
        </Box>
        <Box className="flex flex-col lg:w-1/2  gap-y-4 px-8">
          <Box className="flex flex-row items-start gap-3">
            <img src="/lotus.svg" alt="lotus" width={"24px"} height={"24px"} />
            <Typography variant="body1" className="text-gray-600">
              <strong className="text-lg text-gray-800">
                Real-Time Photo Sharing:
              </strong>
              <br /> Upload and share photos instantly. Watch your event gallery
              come alive in real-time as guests add their pictures.
            </Typography>
          </Box>
          <Box className="flex flex-row items-start gap-3">
            <img src="/lotus.svg" alt="lotus" width={"24px"} height={"24px"} />
            <Typography variant="body1" className="text-gray-600">
              <strong className="text-lg text-gray-800">
                Seamless Invitations:
              </strong>
              <br /> Easily invite guests via email, WhatsApp, or a shareable
              link. No downloads or registrations needed.
            </Typography>
          </Box>
          <Box className="flex flex-row items-start gap-3">
            <img src="/lotus.svg" alt="lotus" width={"24px"} height={"24px"} />
            <Typography variant="body1" className="text-gray-600">
              <strong className="text-lg text-gray-800">
                Interactive Galleries:
              </strong>
              <br /> View photos in a beautiful grid or slideshow format. Like,
              comment, and engage with every moment.
            </Typography>
          </Box>
          <Box className="flex flex-row items-start gap-3">
            <img src="/lotus.svg" alt="lotus" width={"24px"} height={"24px"} />
            <Typography variant="body1" className="text-gray-600">
              <strong className="text-lg text-gray-800">Easy Downloads:</strong>
              <br /> Download individual photos or the entire gallery with a
              single click. Keep your memories in high quality.
            </Typography>
          </Box>
          <Box className="flex flex-row items-start gap-3">
            <img src="/lotus.svg" alt="lotus" width={"24px"} height={"24px"} />
            <Typography variant="body1" className="text-gray-600">
              <strong className="text-lg text-gray-800">Admin Controls:</strong>
              <br /> Manage your event, moderate photos, and ensure a safe and
              enjoyable experience for everyone.
            </Typography>
          </Box>
          <Box className="flex flex-row items-start gap-3">
            <img src="/lotus.svg" alt="lotus" width={"24px"} height={"24px"} />
            <Typography variant="body1" className="text-gray-600">
              <strong className="text-lg text-gray-800">
                WhatsApp Integration:
              </strong>
              <br /> Share photos directly to the gallery via WhatsApp. Simple,
              fast, and convenient.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button
        variant="outlined"
        className="mt-8 text-pink-600 border-pink-600 hover:bg-pink-50"
      >
        Learn more
      </Button>
    </Box>
  );
}

export default WhyChooseWeddingApp;
