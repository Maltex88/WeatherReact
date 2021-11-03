import 'styled-components';
import { DefaultTheme } from 'styled-components';
import colors from '../commons/colors';
export const lightTheme: DefaultTheme = {
    body: `${colors.primaryLight}`,
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
    body: `${colors.primaryDark}`,
    text: '#FAFAFA',
    color: 'white',
    toggleBorder: 'yellow',
    background: 'yellow',

    buttonStyles: {
        primary: 'white',
        secondary: 'black',
    },
};
