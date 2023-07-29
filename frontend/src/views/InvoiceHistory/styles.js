import { Select, TextField } from "@mui/material";
import { styled } from "styled-components";

export const GroupBySelectors = styled.div`
  display: flex;
  max-width: 60%;
  gap: 4px;
  align-items: center;
  margin-bottom: 10px;
  .MuiIconButton-root {
    height: 40px;
    width: 40px;
  }
`

export const GroupTitle = styled.p`
  min-width: 110px;
`

export const SearchField = styled(TextField)`
  width: 200px;
  height: 30px;
  input {
    height: 30px;
    padding: 5px;
  }
`

export const SelectField = styled(Select)`
  .MuiSelect-select {
    height: 30px;
    padding: 5px;
    display: flex;
    align-items: center;
  }
  input {
    height: 0;
  }
`
