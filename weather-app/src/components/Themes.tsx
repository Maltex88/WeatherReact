import 'styled-components';
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
    body: '#9dc7e1',
    color: 'black',
    text: '#061537',
    toggleBorder: '#FFF',
    background: '#363537',

    buttonStyles: {
        primary: '#02182B',
        secondary: 'white',
    },
};

export const darkTheme: DefaultTheme = {
    body: '#0c1445',
    text: '#FAFAFA',
    color: 'white',
    toggleBorder: '#6B8096',
    background: '#999',

    buttonStyles: {
        primary: 'white',
        secondary: 'black',
    },
};
