import React from 'react';
import styled from 'styled-components';

const Welcome = () => {
  return (
    <WelcomeMain>
      <h1>어서오세요, 김도토리님</h1>
      <span>할 일이 30개 남았어요</span>
    </WelcomeMain>
  );
};

const WelcomeMain = styled.div`
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

export default Welcome;
