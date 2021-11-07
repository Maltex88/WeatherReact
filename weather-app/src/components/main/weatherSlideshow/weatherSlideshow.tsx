import * as React from 'react';
import styled from 'styled-components';
import breakpoint from '../../../commons/breakpoints';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

import CaroselSlide from './caroselSlide';

const WeatherSlideshow = (): JSX.Element => {
    return (
        <Main>
            <Carousel showThumbs={false} showIndicators={false} infiniteLoop={true} showStatus={false}>
                <CaroselSlide continent={'Europe'} locationIds={'2147714,1850147,605155'} />
                <CaroselSlide continent={'Africa'} locationIds={'2147714,1850147,605155'} />
                <CaroselSlide continent={'Austraila'} locationIds={'2147714,1850147,605155'} />
            </Carousel>
        </Main>
    );
};
export default React.memo(WeatherSlideshow);

export const Main = styled.main`
    & .carousel .slider-wrapper {
        width: 650px;
    }
    @media only screen and ${breakpoint.device.sm} {
        height: auto;
        width: 600px;
    }
    @media only screen and ${breakpoint.device.ms} {
        height: auto;
        width: 300px;
    }
`;
