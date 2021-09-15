import * as React from 'react';
import { CardContainer, CardInner } from './slideItemStyles';
import { Props } from '../../types';
import { CardBack } from './slideItemBack';
import { CardFront } from './slideItemFront';
export const SlideItem: React.FC<Props> = ({ weatherColor, timeData, weatherData }) => {
    const [flipped, setFlipped] = React.useState(false);
    const toggler = () => {
        setFlipped(!flipped);
    };
    return (
        <CardContainer>
            <CardInner weatherColor={weatherColor} className={flipped ? 'flipped' : ''}>
                <CardFront toggle={toggler} timeData={timeData} weatherData={weatherData} />
                <CardBack toggle={toggler} />
            </CardInner>
        </CardContainer>
    );
};
