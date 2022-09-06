import React from "react";
import Layout from "../component/Layout/Layout";
import MyTodos from "../component/Mypage/MyTodos";
import UserInfo from "../component/Mypage/UserInfo";
import styled from "styled-components";

export const Mypage = () => {
    return (
        <Layout>
            <WholeWrapper>
                <UserInfo/>
                <PageWrapper>
                    <MyTodos title={"My TODO List"}/>
                </PageWrapper>
            </WholeWrapper>
        </Layout>
    );
};

export default Mypage;

const PageWrapper = styled.div`
  width: 800px;
  margin: 0px auto 0px auto;
`;

const WholeWrapper = styled.div`
  padding: 50px;
`;
