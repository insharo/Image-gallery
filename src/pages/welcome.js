import React from "react";
import { Container, Typography } from "@mui/material";

function Welcome() {
  return (
    <Container className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <Typography variant="h2" className="text-blue-500">
        Welcome
      </Typography>
    </Container>
  );
}

export default Welcome;
