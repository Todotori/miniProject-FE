<<<<<<< HEAD:src/component/Mypage/EditModal.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useInput from '../../hooks/useInput';
import CheckBoxCon from '../../pages/Home/CheckBoxCon';
import { useDispatch } from 'react-redux';
import { __editTodo } from '../../redux/modules/todos';

function EditModal({ setIsOpen, title, content }) {
=======
import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import useInput from "../../hooks/useInput";
import {useDispatch} from "react-redux";
import {__editUserInfo} from "../../redux/modules/userInfoSlice";
new Blob([JSON.stringify()], {type: "application/json"});

function EditModal({setIsOpen}) {
>>>>>>> c4f44ffebb00e2f2bd4f054ae8797c9bca43c5d5:src/component/Mypage/EditUserModal.js
  const dispatch = useDispatch();
  const closeModal = () => {
    setIsOpen(false);
  };
  const [image, setImage] = React.useState("");

  const onSaveFile = (e) => {
    const file = e.target.files;
    setImage(file[0]);
  };

<<<<<<< HEAD:src/component/Mypage/EditModal.js
  const [onChangeTitle, titleReset] = useInput();
  const [onContentHandler, contentReset] = useInput();
  const [comment, onChangeComment, commentReset] = useInput();
  const [check, setCheck] = useState([]);

  const onCheck = selected => {
    setCheck([...check, selected]);
  };
  const onUnCheck = selected => {
    setCheck(check.filter(el => el !== selected));
  };
  const tagSplit = check.join(',').split(',');
  
  const onSubmit = () => {
    const arrayToString = check.join(',');
    titleReset();
    commentReset();
    closeModal();
    dispatch(__editTodo({ title: onChangeTitle, content: onChangeComment, tag: arrayToString }));
=======
  const [content, onContentHandler, contentReset] = useInput();
  const [group, onGroupHandler, groupReset] = useInput();
  const onSubmit = async () => {
    let formData = new FormData();
    const upload = {company: group, comment: content};
    formData.append("image", image);
    formData.append(
      "data",
      new Blob([JSON.stringify(upload)], {type: "application/json"})
    );

    const response = await dispatch(__editUserInfo(formData)).unwrap();
    contentReset();
    groupReset();
    closeModal();
>>>>>>> c4f44ffebb00e2f2bd4f054ae8797c9bca43c5d5:src/component/Mypage/EditUserModal.js
  };

  return (
    <ModalBack onClick={closeModal}>
      <ModalBox variants={CreateAnimation} initial='start' animate='end' onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalLable size={35}>추가추가하십샤</ModalLable>
          <DotoriIconX src='https://user-images.githubusercontent.com/80745897/188114927-e91866c0-1c09-43b2-85c7-c5355d9990e6.png' onClick={closeModal} />
        </ModalHeader>
        <ModalInputs>
<<<<<<< HEAD:src/component/Mypage/EditModal.js
          <ModalTitle onChange={onChangeTitle} placeholder={title}></ModalTitle>
          <ModalText onChange={onChangeComment} placeholder={content}></ModalText>
        </ModalInputs>

        {/* NOTE 투두 작성 시 태그 여러개 입력 안됨 (String 값으로 하나만 입력 가능함) - 추후 수정 */}
        <CheckWrap>
          <CheckBoxCon onCheck={onCheck} onUnCheck={onUnCheck} tags={'여가'} />
          <CheckBoxCon onCheck={onCheck} onUnCheck={onUnCheck} tags={'일상'} />
          <CheckBoxCon onCheck={onCheck} onUnCheck={onUnCheck} tags={'취미'} />
          <CheckBoxCon onCheck={onCheck} onUnCheck={onUnCheck} tags={'자기개발'} />
          <CheckBoxCon onCheck={onCheck} onUnCheck={onUnCheck} tags={'기타'} />
        </CheckWrap>
        <Button onClick={onSubmit}>수정하기</Button>
=======
          <ModalLabel size={25}>프로필 사진 변경</ModalLabel>
          <ImageInputLabel for="profileImage">사진 파일 찾기</ImageInputLabel>
          <ImageInput
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            onChange={onSaveFile}
            id="profileImage"
          />
          <ModalLabel size={25}>자기소개 수정</ModalLabel>
          <ModalText onChange={onContentHandler} />
          <ModalLabel size={25}>내가 속한 그룹</ModalLabel>
          <ModalTextInput onChange={onGroupHandler} />
        </ModalInputs>
        <Button onClick={onSubmit}>완료</Button>
>>>>>>> c4f44ffebb00e2f2bd4f054ae8797c9bca43c5d5:src/component/Mypage/EditUserModal.js
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
  z-index: 1000;
`;

const ModalBox = styled(motion.div)`
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  width: 700px;
  height: 650px;
  transform: translate(-50%, -50%);
  padding: 40px 40px 30px 40px;
  z-index: 100000;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalTitle = styled.input`
  width: 30%;
  height: 40px;
  border: 0.5px solid #6d6158;
  border-radius: 20px;
  box-shadow: 0px 15px 25px -4px rgba(150, 150, 150, 0.24);
  margin-bottom: 30px;
  padding: 10px;
  font-weight: 500;
  font-size: 20px;
  color: #2f2f2f;
`;

const CheckWrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  border: none;
  background-color: #c0b3a9;
  margin-bottom: 30px;
`;

const ImageInputLabel = styled.label`
  width: 200px;
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 3px;
  border: none;
  background-color: #c0b3a9;
`;

const ImageInput = styled.input`
  width: 80%;
  height: 30px;
  margin-bottom: 30px;
  border-radius: 3px;
  border: none;
  background-color: #c0b3a9;
  display: none;
`;

const ModalText = styled.textarea`
  width: 80%;
<<<<<<< HEAD:src/component/Mypage/EditModal.js
  height: 200px;
  padding: 0.625rem;
  border: 0.5px solid #c0b3a9;
  border-radius: 7px;
  box-shadow: 0px 15px 25px -4px rgba(150, 150, 150, 0.24);
=======
  height: 150px;
  margin-bottom: 20px;
`;
const ModalTextInput = styled.input`
  width: 80%;
  height: 30px;
>>>>>>> c4f44ffebb00e2f2bd4f054ae8797c9bca43c5d5:src/component/Mypage/EditUserModal.js
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
  start: { opacity: 0, scale: 0.5 },
  end: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default EditModal;
