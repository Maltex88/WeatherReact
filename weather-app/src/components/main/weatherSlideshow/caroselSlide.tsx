import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../../commons/breakpoints';
import size from '../../../commons/font';
import { useEffect } from 'react';
import { getWeatherDataByID } from '../../../api/axiosFetchFunctions';
import { slideShowData } from '../../types';
import { SlideItem } from './slideItem';
import { handleAndFormatTime } from '../../helperFunctions/handleTimeFunctions';

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
            <HeadContainer>
                <SlideHeader>{continent}</SlideHeader>
            </HeadContainer>
            <BodyContainer>
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
            </BodyContainer>
        </Main>
    );
};

export default React.memo(CaroselSlide);

const BodyContainer = styled.div`
    display: flex;
    align-items: center;
    height: 220px;
`;
const HeadContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 29px;
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and ${breakpoint.device.md} {
        flex-direction: column;
    }
`;
const SlideHeader = styled.h2`
    align-self: center;
    font-size: 24px;
    @media only screen and ${breakpoint.device.md} {
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
