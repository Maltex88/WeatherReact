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
    width: 650px;
    height: 250px;

    @media only screen and ${breakpoint.device.sm} {
        height: auto;
        width: 600px;
    }
    @media only screen and ${breakpoint.device.ms} {
        height: auto;
        width: 300px;
    }

    & .carousel .slider-wrapper {
        height: 240px;
        width: 650px;
    }

    .carousel.carousel-slider .control-arrow {
        top: 36px;
        opacity: 1;
        width: 50px;
    }
    .carousel .control-next.control-arrow {
        right: 220px;
    }
    .carousel .control-prev.control-arrow {
        left: 220px;
    }
`;
