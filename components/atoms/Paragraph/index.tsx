import { Box, BoxProps } from "@mui/material";
import React from "react";

interface Props extends BoxProps {
  text: String;
}

const Paragraph = (props: Props) => {
  return (
    <React.Fragment>
      <Box>{props.text}</Box>
    </React.Fragment>
  );
};

export default Paragraph;
