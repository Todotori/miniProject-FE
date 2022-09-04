import React, { useState } from 'react';

import { Main, MainWrap } from './styles.jsx';

import Welcome from './Welcome';
import NavContainer from './NavContainer';
import AddTodo from './AddTodo.jsx';
import TodoContainer from './TodoContainer.jsx';

const Home = () => {
  // const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [isOpen, setMenu] = useState(false);

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
        <TodoContainer />
        <TodoContainer />
      </MainWrap>
    </Main>
  );
};

export default Home;
