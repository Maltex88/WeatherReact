import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../../commons/breakpoints';
import { useEffect } from 'react';
import { getWeatherDataByID } from '../../../api/axiosFetchFunctions';
import { slideShowData } from '../../types';
import { SlideItem } from './slideItem';
import { handleAndFormatTime } from '../../helperFunctions/handleTimeFunctions';
import { gradientColor } from '../../helperFunctions/gradientColor';
import { CardContainerSkeletonLoader, CardInnerSkeletonLoader } from './slideItemStyles';
type SliderProps = {
    continent: string;
    locationIds: string;
};

const CaroselSlide = ({ continent, locationIds }: SliderProps): JSX.Element => {
    const [SlideshowData, setSlideshowData] = React.useState<slideShowData | null>();
    useEffect(() => {
        (async () => {
            const AxiosWeatherData = await getWeatherDataByID(`${locationIds}`);
            setSlideshowData(AxiosWeatherData);
        })();
        console.log('when do i rerender?');
    }, []);
    return (
        <Main>
            <SlideHeader>{continent}</SlideHeader>
            {SlideshowData ? (
                SlideshowData.map((x) => {
                    const timeData = handleAndFormatTime(x.sys.timezone, x.sys.sunset, x.sys.sunrise);
                    console.log('do i rerejder');
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

export default React.memo(CaroselSlide);

const Main = styled.div`
    display: flex;
    justify-content: center;
    font-size: 12px;

    @media only screen and ${breakpoint.device.md} {
        flex-direction: column;
    }
`;
const SlideHeader = styled.h2`
    position: absolute;
    z-index: 1;
    @media only screen and ${breakpoint.device.md} {
        position: relative;
    }
`;
