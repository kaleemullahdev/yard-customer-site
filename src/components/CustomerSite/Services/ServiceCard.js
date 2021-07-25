import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import React from "react";
import { SyledCardWrapper } from "./elements";

export const ServiceCard = ({ title, imgSrc }) => {
  return (
    <SyledCardWrapper
      display="flex"
      alignItems="center"
      width={{ xs: "300px", md: "320px", lg: "400px" }}
      minHeight={{ md: "136px" }}
    >
      <Box bgcolor="#f7f8fb" display="flex" minHeight={{ md: "136px" }}>
        <img src={imgSrc} width="100%" height="100%" />
      </Box>
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="subtitle1">{title}</Typography>
        <Box>
          <Typography variant="subtitle"> Learn More </Typography>
          <span className="learn-more"> {">"} </span>
        </Box>
      </Box>
    </SyledCardWrapper>
  );
};
