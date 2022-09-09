import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyle = createGlobalStyle`

    ${reset};
    *, *::before, *::after {
        box-sizing: border-box;
        font-family: Gothic A1;
      };
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    // button{
    //     display: flex;
    //     cursor: pointer;
    //     outline: none;
    //     background-color: none;
    //     border-radius: 3px;
    // };
    // input{
    //     display: flex;
    //     outline: none;
    //     padding-left: 10px;
    // }
`;

export default GlobalStyle;
