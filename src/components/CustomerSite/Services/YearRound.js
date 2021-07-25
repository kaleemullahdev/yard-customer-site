import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  YardlyBar,
  GetPriceStyledButton,
  FeaturedIn,
  ChoiceOffers,
} from "../components";
import { YearRoundBannerContent, HeroBanner } from "../HeroBanner";
import { Testimonials } from "../Testimonials";
import { ServiceCard } from "./ServiceCard";
import { ServiceTestimonialCard } from "../Card";
export const YearRound = () => {
  return (
    <Box>
      <HeroBanner
        headerText="Weed control services and pricing"
        description="Expert weed control and fertilization in just a few clicks!"
        bgImageUrl="https://www.yardly.ca/wp-content/uploads/2020/06/year-round-feature.svg"
      >
        <YearRoundBannerContent />
      </HeroBanner>
      <Box>
        <Container>
          <FeaturedIn />
        </Container>
      </Box>
      <Container>
        <Box mt={8}>
          <Box mb={6}>
            <Typography variant="h5" align="center">
              Why go Year-Round?
            </Typography>
          </Box>
          <Grid container spacing={4} justify="center">
            <Grid item md={4}>
              <Box>
                <Typography variant="h5" align="center">
                  Easy Monthly Budgeting
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="subtitle" align="center">
                  One monthly flat rate to take care of your yard with no
                  surprises
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box>
                <Typography variant="h5" align="center">
                  Easy Monthly Budgeting
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="subtitle" align="center">
                  One monthly flat rate to take care of your yard with no
                  surprises
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box mt={1}>
                <Typography variant="h5" align="center">
                  Easy Monthly Budgeting
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle" align="center">
                  One monthly flat rate to take care of your yard with no
                  surprises
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={8}>
          <Typography variant="h4" align="center">
            Your Year-Round Plan Has Everything You Need
          </Typography>
          <Grid container spacing={4} justify="center">
            <Grid item md={3}>
              <ServiceTestimonialCard
                headerText="Spring Clean Up"
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/06/spring.svg"
                listItems={[
                  "Power Raking",
                  "Leaf & Debris Clean-Up from Turf",
                  "Rockbed Blowout",
                  "First Mowing & Trimming",
                  "Clipping & Debris Bagging",
                  "Power Edging",
                  "Core Aeration",
                ]}
              />
            </Grid>
            <Grid item md={3}>
              <ServiceTestimonialCard
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/06/summer.svg"
                headerText="Lawn Moving"
                listItems={[
                  "Lawn care from spring through fall",
                  "Weekly mowing & trimming",
                  "Power edging",
                  "Fertilization and weed control",
                ]}
              />
            </Grid>
            <Grid item md={3}>
              <ServiceTestimonialCard
                headerText="Fall Clean Up"
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/06/fall.svg"
                listItems={[
                  "Leaf Raking",
                  "Leaf & Debris Clean-Up from Turf",
                  "Rockbed Blowout",
                  "Final Mow and Trim",
                  "Clipping & Debris Bagging",
                  "Core Aeration",
                ]}
              />
            </Grid>
            <Grid item md={3}>
              <ServiceTestimonialCard
                headerText="Snow Removal"
                extraHeader="Unlimited snow removal for every"
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/06/snow.svg"
                listItems={[
                  "snowfall in Alberta and over 2.5 cm in Ontario",
                  "Repeat service visits made during storms",
                  "Service guaranteed within 24 hours in Alberta and 12 hours in Ontario",
                ]}
              />
            </Grid>
          </Grid>
          <Box mt={8} display="flex" justifyContent="center">
            <GetPriceStyledButton>Get A Price</GetPriceStyledButton>
          </Box>
        </Box>
        <Box mt={8} mb={4}>
          <Box mb={8}>
            <Typography variant="h4">Why choose Yardly</Typography>
          </Box>
          <ChoiceOffers />
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
      <Container>
        <Box mt={8}>
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
