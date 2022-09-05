import styled from "styled-components";
import React from "react";
import EditModal from "./EditModal";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const UserInfo = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const modalIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Wrapper>
        <MyInfo>
          <MyInfoProfile>
            <MyInfoImage src="data:image/png;base64,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"></MyInfoImage>
            <>
              <BorderColorIcon onClick={modalIsOpen} />
            </>
          </MyInfoProfile>
          <MyInfoWrapper>
            <MyInfoUserName>도토리왕</MyInfoUserName>
            <MyInfoUserComment>
              안녕하세요 도토리의 왕 입니다.
            </MyInfoUserComment>
          </MyInfoWrapper>
        </MyInfo>
        <MyGroups>
          <GroupTitle>내가 속한 그룹</GroupTitle>
          <MyGroup>(주)상수리나무_디자인팀</MyGroup>
          <MyGroup>프론트엔드 코딩스터디</MyGroup>
          <MyGroup>백엔드 코딩스터디</MyGroup>
        </MyGroups>
      </Wrapper>
      <UnderLine />
      {isOpen && <EditModal setIsOpen={setIsOpen} />}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  width: 100%;
  border-radius: 10px;
`;

const MyInfo = styled.div`
  background-color: #c0b3a9;
  width: 40%;
  height: 15rem;
  display: flex;
  padding: 15px;
  border-radius: 10px 0 0 10px;
  border: 1px solid #c0b3a9;
`;

const MyInfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: 35px;
`;

const MyInfoImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin: auto 10px auto 10px;
  object-fit: cover;
`;
const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 40px;
  margin-bottom: 55px;
`;

const MyInfoUserName = styled.div`
  font-size: calc(0.5rem + 1vw);
`;
const MyInfoUserComment = styled.div`
  font-size: calc(0.1rem + 1vw);
`;

const MyGroups = styled.div`
  width: 25%;
  height: 15rem;
  padding: 30px;
  border-radius: 0px 10px 10px 0px;
  border: 1px solid #c0b3a9;
`;

const UnderLine = styled.hr`
  width: 70%;
  margin: 5% auto 2% auto;
`;

const GroupTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const MyGroup = styled.div`
  margin-bottom: 10px;
`;

export default UserInfo;
