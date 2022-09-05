import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <LayoutStyle>
      <Header>
        <SideBar />
      </Header>
      <main>{children}</main>
    </LayoutStyle>
  );
};

let LayoutStyle = styled.div`
  position: relative;
`;
export default Layout;
