import React, { useState } from "react";
import Image from "next/image";
import { Snackbar, Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { saveAs } from "file-saver";
import SharePopover from "./SharePopover";
import DownloadIcon from "../../public/icons/downloadIcon.svg";
import ShareIcon from "../../public/icons/shareIcon.svg";
import DeleteIcon from "../../public/icons/deleteIcon.svg";
// import deleteImageByID from "@/pages/api/deleteImageByID";
import deleteImageByID from "../pages/api/deleteImageByID";
import MuiAlert from "@mui/material/Alert";

const ImageModal = ({ image, onClose }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const downloadImage = (url, filename) => {
    saveAs(url, filename);
  };
  const deleteImage = () => {
    deleteImageByID([image.RECORD_ID])
      .then(() => {
        setOpenSnackbar(true);
      })
      .catch((error) => console.error("Delete failed:", error));
  };

  const handleShareClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSharePopover = () => {
    setAnchorEl(null);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

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
            onClick={() => downloadImage(image.URL, "downloadedImage.jpg")}
            className="transition-transform transform w-fit rounded-2xl"
          >
            <img src="/icons/downloadIcon.svg" alt="Download" />
          </IconButton>
          <IconButton
            onClick={handleShareClick}
            className="transition-transform transform w-fit rounded-2xl"
          >
            <img src="/icons/shareIcon.svg" alt="Share" />
          </IconButton>
          <IconButton
            onClick={() => deleteImage()}
            className="transition-transform transform rounded-2xl w-10"
          >
            <DeleteIcon width={24} height={24} />
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
        <SharePopover
          anchorEl={anchorEl}
          onClose={handleCloseSharePopover}
          url={image.URL}
        />
      </DialogContent>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          Image deleted successfully.
        </MuiAlert>
      </Snackbar>
    </Dialog>
  );
};

export default ImageModal;
