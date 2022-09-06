import React, { useEffect } from 'react';
import styled from 'styled-components';
import CancelIcon from '@mui/icons-material/Cancel';
import { motion } from 'framer-motion';
import useInput from './../../hooks/useInput';
import { __addTodo } from '../../redux/modules/todos';
import { useDispatch, useSelector } from 'react-redux';
import CheckBoxCon from './CheckBoxCon';

function AddModal({setIsOpen}) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const dispatch = useDispatch();
  const [title, onChangeTitle, titleReset] = useInput();
  const [comment, onChangeComment, commentReset] = useInput();
  const [tag, onChangeTag, tagReset] = useInput();
  const tags = useSelector((state) => state.tags);

  const onSubmit = () => {
    dispatch(__addTodo({title: title, content: comment, tag: tag}));
    titleReset();
    commentReset();
    tagReset();
    closeModal();
  };

  useEffect(() => {
    dispatch(__addTodo());
  }, []);

  return (
    <ModalBack onClick={closeModal}>
      <ModalBox variants={CreateAnimation} initial='start' animate='end' onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalLable size={35}>추가추가하십샤</ModalLable>
          <DotoriIconX src='https://user-images.githubusercontent.com/80745897/188114927-e91866c0-1c09-43b2-85c7-c5355d9990e6.png' onClick={closeModal} />
        </ModalHeader>
        <ModalInputs>
          <ModalTitle onChange={onChangeTitle} placeholder='오늘 뭐하쇼?'></ModalTitle>
          <ModalText onChange={onChangeComment} placeholder='상세내용을 입력하세여'></ModalText>
          <ModalLable size={25}>해시태그</ModalLable>
          <ModalText onChange={onChangeTag}></ModalText>
        </ModalInputs>
        
        {/* NOTE 투두 작성 시 태그 여러개 입력 안됨 (String 값으로 하나만 입력 가능함) - 추후 수정 */}
        <CheckBoxCon tags={tags[1]} />
        <CheckBoxCon tags={tags[2]} />
        <CheckBoxCon tags={tags[3]} />
        <CheckBoxCon tags={tags[4]} />
        <Button onClick={onSubmit}>추가하기</Button>
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

const Button = styled.button`
  cursor: pointer;
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
  padding: 0.625rem;
  border: 0.5px solid #c0b3a9;
  border-radius: 7px;
  box-shadow: 0px 15px 25px -4px rgba(150, 150, 150, 0.24);
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

export default AddModal;
