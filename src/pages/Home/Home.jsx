import React, {useState} from "react";
import styled from "styled-components";

import Welcome from "./Welcome";
import AddTodo from "./AddTodo.jsx";
import MyTodos from "../../component/Mypage/MyTodos";

const Home = () => {
  // const [category, setCategory] = useState('all')

  // const catergories = ['All', ...new Set(items.map(item => item.company))];

  return (
    <Main>
      {/* ANCHOR : 02. mainWRap */}
      <MainWrap>
        {/* 02-1. Header */}
        <Welcome />

        {/* SECTION : 02-2. wrapTodo */}
        <AddTodo />

        {/* ANCHOR : 02-3 : todoList */}
        <MyTodos title={"Todolist"} />
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
