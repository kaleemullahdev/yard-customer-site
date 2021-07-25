import styled from "styled-components";
import MuiTypography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export const StyledTypography = styled(MuiTypography)`
  ${({ color }) => !color && `color: white`}
`;
export const SyledCardWrapper = styled(Box)`
  cursor: pointer;
  .learn-more {
    visibility: hidden;
  }
  &:hover {
    border-radius: 8px;
    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 20%);
    transition: 0.25s;
    .MuiBox-root .learn-more {
      visibility: visible;
      margin-left: 10px;
      transition: all 0.5s;
    }
  }
  @media (max-width: 768px) {
    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 20%);
  }
`;
