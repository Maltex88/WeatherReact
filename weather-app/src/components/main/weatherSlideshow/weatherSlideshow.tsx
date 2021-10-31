import * as React from 'react';
import { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//styles

import styled from 'styled-components';
import breakpoint from '../../../commons/breakpoints';

import CaroselSlide from './caroselSlide';

const WeatherSlideshow = (): JSX.Element => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [val, toggle] = React.useState(true);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        console.log('im running all the time');
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);
    return (
        <Main>
            <Carousel
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                dynamicHeight={true}
                showStatus={false}
            >
                <CaroselSlide continent={'Europe'} locationIds={'2147714,1850147,605155'} />
                <CaroselSlide continent={'Africa'} locationIds={'2147714,1850147,605155'} />
                <CaroselSlide continent={'Austraila'} locationIds={'2147714,1850147,605155'} />
            </Carousel>
        </Main>
    );
};
export default React.memo(WeatherSlideshow);

export const Main = styled.main`
    display: flex;
    max-width: 900px;
    height: 350px;
    min-height: auto;
    align-self: center;
    flex-wrap: wrap;

    @media only screen and ${breakpoint.device.sm} {
        height: auto;
        width: 600px;
    }
    @media only screen and ${breakpoint.device.ms} {
        height: auto;
        width: 300px;
    }
`;
