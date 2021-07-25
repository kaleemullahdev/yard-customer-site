import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react"
import {
  StyledImage,
  StyledCardContentWrapper,
  StyledImagesIcon,
} from "./elements";

export const ServiceTestimonialCard = ({
  imgSrc,
  headerText,
  listItems,
  extraHeader,
}) => {
  return (
    <Box>
      <Box style={{ marginTop: "80px", position: "relative" }}>
        <Box
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 18px 0 rgb(0 0 0 / 30%)",
            paddingBottom: "10px",
            height: "380px",
          }}
        >
          <StyledCardContentWrapper>
            <Box>
              <StyledImage src={imgSrc} />
            </Box>
          </StyledCardContentWrapper>
          <Box mt={10}>
            <Typography variant="h4" align="center">
              {headerText}
            </Typography>
          </Box>
          {extraHeader && (
            <Box mt={2}>
              <Typography variant="subtitle1" align="center">
                {extraHeader}
              </Typography>
            </Box>
          )}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            mb={10}
            mt={2}
          >
            {listItems &&
              listItems.map((item) => (
                <StyledCardContentWrapper>
                  <StyledImagesIcon
                    src="https://www.yardly.ca/wp-content/uploads/2020/02/check_black.svg"
                    height="18px"
                  />
                  <Container>
                    <Typography variant="body2">{item}</Typography>
                  </Container>
                </StyledCardContentWrapper>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
