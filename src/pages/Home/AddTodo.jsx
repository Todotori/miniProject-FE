import React from 'react';
import styled from 'styled-components';
import { BsPencilSquare } from 'react-icons/bs';
import Multiselect from 'multiselect-react-dropdown';

const AddTodo = () => {
  const data = [
    { id: 0, title: '우리가좍' },
    { id: 1, title: '상수리나무' },
    { id: 2, title: '프론트엔드' },
  ];

  return (
    <TodoWrap>
      <AddTitle>
        <BsPencilSquare />
        <span>할 일을 추가하세요</span>
      </AddTitle>
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
  );
};

const TodoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const AddTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  & > span {
    margin-left: 16px;
  }
`;

export default AddTodo;