import React, {useEffect} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {__getTodosCount} from "../../redux/modules/todos";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import useToken from "../../hooks/useToken";

const SideBar = ({spreadNav, isView}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getTodosCount());
  }, []);
  const count = useSelector((state) => state.todos.count);
  const decode = useToken();
  const nickname = decode(sessionStorage.getItem("access_token")).sub;
  const logOut = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("user_id");
    navigate("/login");
  };
  return (
    <>
      <CustomSideBar spreadNav={spreadNav}>
        {spreadNav && isView ? (
          <Wrapper variants={CreateAnimate} initial="start" animate="end">
            <ProfileImage src="data:image/png;base64,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" />
            <MessageBox>
              <WelcomeMessage>안녕하세요, {nickname}님!</WelcomeMessage>
              <CountToDoMessage>할 일이 {count}개 남았습니다!</CountToDoMessage>
            </MessageBox>
            <Navigation>
              <Nav onClick={() => navigate("/")}>전체보기</Nav>
              <Nav onClick={() => navigate("/mypage/123")}>내 프로필</Nav>
            </Navigation>
            <Nav onClick={logOut}>로그아웃하기</Nav>
          </Wrapper>
        ) : null}
      </CustomSideBar>
    </>
  );
};

export default SideBar;

const CustomSideBar = styled.div`
  width: ${(props) => (props.spreadNav ? 400 : 0)}px;
  height: 100vh;
  background-color: #c0b3a9;

  position: fixed;
  left: 0px;

  display: flex;
  flex-direction: column;

  transition: width 400ms ease-in-out 0s;
  z-index: 999;
  overflow: hidden;
`;
const Wrapper = styled(motion.div)`
  margin: 25% 30% 0px auto;
`;
const CreateAnimate = {
  start: {opacity: 0},
  end: {opacity: 1},
};

const ProfileImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;

  margin: 0px 0px 40px 34px;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 100px;
  overflow: hidden;
`;

const WelcomeMessage = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  overflow: hidden;
`;
const CountToDoMessage = styled.div`
  overflow: hidden;
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: column;

  text-decoration: none;
`;

const Nav = styled.div`
  margin-bottom: 20px;
  width: 100px;
`;
