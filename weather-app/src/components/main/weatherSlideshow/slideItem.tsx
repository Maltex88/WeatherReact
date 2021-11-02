import * as React from 'react';
import styled from 'styled-components';
import { Props } from '../../types';
import { CardBack } from './slideItemBack';
import { CardFront } from './slideItemFront';
import breakpoint from '../../../commons/breakpoints';

export const SlideItem = ({ weatherColor, timeData, weatherData }: Props): JSX.Element => {
    const [flipped, setFlipped] = React.useState(false);
    const toggler = () => {
        setFlipped(!flipped);
    };
    return (
        <CardContainer>
            <CardInner weatherColor={weatherColor} className={flipped ? 'flipped' : ''}>
                <CardFront toggle={toggler} timeData={timeData} weatherData={weatherData} />
                <CardBack toggle={toggler} timeData={timeData} weatherData={weatherData} />
            </CardInner>
        </CardContainer>
    );
};

interface styleProps {
    weatherColor: string;
}
export const CardInner = styled.div<styleProps>`
    ${(props) => props.weatherColor};
    margin: 0.5rem;
    margin-top: 2.5rem;
    display: flex;
    flex: 1;
    border-radius: 12px;
    transition: transform 500ms;
    transform-style: preserve-3d;
    &.flipped {
        transform: rotateY(180deg);
    }
    @media only screen and ${breakpoint.device.md} {
    }
`;
export const CardContainer = styled.div`
    width: 300px;
    height: 350px;

    display: flex;
    perspective: 1000px;
    transition: z-index 500ms, transform 500ms;
    z-index: 0;
    transform-style: preserve-3d;

    &:flipped {
        z-index: 1;
    }
`;
