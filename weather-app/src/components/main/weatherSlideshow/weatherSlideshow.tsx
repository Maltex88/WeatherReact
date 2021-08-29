import * as React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

//styles
import { Main, LoadingPlaceHolder } from './weatherSlideShowStyles';
//Functions
import { DayOrNight } from '../../helperFunctions/returnTownImg';
import { handleAndFormatTime } from '../../helperFunctions/handleTimeFunctions';
import { GetDataforSlideshow } from './slideShowFunctions';

//Children
import { SlideItem } from './slideItem';

//Types
import { slideShowData } from '../../types';

export const WeatherSlideshow: React.FC = () => {
    const [SlideshowData, setSlideshowData] = React.useState<slideShowData | null>();
    useEffect(() => {
        (async () => {
            const AxiosWeatherData = await GetDataforSlideshow('2147714,1850147,2711537,2950158,3169070,5856195');
            setSlideshowData(AxiosWeatherData.list);
        })();
    }, []);
    return (
        <Main>
            {SlideshowData ? (
                SlideshowData.map((x) => {
                    const timeData = handleAndFormatTime(x.sys.timezone, x.sys.sunset, x.sys.sunrise);
                    const BackgroundSkyImg = DayOrNight(timeData.sunLocation);
                    return (
                        <SlideItem
                            key={Math.random()}
                            BackgroundSkyImg={BackgroundSkyImg}
                            timeData={timeData}
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
