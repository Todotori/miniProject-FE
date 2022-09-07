import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import useToken from "../../hooks/useToken";


const Welcome = () => {
  const count = useSelector((state) => state.todos.count);
  const decode = useToken();
  const nickname = decode(sessionStorage.getItem("access_token")).sub;
  return (
    <WelcomeMain>
      <h1>어서오세요, {nickname}님</h1>
      <span>할 일이 {count}개 남았어요</span>
    </WelcomeMain>
  );
};

const WelcomeMain = styled.div`
  margin-bottom: 100px;
  & > h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  & > span {
    font-size: 24px;
    font-weight: 400;
  }
`;

export default Welcome;
