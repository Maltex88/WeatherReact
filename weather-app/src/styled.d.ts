//req when using themes and global styles with styled components
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string;
        text: string;
        color: string;
        toggleBorder: string;
        background: string;

        buttonStyles: {
            primary: string;
            secondary: string;
        };
    }
}