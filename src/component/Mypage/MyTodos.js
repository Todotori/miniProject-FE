import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import MyTodo from "./MyTodo";
import Dropdown from "../Layout/Dropdown";
import {__getTodos} from "../../redux/modules/todos";

const Mytodos = ({title}) => {
  const {todos, isLoading} = useSelector((state) => state.todos);
  const tags = useSelector((state) => state.tags);
  console.log(tags);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  const myTodoList = todos.filter((todo) => todo.author === "Junsu"); //나중에는 로그인user정보로 대체.

  const filtering = (arr) => {
    if (arr.includes("전체보기")) return todos;
    let filteredTodoList = todos.filter((todo) => {
      let isInclude = false;
      for (let i = 0; i < todo.tags.length; i++) {
        if (arr.includes(todo.tags[i])) {
          isInclude = true;
          break;
        }
      }
      return isInclude;
    });
    return filteredTodoList;
  };

  const todoList = filtering(tags);
  return (
    <>
      <MyTodosHeader>
        <Title>{title}</Title>
        <Dropdown />
      </MyTodosHeader>
      <Wrapper>
        <>
          {todoList.map((todo, idx) => (
            <MyTodo key={idx} todo={todo} />
          ))}
        </>
      </Wrapper>
    </>
  );
};

export default Mytodos;

const MyTodosHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px auto 50px auto;
`;

const Title = styled.div`
  font-size: calc(1.5rem + 1vw);
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 0px;
  row-gap: 40px;

  padding-bottom: 30px;
`;
