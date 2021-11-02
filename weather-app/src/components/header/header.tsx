import * as React from 'react';
import styled from 'styled-components';
import { RiSunFill } from 'react-icons/ri';
import { RiMoonFill } from 'react-icons/ri';
import { useState } from 'react';
const Head = styled.div`
    min-height: 7.5vh;
`;

const Button = styled.button`
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0);
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
        <Head>
            <Button
                onClick={() => {
                    changeTheme(), NightorDay();
                }}
            >
                {iconToggle ? <RiSunFill color="yellow" size="30px" /> : <RiMoonFill color="yellow" size="30px" />}
            </Button>
        </Head>
    );
};
