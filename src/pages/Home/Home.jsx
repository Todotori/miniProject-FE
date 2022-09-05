import React, {useState} from "react";
import styled from "styled-components";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Welcome from "./Welcome";
import NavContainer from "./NavCon/NavContainer";
import AddTodo from "./AddTodo.jsx";
import Mytodos from "../../component/Mypage/MyTodos";

const Home = () => {
  const [isOpen, setMenu] = useState(false);

  // const [category, setCategory] = useState('all')
  // const catergories = ['All', ...new Set(items.map(item => item.company))];

  return (
    <Main>
      {/*  ANCHOR : 01. nav */}
      <NavContainer />

      {/* ANCHOR : 02. mainWRap */}
      <MainWrap>
        {/* 02-1. Header */}
        <Welcome />

        {/* SECTION : 02-2. wrapTodo */}
        <AddTodo />

        {/* ANCHOR : 02-3 : todoList */}
        <Mytodos />
      </MainWrap>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;

const MainWrap = styled.div`
  width: 600px;
  margin: 150px auto 0 auto;
`;

export default Home;
