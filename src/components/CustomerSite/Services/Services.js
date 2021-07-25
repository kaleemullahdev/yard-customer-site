import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ServicesCard } from "../Card";
import React from "react"

export const Services = (props) => {
  const { servicePage } = props;
  return (
    <Box bgcolor="#f9f9fd" width="100%" height="auto" pt={8} pb={4}>
      {servicePage ? (
        <Box mt={2}>
          <Typography align="center" variant="h3">
            Find the services you need.
          </Typography>
        </Box>
      ) : (
        <>
          <Box>
            <Typography align="center">
              Trusted by Canadians from coast to coast
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="h4" align="center">
              Get the hassle free yard care you deserve
            </Typography>
          </Box>
        </>
      )}
      <Box mt={8}>
        <Container>
          <Grid container spacing={3} justify="center">
            <Grid item>
              <ServicesCard
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/02/yardly-snow-removal.svg"
                title="Snow Removal"
              />
            </Grid>
            <Grid item>
              <ServicesCard
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/02/yardly-snow-removal.svg"
                title="Lawn Moving"
              />
            </Grid>
            <Grid item>
              <ServicesCard
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/02/yardly-snow-removal.svg"
                title="Spring Clean Up"
              />
            </Grid>
            <Grid item>
              <ServicesCard
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/02/yardly-snow-removal.svg"
                title="Fall Clean Up"
              />
            </Grid>
            <Grid item>
              <ServicesCard
                imgSrc="https://www.yardly.ca/wp-content/uploads/2020/02/yardly-snow-removal.svg"
                title="Weed Control"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
