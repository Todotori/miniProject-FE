import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  width: 100%;
  background-color: beige;
  margin: auto;
`;

/*****************************/
/** 01. nav            ******/
/*****************************/
const NavContainer = styled.div`
  width: 20%;
  height: 100vh;
  background-color: teal;
`;

/*****************************/
/** 02. mainWrap *************/
/*****************************/
const MainWrap = styled.div`
  width: 600px;
  margin: 150px auto 0 auto;
`;

/*****************************/
/** 02-1.header         *****/
/*****************************/
const Header = styled.div`
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

/*****************************/
/** 02-2. wrapTodo(Section) **/
/*****************************/
const TodoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const AddTodo = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  & > span {
    margin-left: 16px;
  }
`;

/* 02-2[1] : 드롭다운 */
const DropDown = styled.div`
  background-color: aqua;
`;

/*****************************/
/** 02-3: todoList ***********/
/*****************************/
const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  padding: 1rem;
  border: 1px solid black;
`;

const TodoTitle = styled.div`
  width: 100%;
  margin-left: 1.875rem;
  & > h3 {
    font-size: 24px;
    font-weight: 700;
    color: red;
    margin-bottom: 12px;
  }

  & > span {
    font-size: 1.25rem;
    color: blue;
  }
`;

const TodoDesc = styled.div`
  display: flex;
`;

const TodoTag = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  font-size: 14px;
`;

export { Main, NavContainer, MainWrap, Header, TodoWrap, AddTodo, DropDown, TodoListContainer, TodoTitle, TodoDesc, TodoTag };
