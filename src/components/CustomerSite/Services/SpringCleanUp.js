import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { StyledTypography, SyledCardWrapper } from "./elements";
import { HeroBanner } from "../HeroBanner";
import { CommunityCard } from "../Card";
import Typography from "@material-ui/core/Typography";
import { YardlyBar, GetPriceStyledButton, ChoiceOffers } from "../components";
import { Testimonials } from "../Testimonials";
import { ServiceCard } from "./ServiceCard";
export const SpringCleanUp = () => {
  return (
    <Box>
      <HeroBanner
        headerText="Spring clean up services and pricing"
        description="Order services for all your lawn care needs within minutes"
        bgImageUrl="https://www.yardly.ca/wp-content/uploads/2020/02/Become_Header.svg"
      />

      <Box
        style={{
          backgroundColor: "#20232c",
        }}
      >
        <Container>
          <YardlyBar />
          <Box pt={2} pb={4}>
            <StyledTypography variant="h4">
              Keep your lawn green and tidy in just a few clicks
            </StyledTypography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box mt={8}>
          <StyledTypography color="initial" variant="h6">
            The easiest and most reliable way to take care of your yard!
          </StyledTypography>
          <StyledTypography color="initial" variant="subtitle1">
            We know Canadian winters can be hard on your lawn – cleaning it up
            takes a lot of effort and time! Snow, ice, and general wear and tear
            from winter can do plenty of damage to your grass. A spring clean up
            is a comprehensive lawn care solution that will get your grass
            growing green, healthy, and thick this summer season. Whether you
            want a comprehensive one-time visit that sets your lawn up for a
            great summer or a full season plan that takes care of all your lawn
            care needs and maintains your lawn throughout the season, Yardly has
            the solution for you.
          </StyledTypography>
        </Box>
        <Box mt={2}>
          <StyledTypography color="initial" variant="subtitle1">
            Spring Clean Up services are available from Yardly during April and
            May every year in Calgary, Edmonton, Toronto, and surrounding areas.
          </StyledTypography>
        </Box>
        <Box mt={8} mb={4}>
          <Box mb={8}>
            <Typography variant="h4">Why choose Yardly</Typography>
          </Box>
          <ChoiceOffers />
        </Box>
        <Box mt={8}>
          <CommunityCard
            title="Available Locations"
            areaNames="Calgary | Airdrie | Edmonton | Sherwood Park | Spruce Grove | St. Albert | Stony Plain | Ajax | Brampton | Burlington | Hamilton | Markham | Milton | Mississauga | Oakville | Oshawa | Pickering | Richmond Hill | Toronto | Vaughan | Whitby"
            cardStyle={{ backgroundColor: "#fafafa", boxShadow: "none" }}
          />
        </Box>
        <Box mt={4}>
          <YardlyBar />
          <Box>
            <Grid container spacing={4}>
              <Grid item md={5} xs={12}>
                <Typography variant="subtitle1">
                  SEE WHAT OUR CLIENTS SAY
                </Typography>
                <Typography variant="h5">Let us help you.</Typography>
                <Box mt={4}>
                  <Testimonials />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <img
                  src="https://www.yardly.ca/wp-content/uploads/2020/02/lawn-mowing-services-min.jpeg"
                  width="100%"
                  height="100%"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Box
        mt={8}
        mb={8}
        style={{
          background:
            "url(https://www.yardly.ca/wp-content/uploads/2020/02/cta-banner-bg-spring.svg) no-repeat",
          backgroundSize: "cover",
          padding: "30px",
        }}
      >
        <Grid container justify="center">
          <Grid item md={8}>
            <Box display="flex" flexDirection="row" alignItems="center">
              <img
                src="https://shezha20.dreamhosters.com/wp-content/uploads/2020/01/Icon_13.svg"
                data-lazy-src="https://shezha20.dreamhosters.com/wp-content/uploads/2020/01/Icon_13.svg"
                class="lazyloaded"
                style={{ maxWidth: "56px", marginRight: "15px" }}
                data-was-processed="true"
              />
              <Typography variant="h5">Ready to start your service?</Typography>
            </Box>
          </Grid>
          <Grid item md={2}>
            <GetPriceStyledButton bgColor="#20232c" color="white">
              Get A Price
            </GetPriceStyledButton>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <Box>
          <Typography variant="h6">OTHER SERVICES</Typography>
        </Box>
        <Box mb={8} mt={8}>
          <Grid container spacing={2} justify="center">
            <Grid item md={4}>
              <Grid item md={4}>
                <ServiceCard
                  title="Snow Removal"
                  imgSrc="https://www.yardly.ca/wp-content/uploads/2020/02/yardly-snow-removal.svg"
                />
              </Grid>
              <ServiceCard
                title="Lawn Moving"
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/02/yardly-lawn-mowing.svg"
              />
            </Grid>
            <Grid item md={4}>
              <ServiceCard
                title="Fall Clean Up"
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/02/yardly-fall-clean-up.svg"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
