import React from "react";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import {motion} from "framer-motion";
import useInput from "../../hooks/useInput";

function AddModal({setIsOpen}) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const [title, onChangeTitle, titleReset] = useInput();
  const [comment, onChangeComment, commentReset] = useInput();

  const onSubmit = () => {
    titleReset();
    commentReset();
    closeModal();
  };
  return (
    <ModalBack onClick={closeModal}>
      <ModalBox
        variants={CreateAnimation}
        initial="start"
        animate="end"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <ModalLable size={35}>Todo 작성하기</ModalLable>
          <DotoriIconX
            src="https://user-images.githubusercontent.com/80745897/188114927-e91866c0-1c09-43b2-85c7-c5355d9990e6.png"
            onClick={closeModal}
          />
        </ModalHeader>
        <ModalInputs>
          <ModalLable size={25}>제목</ModalLable>
          <ModalText onChange={onChangeTitle}></ModalText>
          <ModalLable size={25}>세부 내용</ModalLable>
          <ModalTextArea onChange={onChangeComment}></ModalTextArea>
        </ModalInputs>
        <Button onClick={onSubmit}>완료</Button>
      </ModalBox>
    </ModalBack>
  );
}

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled(motion.div)`
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  width: 700px;
  height: 600px;
  transform: translate(-50%, -50%);
  padding: 40px 40px 30px 40px;
  z-index: 999;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 3px;
  border: none;
  background-color: #c0b3a9;
  margin-bottom: 30px;
`;

const ModalTextArea = styled.textarea`
  width: 80%;
  height: 200px;
  padding: 10px;
`;
const ModalText = styled.input`
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
`;
const ModalInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ModalLable = styled.div`
  font-size: ${(props) => props.size}px;
  margin-bottom: 20px;
`;

const DotoriIconX = styled.img`
  width: 50px;
  height: 70px;
`;

const CreateAnimation = {
  start: {opacity: 0, scale: 0.5},
  end: {opacity: 1, scale: 1, transition: {duration: 0.5}},
};

export default AddModal;
