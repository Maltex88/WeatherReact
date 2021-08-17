import * as React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

//Functions
import { CheckForImg } from '../../helperFunctions/returnTownImg';
import { timeFormatHHMM, checkIfSunrise } from '../../helperFunctions/handleTimeFunctions';
import { GetDataforSlideshow } from './slideShowFunctions';

//Children
import { SlideItem } from './slideItem';

//Types
import { slideShowData } from '../../types';

const Main = styled.div`
    display: flex;
    height: auto;
`;
const LoadingPlaceHolder = styled.div`
    height: 50vh;
    width: 30vh;
    border-radius: 12px;
    margin: 15px;
    border: 2px solid black;
`;

export const WeatherSlideshow: React.FC = () => {
    const [SlideshowData, setSlideshowData] = React.useState<slideShowData | null>();

    useEffect(() => {
        (async () => {
            const AxiosWeatherData = await GetDataforSlideshow('2950158,3169070,5856195');
            console.log(AxiosWeatherData.list);
            setSlideshowData(AxiosWeatherData.list);
        })();
    }, []);
    return (
        <Main>
            {SlideshowData ? (
                SlideshowData.map((x) => {
                    const townImg = CheckForImg(x.name);
                    const [time, rise, set] = timeFormatHHMM(x.sys.timezone, x.sys.sunset, x.sys.sunrise);
                    const sunDown = checkIfSunrise(x.sys.timezone, x.sys.sunset, x.sys.sunrise);
                    return (
                        <SlideItem
                            key={Math.random()}
                            time={time}
                            rise={rise}
                            set={set}
                            town={townImg}
                            weatherData={x}
                        />
                    );
                })
            ) : (
                <LoadingPlaceHolder />
            )}
        </Main>
    );
};
