import * as React from 'react';
import styled from 'styled-components';

type weatherType = {
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
interface weatherInfo {
    info: weatherType;
}

export const DailyWeather: React.FC = (props: { param: any }): React.ReactElement => {
    console.log(props);
    return (
        <div>
            <p>{'hej'}</p>
        </div>
    );
};
