import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;
    }

    :root {

        --white: #ffffffff;
        --lightblue-home: #f5f7fa;
        --lightblue-result:#f7f9fa;
        --lightblue-border: #d8e1e8;
        --blue-h2: #4178bc;
        --blue-p: #7db0f0;
        --blue-span: #629fec;
        --blue-input: #eff2f4;
        --blue-inputfocus: #c6e1f7;
        --gray-input: #575757;
        --gray-h1: #656565;
        --gray-label: #969696;
        --gray-span: #d1d1d1;

    }

    body {
        color: var(--white);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--lightblue-home);
    }

    ul{
        list-style: none;
    }
`;

export default GlobalStyle;
