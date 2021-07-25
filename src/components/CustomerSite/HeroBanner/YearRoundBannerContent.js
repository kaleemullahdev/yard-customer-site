import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { StyledButton } from "./elements";
import Typography from "@material-ui/core/Typography";
export const YearRoundBannerContent = () => {
  return (
    <Container>
      <Box
        mt={15}
        style={{
          backgroundColor: "rgba(255,255,255,.87)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" align="center">
          Get hassle-free year-round yard maintenance from Yardly
        </Typography>
        <Box>
          <Typography variant="h4" align="center">
            Everything you need to maintain your yard all year long
          </Typography>
        </Box>
      </Box>
      <Box mt={6} display="flex" justifyContent="center">
        <StyledButton>GET STARTED</StyledButton>
      </Box>
    </Container>
  );
};
