import * as React from 'react';
import styled from 'styled-components';

interface Props {
    town?: string;
    weatherData?: any;
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
export const SlideItem: React.FC<Props> = ({ town, weatherData }) => {
    return (
        <Background town={town}>
            <NameTempText>{weatherData.name}</NameTempText>
            <NameTempText>{weatherData.main.temp}</NameTempText>
        </Background>
    );
};
