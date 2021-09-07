import * as React from 'react';
import { useEffect } from 'react';

//Components
import { WeatherSlideshow } from './weatherSlideshow/weatherSlideshow';
import { SearchComponent } from './weatherSearch/searchComponent';
import { DailyWeather } from './weatherSearch/dailyWeatherDisplay';
import { Footer } from '../footer/footer';

import { weatherData } from '../types';
import { Main, Loading, BackgroundImg } from './mainStyle';

export const MainContainer: React.FC = (): React.ReactElement => {
    const [weatherDailyData, setweatherDailyData] = React.useState<weatherData | null>();

    return (
        <Main>
            <BackgroundImg>
                {weatherDailyData ? <DailyWeather weatherData={weatherDailyData} /> : <Loading>loading</Loading>}
            </BackgroundImg>
            <WeatherSlideshow />
            <Footer />
        </Main>
    );
};
