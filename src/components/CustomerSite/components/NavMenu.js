import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { StyledIconButton, StyledMenuItem } from "./elements";
import { Link } from "gatsby";
export const NavMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <StyledIconButton
        aria-controls="simple-menu"
        style={{ border: "0px" }}
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        onMouseOver={(e) => setAnchorEl(e.currentTarget)}
      >
        <ArrowDropDownIcon />
      </StyledIconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        style={{ marginTop: "30px", width: "500px" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>
          <Link to="/services/year-round">Year Round Maintenance</Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <Link to="/services/lawn-moving">Lawn Moving</Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <Link to="/services/weed-control">Weed Control</Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <Link to="/services/spring-clean-up">Spring Cleanup</Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <Link to="/services/fall-clean-up">Fall Cleanup</Link>
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <Link to="/services/snow-removal">Snow Removal</Link>
        </StyledMenuItem>
      </Menu>
    </>
  );
};
