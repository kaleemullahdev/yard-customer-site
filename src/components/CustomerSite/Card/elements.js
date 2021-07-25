import Box from "@material-ui/core/Box";
import styled from "styled-components";
export const StyledImage = styled.img`
  border-radius: 50%;
  width: 140px;
  height: 140px;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  object-fit: cover;
`;
export const StyledCardContentWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
  margin-left: 10px;
`;
export const StyledImagesIcon = styled.img`
  margin-right: 10px;
`;
