import React from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import {
  EmailShareButton,
  WhatsappShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

const style = {
  p: 2,
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
};

function SharePopover({ anchorEl, onClose, url }) {
  const open = Boolean(anchorEl);
  const id = open ? "share-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      className="rounded-md"
    >
      <Box sx={style} className="rounded-md w-fit">
        {/* <h2 id="share-popover-title">Share this image</h2> */}
        <div className="flex space-x-2 rounded-md">
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton url={url}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <LinkedinShareButton url={url}>
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <EmailShareButton url={url}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>
      </Box>
    </Popover>
  );
}

export default SharePopover;
