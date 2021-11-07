import 'styled-components';
import { DefaultTheme } from 'styled-components';
import colors from '../commons/colors';
export const lightTheme: DefaultTheme = {
    body: `${colors.primaryLight}`,
    color: 'white',
    text: 'black',
    toggleBorder: 'yellow',
    background: 'yellow',

    buttonStyles: {
        primary: `${colors.primaryDark}`,
        secondary: `${colors.black}`,
    },
};

export const darkTheme: DefaultTheme = {
    body: `${colors.primaryDark}`,
    text: '#FAFAFA',
    color: 'white',
    toggleBorder: 'yellow',
    background: 'yellow',

    buttonStyles: {
        primary: `${colors.primaryLight}`,
        secondary: `${colors.white}`,
    },
};
