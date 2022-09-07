import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../../component/Layout/Layout';
import Welcome from './Welcome';
import AddTodo from './AddTodo.jsx';
import MyTodos from '../../component/Mypage/MyTodos';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigator = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('access_token');
    if (!token) {
      navigator('/login');
    }
  }, [navigator]);

  return (
    <Layout>
      <Main>
        <MainWrap>
          <Welcome />
          <AddTodo />
          <MyTodos title={'Todolist'} />
        </MainWrap>
      </Main>
    </Layout>
  );
};

const Main = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
`;

const MainWrap = styled.div`
  width: 600px;
  margin: 150px auto 0 auto;
`;

export default Home;
