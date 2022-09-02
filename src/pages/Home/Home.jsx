import React, { useState } from 'react';
import Layout from '../../component/Layout/Layout';
import { BsPencilSquare } from 'react-icons/bs';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdTag } from 'react-icons/md';
import { Main, NavContainer, MainWrap, Header, TodoWrap, AddTodo, DropDown, TodoListContainer, TodoTitle, TodoDesc, TodoTag } from './styles.jsx';

const Home = () => {
  // const [dropdownVisibility, setDropdownVisibility] = useState(false);

  return (
    <Main>
      {/*  ANCHOR : 01. nav */}
      <NavContainer>바보</NavContainer>

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

          {/* ANCHOR : 02-2[1] : 드롭다운 */}
          <DropDown>
            <option>
              <input type='checkbox' id='all' name='all' />
              <label for='all'>전체보기</label>
            </option>
            <option>
              <input type='checkbox' id='tag_01' name='tag_01' />
              <label for='tag_01'>상수리나무_디자인팀</label>
            </option>
            <option>
              <input type='checkbox' id='tag_02' name='tag_02' />
              <label for='tag_02'>프론트엔드 스터디</label>
            </option>
            <option>
              <input type='checkbox' id='tag_03' name='tag_03' />
              <label for='tag_03'>우리가좍</label>
            </option>
          </DropDown>
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
