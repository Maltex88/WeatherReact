import * as React from 'react';
import { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
            const AxiosWeatherData = await getWeatherDataByID('2147714,1850147,605155');
            setSlideshowData(AxiosWeatherData);
        })();
    }, []);
    return (
        <Main>
            <Carousel
                showIndicators={false}
                infiniteLoop={true}
                width={900}
                dynamicHeight={false}
                showStatus={false}
                showThumbs={false}
            >
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
                        <LoadingPlaceHolder>
                            <p>hej</p>
                        </LoadingPlaceHolder>
                    )}
                </Main>
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
                        <LoadingPlaceHolder>
                            <p>hej</p>
                        </LoadingPlaceHolder>
                    )}
                </Main>
            </Carousel>
        </Main>
    );
};
