import React from "react";
import { Button } from "@mui/material";

type Props = {
  label: String;
  handlerClick: () => void;
};

const AppButton = (props: Props) => {
  return (
    <React.Fragment>
      <Button variant="contained" onClick={props.handlerClick}>
        {props.label}
      </Button>
    </React.Fragment>
  );
};

export default AppButton;
