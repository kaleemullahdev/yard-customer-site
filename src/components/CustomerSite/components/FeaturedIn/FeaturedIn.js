import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react"

export const FeaturedIn = () => {
  return (
    <Box
      display="flex"
      mt={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Typography>Featured In </Typography>
      </Box>
      <Box>
        <img src="https://www.shorturl.at/gtwIN" width="50" height="50" />
      </Box>
      <Box>
        <img src="https://www.shorturl.at/gtwIN" width="50" height="50" />
      </Box>
      <Box>
        <img src="https://www.shorturl.at/gtwIN" width="50" height="50" />
      </Box>
      <Box>
        <img
          src="https://www.yardly.ca/wp-content/uploads/2020/06/google-reviews-yardly-tw.png"
          width="70"
          height="70"
        />
      </Box>
    </Box>
  );
};
