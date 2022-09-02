import React from "react";
import Layout from "../component/Layout/Layout";
import MyTodos from "../component/Mypage/MyTodos";
import UserInfo from "../component/Mypage/UserInfo";
import styled from "styled-components";

export const Mypage = () => {
  return (
    <Layout>
      <WholeWrapper>
        <UserInfo />
        <MyTodos />
      </WholeWrapper>
    </Layout>
  );
};

export default Mypage;

const WholeWrapper = styled.div`
  padding: 50px;
`;
