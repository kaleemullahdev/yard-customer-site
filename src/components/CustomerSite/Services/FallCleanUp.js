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
import React from "react"

export const FallCleanUp = () => {
  return (
    <Box>
      <HeroBanner
        headerText="Snow removal services and pricing"
        description="Order services for all your snow shovelling needs within minutes"
        bgImageUrl="https://www.yardly.ca/wp-content/uploads/2020/02/fall-clean-up-bg.svg"
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
              Clearing leaves can be a lot of work. Let us help prepare your
              lawn for winter.
            </StyledTypography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box mt={8}>
          <StyledTypography color="initial" variant="subtitle1">
            Getting your lawn ready for winter is a crucial part of maintaining
            its health. To keep it looking its best, make sure it’s prepared for
            winter by booking a fall clean up service! With important services
            like aeration and fertilization that improve the health of your lawn
            over time, you can’t go wrong with a fall clean up with Yardly!
            Order directly on our website and let us take care of the rest!
          </StyledTypography>
        </Box>
        <Box mt={2}>
          <StyledTypography color="initial" variant="subtitle1">
            Fall clean up services are available by Yardly from September 15 to
            October 31 every year, depending on the weather.
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
          backgroundPosition: "bottom center",
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.yardly.ca/wp-content/uploads/2020/02/fall-cta-background.svg)",
          backgroundRepeat: "no-repeat",
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
              <ServiceCard
                title="Snow Removal"
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/02/yardly-snow-removal.svg"
              />
            </Grid>
            <Grid item md={4}>
              <ServiceCard
                title="Lawn Moving"
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/02/yardly-lawn-mowing.svg"
              />
            </Grid>
            <Grid item md={4}>
              <ServiceCard
                title="Spring Clean Up"
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/02/yardly-spring-clean-up.svg"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
