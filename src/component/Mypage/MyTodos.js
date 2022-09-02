import React from "react";
import styled from "styled-components";
import MyTodo from "./MyTodo";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const Mytodos = () => {
  return (
    <>
      <MyTodosHeader>
        <Title>My ToDo List</Title>
        <FormControl sx={{m: 0, minWidth: 160}} size="small">
          <InputLabel>HashTag</InputLabel>
          <Select value="" label="Age">
            <MenuItem value={10}>아직</MenuItem>
            <MenuItem value={20}>없다</MenuItem>
            <MenuItem value={30}>요</MenuItem>
          </Select>
        </FormControl>
      </MyTodosHeader>
      <Wrapper>
        <MyTodo />
        <MyTodo />
        <MyTodo />
        <MyTodo />
        <MyTodo />
        <MyTodo />
        <MyTodo />
        <MyTodo />
        <MyTodo />
        <MyTodo />
        <MyTodo />
        <MyTodo />
      </Wrapper>
    </>
  );
};

export default Mytodos;

const MyTodosHeader = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px auto 50px auto;
`;

const Title = styled.div`
  font-size: calc(1rem + 1vw);
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0px;
  row-gap: 40px;
`;
