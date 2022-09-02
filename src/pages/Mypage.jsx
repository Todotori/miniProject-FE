import React from "react";
import Layout from "../component/Layout/Layout";
import MyTodos from "../component/Mypage/MyTodos";
import UserInfo from "../component/Mypage/UserInfo";

export const Mypage = () => {
  return (
    <Layout>
      <>
        <UserInfo />
      </>
      <MyTodos />
    </Layout>
  );
};

export default Mypage;
