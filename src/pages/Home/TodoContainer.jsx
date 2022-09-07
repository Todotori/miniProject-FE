import React from 'react';
import styled from 'styled-components';


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


