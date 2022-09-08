import React, {useEffect} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import useToken from "../../hooks/useToken";

const Welcome = () => {
  const {isLoading, error} = useSelector((state) => state.signInUser);
  const count = useSelector((state) => state.todos.count);
  const decode = useToken();
  let nickname;
  if (sessionStorage.getItem("access_token")) {
    nickname = decode(sessionStorage.getItem("access_token")).sub;
  } else {
    nickname = "Anonymous";
  }
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error!!</div>;
  } else {
    return (
      <WelcomeMain>
        <h1>어서오세요, {nickname}님</h1>
        <span>할 일이 {count}개 남았어요</span>
      </WelcomeMain>
    );
  }
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
