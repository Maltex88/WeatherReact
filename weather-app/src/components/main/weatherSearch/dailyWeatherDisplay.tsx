import * as React from 'react';
import styled from 'styled-components';
import { weatherData } from '../../types';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // import plugin
dayjs.extend(utc);

//style
const Main = styled.div`
    border: solid white 3px;
    min-height: 10vh;
`;

export const DailyWeather: React.FC<{ weatherData: weatherData }> = (props): React.ReactElement => {
    const time = dayjs()
        .utcOffset(props.weatherData.timezone / 3600)
        .format('HH:mm');

    return (
        <Main>
            <p>{time}</p>
            <p>{props.weatherData.name}</p>
            <p>{props.weatherData.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`} />

            <p>{props.weatherData.main.temp} C</p>
        </Main>
    );
};
