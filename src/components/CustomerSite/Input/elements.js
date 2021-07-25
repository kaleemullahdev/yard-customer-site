import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
export const StyledTextField = styled(TextField)`
  width: 100%;
  box-shadow: 0 0 25px -12px rgba(0, 0, 0, 0.75);
  padding: 14px;
  border-radius: 100px;
  background-color: white;
  .MuiInputBase-input {
    margin-left: 10%;
    font-size: 14px;
  }
`;
