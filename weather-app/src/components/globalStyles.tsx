import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    main {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.color};
        transition: all 0.50s linear;
    }
    header {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.color};
        transition: all 0.50s linear;
    }
    footer {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.color};
        transition: all 0.50s linear;
    }
    `;
