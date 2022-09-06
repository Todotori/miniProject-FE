import React from 'react';
import styled from 'styled-components';

import {MdTag} from 'react-icons/md';
import {BsCheckCircleFill} from 'react-icons/bs';

const TodoContainer = () => {
    return (
        <TodoListContainer>
            <TodoDesc>
                <BsCheckCircleFill/>
                <TodoTitle>
                    <h3>밥먹기</h3>
                    <span>소고기 궈먹어야지~</span>
                </TodoTitle>
            </TodoDesc>

            <TodoTag>
                <MdTag/>
                <span>상수리나무_디자인팀</span>
            </TodoTag>
        </TodoListContainer>
    );
};

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


