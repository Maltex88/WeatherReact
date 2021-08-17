import * as React from 'react';
import styled from 'styled-components';

interface Props {
    town?: string;
    weatherData?: any;
    key?: number;
    time?: string;
    rise?: string;
    set?: string;
}
const Background = styled.div<Props>`
    background-image: url(${(props) => props.town});
    background-size: cover;
    height: 50vh;
    width: 30vh;
    border-radius: 12px;
    margin: 15px;
`;
const NameTempText = styled.p`
    color: white;
    font-size: 25px;
    margin: 20px;
`;
export const SlideItem: React.FC<Props> = ({ town, weatherData, time }) => {
    return (
        <Background town={town}>
            <p>{time}</p>
            <i className={'wi wi-owm-' + weatherData.weather[0].id}></i>
            <NameTempText>{weatherData.name}</NameTempText>
            <NameTempText>{Math.round(weatherData.main.temp)}</NameTempText>
        </Background>
    );
};
