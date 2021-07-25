import Grid from "@material-ui/core/Grid";
import React from "react"
import { Offer } from "./Offer";

export const ChoiceOffers = ({ columnEnabled }) => {
  const AllOffers = [
    {
      headerImage:
        "https://www.yardly.ca/wp-content/uploads/2020/01/Icon06.svg",
      headerText: "Instant Free Quote",
      detail:
        "We use satellite imaging to review your property so you can get a quote in seconds",
    },
    {
      headerImage:
        "https://www.yardly.ca/wp-content/uploads/2020/01/Icon09.svg",
      headerText: "Professional & Insured",
      detail:
        "No more pricing haggling – you get an upfront monthly price with no surprises.",
    },
    {
      headerImage:
        "https://www.yardly.ca/wp-content/uploads/2020/01/Icon07.svg",
      headerText: "Upfront Flat Pricing",
      detail:
        "No more pricing haggling – you get an upfront monthly price with no surprises.",
    },
    {
      headerImage:
        "https://www.yardly.ca/wp-content/uploads/2020/01/Icon10.svg",
      headerText: "Professional Customer Support",
      detail:
        "You get to rate the job after each service visit. We won’t rest until the job is done right.",
    },
    {
      headerImage:
        "https://www.yardly.ca/wp-content/uploads/2020/01/Icon08.svg",
      headerText: "Simple Online Ordering",
      detail:
        "We use satellite imaging to review your property so you can get a quote in seconds",
    },
    {
      headerImage:
        "https://www.yardly.ca/wp-content/uploads/2020/01/Icon11.svg",
      headerText: "Satisfaction Guarantee",
      detail:
        "You get to rate the job after each service visit. We won’t rest until the job is done right.",
    },
  ];
  return (
    <Grid container spacing={4} justify="center">
      {AllOffers.map(({ headerImage, headerText, detail }) => (
        <Offer
          columnEnabled={columnEnabled}
          headerImage={headerImage}
          headerText={headerText}
          detail={detail}
        />
      ))}
    </Grid>
  );
};
