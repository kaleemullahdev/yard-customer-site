import React from "react";
import { StyledAppBar, StyledIconButton, StyledButton } from "./elements";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { NavMenu } from "./NavMenu";
import PhoneIcon from "@material-ui/icons/Phone";
import Hidden from "@material-ui/core/Hidden";

export const Nav = () => {
  return (
    <Box>
      <StyledAppBar position="fixed" color="inherit">
        <Toolbar>
          <Hidden xsDown>
            <img
              src="https://yardly.ca/wp-content/uploads/2020/02/wordmark.svg"
              width="100"
              height="70"
            />
          </Hidden>
          <Hidden smUp>
            <img
              src="https://yardly.ca/wp-content/uploads/2020/02/mobile-yardly-logo-md.svg"
              width="40"
              height="40"
            />
          </Hidden>
          <Hidden xsDown>
            <Box
              style={{
                marginLeft: "60px",
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography style={{ color: "black" }}>Services</Typography>
              <NavMenu />
            </Box>
          </Hidden>
          <Typography
            variant="subtitle2"
            style={{ color: "black", marginLeft: "10px", flex: 1 }}
          >
            FOR PROPERTY MANAGERS
          </Typography>
          <Hidden xsDown>
            <StyledIconButton>
              <PhoneIcon style={{ fontSize: "15px", marginRight: "5px" }} />
              <Typography style={{ color: "black" }} style={{ flexGrow: 1 }}>
                8-1-38293892-8
              </Typography>
            </StyledIconButton>
          </Hidden>
          <StyledButton variant="contained">Get A Price</StyledButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};
