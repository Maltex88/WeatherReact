import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../../commons/breakpoints';
import { useEffect } from 'react';
import { getWeatherDataByID } from '../../../api/axiosFetchFunctions';
import { slideShowData } from '../../types';
import { SlideItem } from './slideItem';
import { handleAndFormatTime } from '../../helperFunctions/handleTimeFunctions';
import { gradientColor } from '../../helperFunctions/gradientColor';

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
    }, []);
    return (
        <Main>
            <SlideHeader>{continent}</SlideHeader>
            {SlideshowData ? (
                SlideshowData.map((x) => {
                    const timeData = handleAndFormatTime(x.sys.timezone, x.sys.sunset, x.sys.sunrise);
                    return <SlideItem key={Math.random()} timeData={timeData} weatherData={x} />;
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

const CardContainerSkeletonLoader = styled.div`
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    @media only screen and ${breakpoint.device.sm} {
        width: 200px;
    }
`;

export const CardInnerSkeletonLoader = styled.div`
    margin: 1rem;
    margin-top: 2.5rem;
    display: flex;
    flex: 1;
    border-radius: 12px;
    border: 3px solid black;
`;
