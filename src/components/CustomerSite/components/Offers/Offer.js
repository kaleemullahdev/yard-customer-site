import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { StyledTypography } from "./elements";

const renderRowDirected = (headerText, headerImage, detail) => {
  return (
    <Grid container justify="space-between">
      <Grid item lg={3} md={3} sm={3} xs={12}>
        <Box display="flex" justifyContent={{ xs: "center" }}>
          <img
            src={headerImage}
            alt=""
            title=""
            data-lazy-src={headerImage}
            height="90px"
          />
        </Box>
      </Grid>
      <Grid item lg={7} md={9} sm={9} xs={12}>
        <Box>
          <StyledTypography variant="h6">{headerText}</StyledTypography>
          <StyledTypography>{detail}</StyledTypography>
        </Box>
      </Grid>
    </Grid>
  );
};
const renderColumnDirected = (headerText, headerImage, detail) => {
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      direction="column"
    >
      <Grid item lg={3} md={3} sm={3} xs={12}>
        <Box display="flex" justifyContent={{ xs: "center" }}>
          <img
            src={headerImage}
            alt=""
            title=""
            data-lazy-src={headerImage}
            height="90px"
          />
        </Box>
      </Grid>
      <Grid item lg={7} md={9} sm={9} xs={12}>
        <Box>
          <StyledTypography variant="h6" align="center">
            {headerText}
          </StyledTypography>
          <StyledTypography align="center">{detail}</StyledTypography>
        </Box>
      </Grid>
    </Grid>
  );
};
export const Offer = ({ headerImage, headerText, detail, columnEnabled }) => {
  return (
    <Grid item lg={4} sm={12} xs={12}>
      <Container>
        {columnEnabled
          ? renderColumnDirected(headerText, headerImage, detail)
          : renderRowDirected(headerText, headerImage, detail)}
      </Container>
    </Grid>
  );
};
