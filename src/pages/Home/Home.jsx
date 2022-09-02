import React, { useState } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdTag } from 'react-icons/md';
import { Main, MainWrap, Header, TodoWrap, AddTodo, DropDown, TodoListContainer, TodoTitle, TodoDesc, TodoTag } from './styles.jsx';
import NavContainer from './NavContainer';
import Multiselect from 'multiselect-react-dropdown';

const Home = () => {
  // const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [isOpen, setMenu] = useState(false);
  const data = [
    { id: 0, title: '우리가좍' },
    { id: 1, title: '상수리나무' },
    { id: 2, title: '프론트엔드' },
  ];

  return (
    <Main>
      {/*  ANCHOR : 01. nav */}
      <NavContainer></NavContainer>

      {/* ANCHOR : 02. mainWRap */}
      <MainWrap>
        {/* 02-1. Header */}
        <Header>
          <h1>어서오세요, 김도토리님</h1>
          <span>할 일이 30개 남았어요</span>
        </Header>

        {/* SECTION : 02-2. wrapTodo */}
        <TodoWrap>
          <AddTodo>
            <BsPencilSquare />
            <span>할 일을 추가하세요</span>
          </AddTodo>
          <Multiselect
            displayValue='title'
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={data}
            showCheckbox
            showArrow
            placeholder=''
            style={{
              searchBox: {
                border: '1px solid teal',
                'min-width': '200px',
                'max-width': '350px',
                height: 'auto',
              },
            }}
          />
        </TodoWrap>

        {/* ANCHOR : 02-3 : todoList */}
        <TodoListContainer>
          <TodoDesc>
            <BsCheckCircleFill />
            <TodoTitle>
              <h3>밥먹기</h3>
              <span>소고기 궈먹어야지~</span>
            </TodoTitle>
          </TodoDesc>

          <TodoTag>
            <MdTag />
            <span>상수리나무_디자인팀</span>
          </TodoTag>
        </TodoListContainer>
      </MainWrap>
    </Main>
  );
};

export default Home;
