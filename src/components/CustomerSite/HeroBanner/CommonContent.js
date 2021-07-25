import { AddressInput } from "../Input";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import React from "react"
import { StyledButton } from "./elements";
export const CommonContent = ({ headerText, description }) => {
  return (
    <Container>
      <Box style={{ paddingTop: "200px" }}>
        <Grid container direction="column" justifyContent="center">
          <Grid item md={4}>
            <h1>
              {headerText ? headerText : "Lawn care and snow removal made easy"}
            </h1>
          </Grid>
          <Grid item md={4} mt={2}>
            {description
              ? description
              : "Yardly is Canada’s leading brand for residential lawn care and now removal services."}
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Grid container justifyContent="center">
          <Grid item md={4}>
            <AddressInput
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment
                    position="end"
                    style={{ marginRight: "-10px" }}
                  >
                    <StyledButton>GET A PRICE </StyledButton>
                  </InputAdornment>
                ),
              }}
              placeholder="Enter you street address"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
