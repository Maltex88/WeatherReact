import * as React from 'react';
import { useEffect } from 'react';

//styles
import { Main, LoadingPlaceHolder } from './weatherSlideShowStyles';
//Functions

import { handleAndFormatTime } from '../../helperFunctions/handleTimeFunctions';
import { getWeatherDataByID } from '../../../api/axiosFetchFunctions';
import { gradientColor } from '../../helperFunctions/gradientColor';
//Children
import { SlideItem } from './slideItem';

//Types
import { slideShowData } from '../../types';

export const WeatherSlideshow: React.FC = () => {
    const [SlideshowData, setSlideshowData] = React.useState<slideShowData | null>();
    useEffect(() => {
        (async () => {
            const AxiosWeatherData = await getWeatherDataByID('2147714,1850147,605155,2950158,3169070');
            setSlideshowData(AxiosWeatherData);
        })();
    }, []);
    return (
        <Main>
            {SlideshowData ? (
                SlideshowData.map((x) => {
                    const timeData = handleAndFormatTime(x.sys.timezone, x.sys.sunset, x.sys.sunrise);
                    return (
                        <SlideItem
                            key={Math.random()}
                            weatherColor={gradientColor(x.main.temp)}
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
