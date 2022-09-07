import React from "react";
import styled from "styled-components";
import Hashtag from "./Hashtag";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import {motion} from "framer-motion";
import {useDispatch} from "react-redux";
import {__updateIsDone, __deleteTodo} from "../../redux/modules/todos";
import useToken from "../../hooks/useToken";

const MyTodo = ({todo}) => {
  const [isMine, setIsMine] = React.useState(false);
  const dispatch = useDispatch();
  const onClickIsDone = () => {
    dispatch(__updateIsDone(todo.id));
  };
  const onClickDelete = () => {
    dispatch(__deleteTodo(todo.id));
  };

  const decode = useToken();
  const nickname = decode(sessionStorage.getItem("access_token")).sub;
  React.useEffect(() => {
    setIsMine(nickname === todo.member.nickname);
  }, [todo]);
  const splitTag = todo.tag.split(",");
  return (
    <Container
      variants={CreateAnimation}
      initial="start"
      animate="end"
      $isMine={isMine}
    >
      <TodoDeleteBox>
        <DeleteForeverRoundedIcon onClick={onClickDelete} fontSize="large" />
      </TodoDeleteBox>
      <TodoInfoBox>
        <TodoCheckBox isDone={todo.done}>
          <CheckBoxIcon onClick={onClickIsDone} fontSize="large" />
        </TodoCheckBox>
        <TodoLetterBox>
          <TodoTitle>{todo.title}</TodoTitle>
          <TodoDetail>{todo.content}</TodoDetail>
        </TodoLetterBox>
      </TodoInfoBox>
      <HashTagBox>
        {splitTag.map((tag) => {
          return <Hashtag key={tag} tagname={tag} />;
        })}
      </HashTagBox>
      <NickNameBox>{todo.member.nickname}</NickNameBox>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  border: 2px solid ${(props) => (props.$isMine ? "#6D6158" : "#c0b3a9")};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 170px;
  z-index: 1;
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

const NickNameBox = styled.div`
  position: absolute;
  bottom: 5px;
  right: 20px;
  font-size: 12px;

  color: gray;
  text-align: left;
`;

export default MyTodo;
