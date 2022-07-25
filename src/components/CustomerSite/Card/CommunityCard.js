import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export const CommunityCard = ({ title, areaNames, cardStyle }) => {
  return (
    <Card
      style={{
        height: "100%",
        maxWidth: "100%",
        minWidth: "100% !important",
        ...cardStyle,
      }}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={4}
        >
          <img
            src="https://shezha20.dreamhosters.com/wp-content/uploads/2020/01/Icon_12.svg"
            width="40"
            height="40"
          />
          <Typography variant="subtitle1">{title}</Typography>
        </Box>
        <Box mt={2} mb={4} justifyContent="center">
          <Typography align="center" variant="subtitle2">
            {areaNames}
          </Typography>
        </Box>
      </Container>
    </Card>
  );
};
