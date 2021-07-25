import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { StyledTypography, SyledCardWrapper } from "./elements";
import { HeroBanner } from "../HeroBanner";
// import { Offers } from "../Offers";

import { CommunityCard } from "../Card";
import Typography from "@material-ui/core/Typography";
import { YardlyBar, GetPriceStyledButton, ChoiceOffers } from "../components";
import { Testimonials } from "../Testimonials";
import { ServiceCard } from "./ServiceCard";
export const SnowRemoval = () => {
  return (
    <Box>
      <HeroBanner
        headerText="Snow removal services and pricing"
        description="Order services for all your snow shovelling needs within minutes"
        bgImageUrl="https://shezha20.dreamhosters.com/wp-content/uploads/2020/01/Header.svg"
      />
      <Box style={{ backgroundColor: "#20232c", padding: "50px" }}>
        <StyledTypography variant="h3" align="center">
          Need help battling the snow? We’ve got you covered.
        </StyledTypography>
      </Box>
      <Container>
        <Box mt={8}>
          <StyledTypography color="initial" variant="subtitle1">
            Shovelling snow seems to be endless during the winter months! What
            if you had someone come out and shovel for you every time it snows?
            With Yardly’s Snow Removal Subscription, we will have your property
            maintained all winter for a flat rate! It doesn’t matter how often
            it snows, you’ll have peace of mind that your property will be free
            of snow all winter! Leave your chilly chores to Yardly by enjoying
            fast and free quoting with a 100% satisfaction guarantee on our
            services.
          </StyledTypography>
        </Box>
        <Box mt={2}>
          <StyledTypography color="initial" variant="subtitle1">
            Yardly’s snow removal subscriptions are available in all our service
            areas in Calgary, Edmonton, Toronto and more!
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
                  src="https://www.yardly.ca/wp-content/uploads/2020/02/Yardly-Snow-Removal-image-min-e1581632397437.jpg"
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
          backgroundImage:
            "url(https://www.yardly.ca/wp-content/uploads/2020/02/winter-cta-background.svg)",
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
