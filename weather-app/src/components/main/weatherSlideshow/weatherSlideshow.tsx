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
                <CaroselSlide continent={'Sweden'} locationIds={'2692969,2711537,602150'} />
                <CaroselSlide continent={'Italy'} locationIds={'3169070,3173435,3172394'} />
                <CaroselSlide continent={'France'} locationIds={'2968815,2996944,6454924'} />
            </Carousel>
            <Carousel showThumbs={false} showIndicators={false} infiniteLoop={true} showStatus={false}>
                <CaroselSlide continent={'USA'} locationIds={'5128638,5368361,4699066'} />
                <CaroselSlide continent={'Australia'} locationIds={'2147714,2158177,2174003'} />
                <CaroselSlide continent={'China'} locationIds={'1796236,1816670,1814906'} />
            </Carousel>
        </Main>
    );
};
export default React.memo(WeatherSlideshow);

export const Main = styled.main`
    width: 650px;
    height: 550px;

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
    .carousel .control-arrow,
    .carousel.carousel-slider .control-arrow {
        filter: brightness(15);
    }
`;
