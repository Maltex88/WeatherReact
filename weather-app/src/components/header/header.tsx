import * as React from 'react';
import styled from 'styled-components';

import { useState } from 'react';

import { ReactComponent as Logotype } from '../../assets/Icon.svg';
import { ReactComponent as Moon } from '../../assets/Moon.svg';
import { ReactComponent as Sun } from '../../assets/Sun.svg';
import { ReactComponent as BtnMoon } from '../../assets/buttonMoonIcon.svg';
import { ReactComponent as BtnSun } from '../../assets/buttonSunIcon.svg';

interface funcProps {
    changeTheme(): void;
}

export const Header = ({ changeTheme }: funcProps): JSX.Element => {
    const [iconToggle, setIconToggle] = useState(true);

    const NightorDay = () => {
        iconToggle === true ? setIconToggle(false) : setIconToggle(true);
    };

    return (
        <Main>
            <Logotype />
            <Button
                onClick={() => {
                    changeTheme();
                    NightorDay();
                }}
            >
                {iconToggle ? <BtnSun /> : <BtnMoon />}
            </Button>
            <ContainerAbsolute>{iconToggle ? <Moon /> : <Sun />}</ContainerAbsolute>
        </Main>
    );
};
const Main = styled.header`
    display: flex;
    padding: 1rem;
    min-height: 7.5vh;
`;

const ContainerAbsolute = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 90px;
    margin: auto;
    border-radius: 15px;
`;
