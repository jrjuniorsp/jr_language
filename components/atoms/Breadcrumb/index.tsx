import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

type Props = {
  page: String;
};

const Breadcrumb = (props: Props) => {
  return (
    <React.Fragment>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">{props.page}</Typography>
      </Breadcrumbs>
    </React.Fragment>
  );
};

export default Breadcrumb;
