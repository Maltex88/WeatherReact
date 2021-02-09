import * as React from 'react';
import styled from 'styled-components';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainContainer } from './components/main/Main';

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';

const Button = styled.button`
    padding: 0.5rem;
    border: none;
`;

const App: React.FC = (): React.ReactElement => {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Header />
            <MainContainer />
            <Button onClick={themeToggler}>Switch Theme</Button>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
