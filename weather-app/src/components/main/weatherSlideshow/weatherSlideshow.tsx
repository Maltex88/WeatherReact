import * as React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//styles
import { Main } from './weatherSlideShowStyles';

import { CaroselSlide } from './caroselSlide';

const WeatherSlideshow = (): JSX.Element => {
    return (
        <Main>
            <Carousel
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                width={900}
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
