import * as React from 'react';
import styled from 'styled-components';

//style
const Main = styled.div`
    border: solid white 3px;
`;
//type
type weatherData = {
    coord: { lon: number; lat: number };
    weather: [{ id: number; main: string; description: string; icon: string }];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
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

export const DailyWeather: React.FC<{ weatherData: weatherData }> = (props): React.ReactElement => {
    console.log(props.weatherData.name);
    return (
        <Main>
            <p>{props.weatherData.name}</p>
        </Main>
    );
};
