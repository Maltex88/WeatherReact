import 'styled-components';
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
    body: '#E2EAFC',
    color: 'black',
    text: '#061537',
    toggleBorder: '#FFF',
    background: '#363537',

    buttonStyles: {
        primary: 'black',
        secondary: 'white',
    },
};

export const darkTheme: DefaultTheme = {
    body: '#363537',
    text: '#FAFAFA',
    color: 'yellow',
    toggleBorder: '#6B8096',
    background: '#999',

    buttonStyles: {
        primary: 'white',
        secondary: 'black',
    },
};
