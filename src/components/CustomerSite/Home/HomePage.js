import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import React from "react"
import { FeaturedIn, GetPriceStyledButton, ChoiceOffers } from "../components";
import { HeroBanner } from "../HeroBanner";
import { Community } from "../Community";
import { Services } from "../Services";
import { Testimonials } from "../Testimonials";
export const HomePage = () => {
  return (
    <>
      <Container>
        <HeroBanner />
        <FeaturedIn />
        <Box mt={8}>
          <Grid container alignItems="center" justify="center" spacing={2}>
            <Grid item md={6} sm={12}>
              <img
                src="https://www.yardly.ca/wp-content/uploads/2020/01/Home_IMG_01.svg"
                width="100%"
                height="100%"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Typography align="center">Why Yardly</Typography>
                <h3 style={{ textAlign: "content" }}>
                  Easy & reliable yard care
                </h3>
                <Box mt={4}>
                  <Typography align="center">
                    With a seamless online ordering process and subscription
                    services backed by a satisfaction guarantee, Yardly offers
                    an easy and reliable 21st-century experience for homeowners
                    looking for longterm lawn care and snow removal.
                  </Typography>
                </Box>
                <Box mt={10}>
                  <GetPriceStyledButton> GET A PRICE </GetPriceStyledButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={8} mb={4}>
          <Box mb={8}>
            <Typography variant="h4">Why choose Yardly</Typography>
          </Box>
          <ChoiceOffers />
        </Box>
      </Container>
      <Services />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={{
          // backgroundPosition: 'bottom center',
          backgroundImage: `url('https://www.yardly.ca/wp-content/uploads/2020/02/Home_IMG_03.svg')`,
          backgroundRepeat: "no-repeat",
          minWidth: "100%",
          minHeight: "650px",
        }}
      >
        <Box mt={8}>
          <StarIcon fontSize="medium" style={{ fill: "#7cda25" }} />
          <StarIcon fontSize="medium" style={{ fill: "#7cda25" }} />
          <StarIcon fontSize="medium" style={{ fill: "#7cda25" }} />
          <StarIcon fontSize="medium" style={{ fill: "#7cda25" }} />
          <StarIcon fontSize="medium" style={{ fill: "#7cda25" }} />
        </Box>
        <Box mt={4} mb={4}>
          <Typography align="center" variant="h4">
            What our customers are saying
          </Typography>
        </Box>
        <Box width="100%" height="100%" justifyContent="center" display="flex">
          <Container>
            <Testimonials />
          </Container>
        </Box>
      </Box>
      <Community />
    </>
  );
};
