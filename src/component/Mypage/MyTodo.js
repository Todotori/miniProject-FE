import React from "react";
import styled from "styled-components";
import Hashtag from "./Hashtag";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {FiEdit3} from "react-icons/fi";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {__updateIsDone, __deleteTodo} from "../../redux/modules/todos";
import useToken from "../../hooks/useToken";
import EditModal from "./EditModal";
import {useNavigate} from "react-router-dom";

const MyTodo = ({todo}) => {
    const navigator = useNavigate();
    const [isMine, setIsMine] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const modalIsOpen = () => {
        setIsOpen(true);
    };
    const dispatch = useDispatch();

    const onClickIsDone = () => {
        dispatch(__updateIsDone(todo.id));
    };
    const onClickDelete = () => {
        dispatch(__deleteTodo(todo.id));
    };

    const decode = useToken();
    let nickname;
    let splitTag;
    if (!sessionStorage.getItem("access_token")) {
        nickname = "Anonymous";
        navigator("/login");
    } else {
        nickname = decode(sessionStorage.getItem("access_token")).sub;
        splitTag = todo.tag.split(",");
    }

    React.useEffect(() => {
        setIsMine(nickname === todo.member.nickname);
    }, [todo]);

    return (
        <Container
            $isMine={isMine}
            variants={CreateAnimation}
            initial="start"
            animate="end"
        >
            {/* NOTE 수정버튼 */}
            <TodoEditBox onClick={modalIsOpen}>
                <FiEdit3 fontSize="large"/>
                {isOpen && (
                    <EditModal
                        setIsOpen={setIsOpen}
                        title={todo.title}
                        content={todo.content}
                    />
                )}
            </TodoEditBox>

            {/* NOTE 삭제버튼 */}
            <TodoDeleteBox>
                <DeleteForeverRoundedIcon onClick={onClickDelete} fontSize="large"/>
            </TodoDeleteBox>

            {/* WHAT 투두정보들 */}
            <TodoInfoBox>
                <TodoCheckBox isDone={todo.done}>
                    <CheckBoxIcon onClick={onClickIsDone} fontSize="large"/>
                </TodoCheckBox>
                <TodoLetterBox>
                    <TodoTitle>{todo.title}</TodoTitle>
                    <TodoDetail>{todo.content}</TodoDetail>
                </TodoLetterBox>
            </TodoInfoBox>
            <HashTagBox>
                {splitTag.map((tag) => {
                    return <Hashtag key={tag} tagname={tag}/>;
                })}
            </HashTagBox>
            <NickNameBox>{`작성자 : ${todo.member.nickname}`}</NickNameBox>
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
  /* z-index: 1; */
  padding: 15px;
`;

const TodoInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 50%;
  position: relative;
  z-index: 0;
`;
const TodoCheckBox = styled.div`
  margin-right: 30px;
  margin-bottom: 40px;
  color: ${(props) => (!props.isDone ? "#6d6158" : "#4cd137")};
`;

const TodoDeleteBox = styled.div`
  position: absolute;
  right: 20px;
  color: #6d6158;
  z-index: 1;
`;

const TodoEditBox = styled.div`
  position: absolute;
  right: 60px;
  color: red;
  z-index: 100;

  & > svg {
    background-size: auto;
    color: blue;
  }
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
  bottom: 10px;
  right: 30px;
  font-size: 13px;
  color: gray;
  text-align: left;
`;

export default MyTodo;
