import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

function EditModal({setIsOpen}) {
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <ModalBack onClick={closeModal}>
            <ModalBox variants={CreateAnimation} initial='start' animate='end' onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <ModalLable size={35}>내 정보 수정</ModalLable>
                    <DotoriIconX
                        src='https://user-images.githubusercontent.com/80745897/188114927-e91866c0-1c09-43b2-85c7-c5355d9990e6.png'
                        onClick={closeModal}/>
                </ModalHeader>
                <ModalInputs>
                    <ModalLable size={25}>프로필 사진 변경</ModalLable>
                    <Button>찾아보기..</Button>
                    <ModalLable size={25}>자기소개 수정</ModalLable>
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

const ModalText = styled.textarea`
  width: 80%;
  height: 200px;
`;
const ModalInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ModalLable = styled.div`
  font-size: ${props => props.size}px;
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
