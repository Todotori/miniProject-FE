import React from "react";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";

function EditModal({setIsOpen}) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalBack onClick={closeModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h1>내 정보 수정</h1>
          <CancelIcon onClick={closeModal}>X</CancelIcon>
        </ModalHeader>
        <ModalInputs>
          <h2>프로필 사진 변경</h2>
          <Button>찾아보기..</Button>
          <h2>자기소개 수정</h2>
          <ModalText></ModalText>
        </ModalInputs>
        <Button>완료</Button>
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
  z-index: 1;
`;

const ModalBox = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  width: 700px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 40px 30px 40px;
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
`;

const ModalText = styled.textarea`
  width: 80%;
  height: 200px;
`;
const ModalInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;