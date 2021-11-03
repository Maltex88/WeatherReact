import * as React from 'react';
import styled from 'styled-components';
import { RiSunFill } from 'react-icons/ri';
import { RiMoonFill } from 'react-icons/ri';
import { useState } from 'react';

import { ReactComponent as Logotype } from '../../assets/Icon.svg';
import { ReactComponent as Moon } from '../../assets/Moon.svg';
import { ReactComponent as Sun } from '../../assets/Sun.svg';

const Button = styled.button`
    padding: 0.5rem;
`;

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
                    changeTheme(), NightorDay();
                }}
            >
                {iconToggle ? <RiSunFill color="yellow" size="30px" /> : <RiMoonFill color="yellow" size="30px" />}
            </Button>
            <ContainerAbsolute>{iconToggle ? <Moon /> : <Sun />}</ContainerAbsolute>
        </Main>
    );
};
const Main = styled.header`
    padding: 1rem;
    min-height: 7.5vh;
`;

const ContainerAbsolute = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
`;
