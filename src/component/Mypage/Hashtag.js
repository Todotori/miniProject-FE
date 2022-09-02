import React from "react";
import styled from "styled-components";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const Hashtag = () => {
  return (
    <Container>
      <LocalOfferIcon />
      <HashtagName>해시태그</HashtagName>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70%;
  border: 1px solid #c0b3a9;
  border-radius: 15px;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;
const HashtagName = styled.div`
  margin-left: 10px;
  font-size: calc(0.1rem + 0.4vw);
  overflow: hidden;
`;

export default Hashtag;
