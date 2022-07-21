import * as React from "react";

import { useScrollTrigger, Fade } from "@mui/material";

export default function Hide(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 300,
  });

  return (
    <Fade appear={false} direction='down' in={!trigger}>
      {children}
    </Fade>
  );
}
