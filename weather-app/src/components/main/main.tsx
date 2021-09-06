import * as React from 'react';
import { useEffect } from 'react';

//Components
import { WeatherSlideshow } from './weatherSlideshow/weatherSlideshow';
import { SearchComponent } from './weatherSearch/searchComponent';
import { DailyWeather } from './weatherSearch/dailyWeatherDisplay';
import { Footer } from '../footer/footer';
import axios, { AxiosRequestConfig } from 'axios';

import { weatherData } from '../types';
import { Main, Loading, BackgroundImg } from './mainStyle';

export const MainContainer: React.FC = (): React.ReactElement => {
    const [weatherDailyData, setweatherDailyData] = React.useState<weatherData | null>();

    const newWeatherSearch = (searchWord: string) => {
        const AxiosOptions: AxiosRequestConfig = {
            method: 'get',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            params: {
                q: `${searchWord}`,
                units: 'metric',
                lang: 'sv',
            },
            headers: {
                'x-rapidapi-key': `${process.env.REACT_APP_GOOGLE_API_KEY}`,
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            },
        };
        axios
            .request(AxiosOptions)
            .then(function (response) {
                console.log(response.data);
                setweatherDailyData(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    useEffect(() => {
        (async () => {
            // const AxiosWeatherData = await getWeatherData('2147714,1850147,2711537,2950158,3169070,5856195');
            //setSlideshowData(AxiosWeatherData.list);
        })();
    }, []);

    return (
        <Main>
            <BackgroundImg>
                {weatherDailyData ? <DailyWeather weatherData={weatherDailyData} /> : <Loading>loading</Loading>}
                <SearchComponent newSearch={newWeatherSearch} />
            </BackgroundImg>
            <WeatherSlideshow />
            <Footer />
        </Main>
    );
};
