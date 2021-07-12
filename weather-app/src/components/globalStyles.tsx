import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.color};
        transition: all 0.50s linear;
    }
    button {
        background: ${({ theme }) => theme.buttonStyles.primary};
        color: ${({ theme }) => theme.buttonStyles.secondary};
        padding: 10px 24px;
        border: 1px solid #143166;
        font-size: 17px;
        &:focus {
            outline-style: none;
            border: 1px solid white;
        }
    }
    input {
        margin: 5px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid white;
        text-indent: 5%;
        font-size: 17px;
        &:focus {
            outline-style: none;
            border: 1px solid black;
        }
    }
    `;

//font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
