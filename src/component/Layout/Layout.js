import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <LayoutStyle>
      <Header></Header>
      <main>{children}</main>
    </LayoutStyle>
  );
};

let LayoutStyle = styled.div`
  position: relative;
`;
export default Layout;
