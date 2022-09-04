import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;

/*****************************/
/** 02. mainWrap *************/
/*****************************/
const MainWrap = styled.div`
  width: 600px;
  margin: 150px auto 0 auto;
`;

/* 02-2[1] : 드롭다운 */
const DropDown = styled.div`
  background-color: aqua;
`;

/*****************************/
/** 02-3: todoList ***********/
/*****************************/

export { Main, MainWrap, DropDown };
