import * as React from 'react';
import styled from 'styled-components';

interface Props {
    town?: string;
    weatherData?: any;
    timeData?: {
        locationTime?: string;
        rise?: string;
        set?: string;
        sunLocation: string;
    };
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
const Test = styled.i`
    color: green;
`;

export const SlideItem: React.FC<Props> = ({ town, weatherData, timeData }) => {
    return (
        <Background town={town}>
            <p>{timeData?.locationTime}</p>
            <Test className={'wi wi-owm-' + timeData?.sunLocation + '-' + weatherData.weather[0].id}></Test>
            <NameTempText>{weatherData.name}</NameTempText>
            <NameTempText>
                {Math.round(weatherData.main.temp)}
                <i className={'wi wi-celsius'}></i>
            </NameTempText>
        </Background>
    );
};
