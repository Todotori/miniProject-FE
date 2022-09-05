import React from "react";
import styled from "styled-components";
import Hashtag from "./Hashtag";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import {motion} from "framer-motion";
import {__deleteTodo, __updateIsDone} from "../../redux/modules/todos";
import {useDispatch} from "react-redux";

const MyTodo = ({todo}) => {
  const dispatch = useDispatch();
  const onClickIsDone = () => {
    dispatch(__updateIsDone({id: todo.id, isDone: todo.isDone}));
  };
  const onClickDelete = () => {
    dispatch(__deleteTodo(todo.id));
  };

  return (
    <Container variants={CreateAnimation} initial="start" animate="end">
      <TodoDeleteBox>
        <DeleteForeverRoundedIcon onClick={onClickDelete} fontSize="large" />
      </TodoDeleteBox>
      <TodoInfoBox>
        <TodoCheckBox isDone={todo.isDone}>
          <CheckBoxIcon onClick={onClickIsDone} fontSize="large" />
        </TodoCheckBox>
        <TodoLetterBox>
          <TodoTitle>{todo.title}</TodoTitle>
          <TodoDetail>{todo.detail}</TodoDetail>
        </TodoLetterBox>
      </TodoInfoBox>
      <HashTagBox>
        {todo.tags.map((tag) => {
          return <Hashtag tagname={tag} />;
        })}
      </HashTagBox>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;

  border: 2px solid #c0b3a9;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 170px;

  padding: 15px;
`;

const TodoInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 50%;
  position: relative;
`;
const TodoCheckBox = styled.div`
  margin-right: 30px;
  margin-bottom: 40px;
  color: ${(props) => (!props.isDone ? "#e84118" : "#4cd137")};
`;
const TodoDeleteBox = styled.div`
  position: absolute;
  right: 20px;
  color: #6d6158;
  z-index: 1;
`;

const TodoLetterBox = styled.div``;
const TodoTitle = styled.div`
  font-size: calc(0.6rem + 1vw);
  margin-bottom: 20px;
`;
const TodoDetail = styled.div`
  font-size: calc(0.1rem + 1vw);
`;

const HashTagBox = styled.div`
  width: 80%;
  height: 30%;
  margin-left: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

const CreateAnimation = {
  start: {opacity: 0, y: 10},
  end: {opacity: 1, y: 0, transition: {duration: 0.5}},
};

export default MyTodo;
