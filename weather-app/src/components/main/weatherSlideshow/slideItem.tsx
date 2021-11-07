import * as React from 'react';
import styled from 'styled-components';
import { Props } from '../../types';
import { CardBack } from './slideItemBack';
import { CardFront } from './slideItemFront';
import breakpoint from '../../../commons/breakpoints';
import colors from '../../../commons/colors';

export const SlideItem = ({ timeData, weatherData }: Props): JSX.Element => {
    const [flipped, setFlipped] = React.useState(false);
    const toggler = () => {
        setFlipped(!flipped);
    };
    return (
        <CardContainer>
            <CardInner className={flipped ? 'flipped' : ''}>
                <CardFront toggle={toggler} timeData={timeData} weatherData={weatherData} />
                <CardBack toggle={toggler} timeData={timeData} weatherData={weatherData} />
            </CardInner>
        </CardContainer>
    );
};

export const CardInner = styled.div`
    background-color: ${colors.green};
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
    width: 100%;
    height: 220px;

    display: flex;
    perspective: 1000px;
    transition: z-index 500ms, transform 500ms;
    z-index: 0;
    transform-style: preserve-3d;

    &:flipped {
        z-index: 1;
    }
`;
