import * as React from 'react';
import styled from 'styled-components';
import { DailyWeather } from './dailyWeatherDisplay';
import axios, { AxiosRequestConfig } from 'axios';
import { maxHeaderSize } from 'http';

//styles
const Main = styled.div`
    min-height: 85vh;
`;

//types
type callbackBody = {
    coord: { lon: number; lat: number };
    weather: [{ id: number; main: string; description: string; icon: string }];
    base: string;
    main: { temp: number; feels_like: number; temp_min: number; temp_max: number; pressure: number; humidity: number };
    visibility: number;
    wind: { speed: number; deg: number };
    clouds: { all: number };
    dt: number;
    sys: { type: number; id: number; country: string; sunrise: number; sunset: number };
    timezone: number;
    id: number;
    name: string;
    cod: number;
};
const body: callbackBody = {
    coord: { lon: -0.1257, lat: 51.5085 },
    weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
    base: 'stations',
    main: { temp: 282.5, feels_like: 281.16, temp_min: 281.48, temp_max: 283.15, pressure: 1034, humidity: 43 },
    visibility: 10000,
    wind: { speed: 2.57, deg: 270 },
    clouds: { all: 42 },
    dt: 1618304641,
    sys: { type: 1, id: 1414, country: 'GB', sunrise: 1618290519, sunset: 1618339974 },
    timezone: 3600,
    id: 2643743,
    name: 'London',
    cod: 200,
};

const options: AxiosRequestConfig = {
    method: 'get',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
        q: 'London,uk',
        lat: '0',
        lon: '0',
        callback: 'body',
        id: '2172797',
        lang: 'null',
        units: '"metric" or "imperial"',
        mode: 'xml, html',
    },
    headers: {
        'x-rapidapi-key': `${process.env.REACT_APP_GOOGLE_API_KEY}`,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    },
};

const makeRequest = () => {
    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
};
interface testing {
    firstname: string;
    lastname: string;
}
const testingObj: testing = {
    firstname: 'henrik',
    lastname: 'nilsson',
};
export const MainContainer: React.FC = (): React.ReactElement => {
    return (
        <Main>
            <div>
                <button onClick={makeRequest}>Click me!</button>
                <input></input>
            </div>
            <DailyWeather bajs={testingObj} />
        </Main>
    );
};
