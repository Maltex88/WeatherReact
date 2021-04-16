import * as React from 'react';
import styled from 'styled-components';
import { RiSunFill } from 'react-icons/ri';
import { RiMoonFill } from 'react-icons/ri';
import { useState } from 'react';
const Head = styled.div`
    min-height: 7.5vh;
    border: solid white 3px;
`;

const Button = styled.button`
    padding: 0.5rem;
    border: 2px solid black;
    background-color: rgba(0, 0, 0, 0);
`;

interface funcProps {
    displayArg(): void;
}

export const Header: React.FC<funcProps> = (props) => {
    const [iconToggle, setIconToggle] = useState(true);

    const NightorDay = (): void => {
        iconToggle === true ? setIconToggle(false) : setIconToggle(true);
        console.log(iconToggle);
    };

    return (
        <Head>
            <Button
                onClick={() => {
                    props.displayArg(), NightorDay();
                }}
            >
                {iconToggle ? <RiSunFill color="yellow" size="30px" /> : <RiMoonFill color="yellow" size="30px" />}
            </Button>
        </Head>
    );
};
