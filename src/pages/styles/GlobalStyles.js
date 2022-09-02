import { createGlobalStyle } from 'styled-components';
import Globalstyle from './GlobalStyles.js';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    *, *::before, *::after {
        box-sizing: border-box;
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
