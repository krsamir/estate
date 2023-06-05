import React from "react";
import HeaderHorizontal from "./HeaderHorizontal";
import HeaderVertical from "./HeaderVertical";
import { useMediaQuery } from "@mui/material";

function Header() {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <React.Fragment>
      {matches ? <HeaderHorizontal /> : <HeaderVertical />}
    </React.Fragment>
  );
}

export default Header;
