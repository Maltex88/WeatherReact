import 'styled-components';
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
    body: 'white',
    color: 'black',
    text: 'black',
    toggleBorder: 'yellow',
    background: 'yellow',

    buttonStyles: {
        primary: '#143166',
        secondary: 'white',
    },
};

export const darkTheme: DefaultTheme = {
    body: '#04122A',
    text: '#FAFAFA',
    color: 'white',
    toggleBorder: 'yellow',
    background: 'yellow',

    buttonStyles: {
        primary: 'white',
        secondary: 'black',
    },
};
