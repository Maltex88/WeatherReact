import * as React from 'react';
import styled from 'styled-components';
import { IoLocationSharp } from 'react-icons/io5';
import { Main, Container } from './slideItemStyles';

//break out timeData to own interface/type
interface Props {
    weatherData?: any;
    timeData?: {
        locationTime?: string;
        rise?: string;
        set?: string;
        sunLocation: string;
    };
    BackgroundSkyImg: string;
}

const Paragraf = styled.p``;
const Paragraf1 = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 25px;
`;
const Icon = styled.i`
    display: flex;
    justify-content: center;
    font-size: 55px;
`;

export const SlideItem: React.FC<Props> = ({ BackgroundSkyImg, weatherData, timeData }) => {
    return (
        <Main BackgroundSkyImg={BackgroundSkyImg}>
            <Container>
                <Paragraf>{timeData?.locationTime}</Paragraf>
                <Paragraf>
                    {Math.round(weatherData.main.temp)}
                    <i className={'wi wi-celsius'}></i>
                </Paragraf>
            </Container>
            <Icon className={'wi wi-owm-' + timeData?.sunLocation + '-' + weatherData.weather[0].id} />
            <Paragraf1>{weatherData.name}</Paragraf1>
            <Container>
                <Paragraf1>
                    <i className={'wi wi-sunrise'}></i>
                    {timeData?.rise}
                </Paragraf1>
                <Paragraf1>
                    <i className={'wi wi-sunset'}></i>
                    {timeData?.set}
                </Paragraf1>
            </Container>
        </Main>
    );
};
