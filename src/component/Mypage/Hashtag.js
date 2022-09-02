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
  height: 30px;
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
  font-size: calc(0.01em + 0.5vw);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default Hashtag;
