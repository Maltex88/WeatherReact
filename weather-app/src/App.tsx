import * as React from 'react';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainContainer } from './components/main/main';

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';

const App: React.FC = (): React.ReactElement => {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Header displayArg={themeToggler} />
            <MainContainer />
        </ThemeProvider>
    );
};

export default App;
