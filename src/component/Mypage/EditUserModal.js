import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import useInput from "../../hooks/useInput";
import {useDispatch} from "react-redux";
import {__editUserInfo} from "../../redux/modules/userInfoSlice";
new Blob([JSON.stringify()], {type: "application/json"});

function EditModal({setIsOpen}) {
  const dispatch = useDispatch();
  const closeModal = () => {
    setIsOpen(false);
  };
  const [image, setImage] = React.useState("");

  const onSaveFile = (e) => {
    const file = e.target.files;
    setImage(file[0]);
  };

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
          <ImageWrapper>
            <ImageInputLabel htmlFor="profileImage">
              사진 파일 찾기
            </ImageInputLabel>
            <ImageInput
              type="file"
              accept="image/jpg, image/png, image/jpeg"
              onChange={onSaveFile}
              id="profileImage"
            />
            <>{image && <PreviewImage src={URL.createObjectURL(image)} />}</>
          </ImageWrapper>
          <ModalLabel size={25}>자기소개 수정</ModalLabel>
          <ModalText onChange={onContentHandler} maxLength={50} />
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

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const PreviewImage = styled.img`
  position: absolute;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: auto 10px auto 10px;
  object-fit: cover;

  right: 150px;
  bottom: 20px;
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
