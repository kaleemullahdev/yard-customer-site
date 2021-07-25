import styled from "styled-components";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiIconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
export const StyledAppBar = styled(MuiAppBar)`
  background-color: #fff;
  color: black;
`;
export const StyledIconButton = styled(MuiIconButton)`
  color: black;
  padding: 0px;
  &:focus {
    outline: none;
  }
`;
export const StyledButton = styled(Button)`
  background-color: #60ff68;
  border-radius: 100px;
  margin-left: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 12px 30px;
  &:hover {
    background-color: #5469d4;
  }
  @media (max-width: 768px) {
    fontsize: 12px;
    padding: 8px 20px;
  }
`;
export const GetPriceStyledButton = styled(Button)`
  ${({ bgColor }) =>
    bgColor ? `background-color: ${bgColor}` : "background-color: #60ff68"};
  ${({ color }) => color && `color: ${color}`};
  border-radius: 100px;
  margin-right: 0px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 14px 30px;
  &:hover {
    background-color: #5469d4;
  }
`;
export const YardlyBar = styled.div`
  width: 80px;
  height: 5px;
  background: linear-gradient(264deg, #00f7da 0%, #1eee9b 100%);
  margin-bottom: 26px;
`;
export const StyledMenuItem = styled(MenuItem)`
  a {
    text-decoration: none;
    color: unset;
  }
`;
