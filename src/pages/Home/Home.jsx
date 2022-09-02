import React, { useState } from 'react';
import Layout from '../../component/Layout/Layout';
import { BsPencilSquare } from 'react-icons/bs';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdTag } from 'react-icons/md';
import { Main, NavContainer, MainWrap, Header, TodoWrap, AddTodo, DropDown, TodoListContainer, TodoTitle, TodoDesc, TodoTag } from './styles.jsx';

const Home = () => {
  // const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const data = [
    { id: 0, title: '우리가좍' },
    { id: 1, title: '상수리나무' },
    { id: 2, title: '프론트엔드' },
  ];

  // NOTE 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // NOTE 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // WHAT 단일체크 선택 :  아이템 배열 +
      setCheckItems(prev => [...prev, id]);
    } else {
      // WHAT 단일 체크 해제 : 체크텐 아이템 제외한 배열(filter)
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  // NOTE 체크박스 전체 선택
  const handleAllCheck = checked => {
    if (checked) {
      // WHAT 전체 선택 클릭 : 데이트의 모든 아이템(id)를 담은 배열로 checkItems상태 업뎃
      const idArray = [];
      data.forEach(el => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

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

          <DropDown>
            <input
              type='checkbox'
              name='select_all'
              id='select_all'
              onChange={e => handleAllCheck(e.target.checked)}
              // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
              checked={checkItems.length === data.length ? true : false}
            />
            <label for='select_all'>전체보기</label>
          </DropDown>

          <tbody>
            {data?.map((data, key) => (
              <tr key={key}>
                <td>
                  <input
                    type='checkbox'
                    name={`select-${data.id}`}
                    onChange={e => handleSingleCheck(e.target.checked, data.id)}
                    // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                    checked={checkItems.includes(data.id) ? true : false}
                  />
                </td>
                <td className='second-row'>{data.title}</td>
              </tr>
            ))}
          </tbody>
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
