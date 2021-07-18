import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { WeatherSlideshow } from './weatherSlideshow/weatherSlideshow';
import { SearchComponent } from './searchComponent';
import { DailyWeather } from './dailyWeatherDisplay';
import axios, { AxiosRequestConfig } from 'axios';
import { weatherData } from '../types';

const Main = styled.div`
    min-height: 85vh;
`;
const Loading = styled.div`
    min-height: 10vh;
`;

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
        //  newWeatherSearch('Göteborg');
    }, []);

    return (
        <Main>
            <WeatherSlideshow />
            <SearchComponent newSearch={newWeatherSearch} />

            {weatherDailyData ? <DailyWeather weatherData={weatherDailyData} /> : <Loading>loading</Loading>}
        </Main>
    );
};
