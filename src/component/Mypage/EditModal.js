import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import useInput from "../../hooks/useInput";

function EditModal({setIsOpen}) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const [Image, setImage] = React.useState(
    "data:image/png;base64,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"
  );
  const [content, onContentHandler, contentReset] = useInput();
  const [group, onGroupHandler, groupReset] = useInput();

  const onSubmit = () => {
    console.log(content, group);
    contentReset();
    groupReset();
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
          <ModalLabel size={35}>내 정보 수정</ModalLabel>
          <DotoriIconX
            src="https://user-images.githubusercontent.com/80745897/188114927-e91866c0-1c09-43b2-85c7-c5355d9990e6.png"
            onClick={closeModal}
          />
        </ModalHeader>
        <ModalInputs>
          <ModalLabel size={25}>프로필 사진 변경</ModalLabel>
          <Button>찾아보기..</Button>
          <ModalLabel size={25}>자기소개 수정</ModalLabel>
          <ModalText onChange={onContentHandler} />
          <ModalLabel size={25}>내가 속한 그룹</ModalLabel>
          <ModalTextInput onChange={onGroupHandler} />
        </ModalInputs>
        <Button onClick={onSubmit}>완료</Button>
      </ModalBox>
    </ModalBack>
  );
}

export default EditModal;

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
  height: 650px;
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

const ModalText = styled.textarea`
  width: 80%;
  height: 150px;
  margin-bottom: 20px;
`;
const ModalTextInput = styled.input`
  width: 80%;
  height: 30px;
`;
const ModalInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ModalLabel = styled.div`
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
