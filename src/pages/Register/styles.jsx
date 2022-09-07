import styled from "styled-components";

const RegisterContainer = styled.div`
  background-color: rgb(184, 170, 159);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 600px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 30px;

  & > button {
    width: 100%;
    padding: 20px;
    font-size: 1.2rem;
    border: none;
    background-color: rgb(98, 86, 78);
    border-radius: 100px;
    color: white;
    cursor: pointer;
    transition: opacity .3s;

    &:hover {
      opacity: 0.8;
    }
  }
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Form = styled.div``;

const FormField = styled.div`
  display: flex;
  margin-bottom: 10px;

  input, textarea {
    padding: 12px;
    border-radius: 5px;
    border: 1px solid gray;
    width: 100%;
    font-size: 1.2rem;
    font-family: inherit;
  }

  textarea {
    resize: none;
  }

  button {
    border: none;
    margin-left: 10px;
    width: 100px;
    background-color: rgb(98, 86, 78);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: opacity .3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const LoginLink = styled.div`
  margin: 30px auto;
  text-align: center;
`;

export {RegisterContainer, FormContainer, Logo, Form, FormField, LoginLink};