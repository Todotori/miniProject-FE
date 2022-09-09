import React from "react";
import styled from "styled-components";
import {BsPencilSquare} from "react-icons/bs";
import AddModal from "./AddModal.jsx";

const AddTodo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <TodoWrap>
      <AddTitle>
        <AddButton onClick={modalIsOpen}>
          <BsPencilSquare />
        </AddButton>
        {"👈 할 일을 추가하세요"}
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
//"#6D6158" : "#c0b3a9"
const AddButton = styled.button`
  background-color: #c0b3a9;
  border: none;
  border-radius: 15px;
  width: 50px;
  height: 50px;
  font-size: 22px;
  margin-right: 10px;
`;

export default AddTodo;
