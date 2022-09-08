import React, {useEffect} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {__getTodosCount} from "../../redux/modules/todos";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {__getUserInfo} from "../../redux/modules/userInfoSlice";

const SideBar = ({spreadNav, isView}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(__getTodosCount());
        dispatch(__getUserInfo());
    }, []);
    const {isLoading, error} = useSelector((state) => state.signInUser);
    const count = useSelector((state) => state.todos.count);
    const userInfo = useSelector((state) => state.userInfo).data;
    let nickname;
    if (sessionStorage.getItem("access_token")) {
        nickname = userInfo.nickname;
    } else {
        nickname = "Anonymous";
    }
    const logOut = () => {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("user_id");
        navigate("/login");
    };
    if (isLoading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>{error}</div>
    } else {
        return (
            <>
                <CustomSideBar spreadNav={spreadNav}>
                    {spreadNav && isView ? (
                        <Wrapper variants={CreateAnimate} initial="start" animate="end">
                            <ProfileImage src={userInfo.profileImage}/>
                            <MessageBox>
                                <WelcomeMessage>안녕하세요, {nickname}님!</WelcomeMessage>
                                <CountToDoMessage>할 일이 {count}개 남았습니다!</CountToDoMessage>
                            </MessageBox>
                            <Navigation>
                                <Nav onClick={() => navigate("/")}>전체보기</Nav>
                                <Nav onClick={() => navigate(`/mypage/${userInfo.nickname}`)}>
                                    내 프로필
                                </Nav>
                                <Nav onClick={logOut}>로그아웃하기</Nav>
                            </Navigation>
                        </Wrapper>
                    ) : null}
                </CustomSideBar>
            </>
        );
    }
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
  object-fit: cover;
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

  cursor: pointer;
`;
