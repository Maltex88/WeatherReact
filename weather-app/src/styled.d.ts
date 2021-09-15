//styled.d.ts naming and declaration for module styled components, ts cant read modules from js librarys without it
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