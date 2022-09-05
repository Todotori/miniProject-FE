import React from "react";
import styled from "styled-components";
import {BsPencilSquare} from "react-icons/bs";
import AddModal from "./AddModal.jsx";

import Dropdown from "../../component/Layout/Dropdown.js";

const AddTodo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <TodoWrap>
      <AddTitle>
        <BsPencilSquare onClick={modalIsOpen} />
        <button onClick={modalIsOpen}>할 일을 추가하세요</button>
      </AddTitle>
      {isOpen && <AddModal setIsOpen={setIsOpen} />}
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
