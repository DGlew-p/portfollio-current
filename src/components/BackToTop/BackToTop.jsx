import "./BackToTop.css";
import * as React from "react";

import { useScrollTrigger, Box, Fab, Zoom } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollTop(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box onClick={handleClick} className={"BackToTop"} role='presentation'>
        {/* <Fab size='small' aria-label='scroll back to top'> */}
        <KeyboardArrowUpIcon />
        {/* </Fab> */}
      </Box>
    </Zoom>
  );
}
