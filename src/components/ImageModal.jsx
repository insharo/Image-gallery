import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ImageModal = ({ image, onClose }) => {
  //   const [zoom, setZoom] = useState(1);

  //   const handleZoomIn = () => setZoom(zoom + 0.1);
  //   const handleZoomOut = () => setZoom(zoom - 0.1);

  return (
    <Dialog open={true} onClose={onClose}>
      <IconButton onClick={onClose} className="w-10 absolute right-0 z-50">
        <CloseIcon />
      </IconButton>
      <DialogContent className="pt-6 px-12 relative">
        <div className="absolute left-0 z-0">
          <img
            src="/enlargeFlower.svg"
            className="w-full h-full object-cover"
            alt="Background Flower"
          />
        </div>
        <div className="flex justify-center items-center">
          <IconButton
            onClick={() => {}}
            className="transition-transform transform w-92 rounded-none"
          >
            <img src="/downloadIcon.svg" alt="Download" />
          </IconButton>
          <IconButton
            onClick={() => {}}
            className="transition-transform transform w-92 rounded-none"
          >
            <img src="/shareIcon.svg" alt="Share" />
          </IconButton>
        </div>
        <div className="relative w-full h-full">
          <Image
            src={image.URL}
            alt="Enlarged"
            layout="responsive"
            width={100}
            height={100}
            style={{
              borderRadius: "10px",
              transition: "transform 0.2s",
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
