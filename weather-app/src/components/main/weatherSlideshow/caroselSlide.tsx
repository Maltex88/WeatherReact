import React from 'react';
import { useEffect } from 'react';
import { getWeatherDataByID } from '../../../api/axiosFetchFunctions';
import { slideShowData } from '../../types';
import { Main, LoadingPlaceHolder, SlideHeader } from './weatherSlideShowStyles';
import { SlideItem } from './slideItem';
import { handleAndFormatTime } from '../../helperFunctions/handleTimeFunctions';
import { gradientColor } from '../../helperFunctions/gradientColor';
import { CardContainerSkeletonLoader, CardInnerSkeletonLoader } from './slideItemStyles';
type SliderProps = {
    continent: string;
    locationIds: string;
};

export const CaroselSlide = ({ continent, locationIds }: SliderProps): JSX.Element => {
    const [SlideshowData, setSlideshowData] = React.useState<slideShowData | null>();
    useEffect(() => {
        (async () => {
            const AxiosWeatherData = await getWeatherDataByID(`${locationIds}`);
            setTimeout(function () {
                setSlideshowData(AxiosWeatherData);
            }, 6000);
        })();
    }, []);
    return (
        <Main>
            <SlideHeader>{continent}</SlideHeader>
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
                <>
                    <CardContainerSkeletonLoader>
                        <CardInnerSkeletonLoader></CardInnerSkeletonLoader>
                    </CardContainerSkeletonLoader>
                    <CardContainerSkeletonLoader>
                        <CardInnerSkeletonLoader></CardInnerSkeletonLoader>
                    </CardContainerSkeletonLoader>
                    <CardContainerSkeletonLoader>
                        <CardInnerSkeletonLoader></CardInnerSkeletonLoader>
                    </CardContainerSkeletonLoader>
                </>
            )}
        </Main>
    );
};
