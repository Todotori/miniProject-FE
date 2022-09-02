import React from "react";
import styled from "styled-components";
import Hashtag from "./Hashtag";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {motion} from "framer-motion";

const MyTodo = () => {
  return (
    <Container variants={CreateAnimation} initial="start" animate="end">
      <TodoInfoBox>
        <TodoCheckBox>
          <CheckBoxIcon fontSize="large" />
        </TodoCheckBox>
        <TodoLetterBox>
          <TodoTitle>제주에서 스카이다이빙 하기</TodoTitle>
          <TodoDetail>오늘안에 꼭 하겠습니다.</TodoDetail>
        </TodoLetterBox>
      </TodoInfoBox>
      <HashTagBox>
        <Hashtag />
        <Hashtag />
        <Hashtag />
        <Hashtag />
      </HashTagBox>
    </Container>
  );
};

const Container = styled(motion.div)`
  border: 2px solid #c0b3a9;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 80%;
  height: 200px;

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
`;
const TodoLetterBox = styled.div``;
const TodoTitle = styled.div`
  font-size: calc(0.8rem + 1vw);
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
