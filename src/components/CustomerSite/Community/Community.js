import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react"
import { CommunityCard } from "../Card";

export const Community = () => {
  const communityCardSyle = {
    boxShadow: "0 2px 18px 0 rgb(0 0 0 / 20%)",
    borderRadius: "5px",
  };
  return (
    <Box
      pt={4}
      alignItems="center"
      display="flex"
      flexDirection="column"
      mb={4}
    >
      <Typography align="center" variant="h4">
        Proudly Serving Canadian Communities
      </Typography>
      <Box mt={4} width={1}>
        <Container>
          <Grid
            container
            spacing={3}
            justify="center"
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item md={12} sm={12} xs={12} style={{ width: "100%" }}>
              <CommunityCard
                title="Alberta"
                areaNames="Airdrie | Calgary | Edmonton | Sherwood Park | Spruce Grove | St. Albert | Stony Plain"
                cardStyle={communityCardSyle}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} style={{ width: "100%" }}>
              <CommunityCard
                title="British Columbia"
                areaNames="Surrey"
                cardStyle={communityCardSyle}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} style={{ width: "100%" }}>
              <CommunityCard
                title="Ontario"
                areaNames="Ajax | Brampton | Burlington | East York | Etobicoke | Hamilton | Markham | Milton | Mississauga | North York | Oakville | Oshawa | Pickering | Richmond Hill | Scarborough | Toronto | Vaughan | Whitby | York"
                cardStyle={communityCardSyle}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
