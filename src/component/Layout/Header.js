import React from "react";
import SideBar from "./SideBar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import logo from "../../image/mainlogo.png";

const Header = () => {
  const [spreadNav, setSpreadNav] = React.useState(false); // 네비바를 여는 스테이트.
  const [isView, setIsView] = React.useState(false); // 내부 값을 보이게 하는 스테이트.

  const onClick = () => {
    setSpreadNav((props) => !props);
    setTimeout(() => setIsView((props) => !props), 350);
  };

  return (
    <HeaderWrapper>
      <MenuButton onClick={onClick}>
        {!spreadNav ? (
          <MenuIcon fontSize="large" />
        ) : (
          <CloseIcon fontSize="large" />
        )}
      </MenuButton>
      <SideBar spreadNav={spreadNav} isView={isView} />
      <Logo src={logo} alt="logo" />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  background-color: rgba(192, 188, 185, 0.8);
  height: 10%;
  z-index: 1000000;
`;

const MenuButton = styled.div`
  position: absolute;
  left: 15px;
  top: 20px;
  z-index: 1000000;
`;

const Logo = styled.img`
  width: 260px;
  height: 50px;
  position: absolute;
  right: 50px;
  top: 10px;
`;

export default Header;
