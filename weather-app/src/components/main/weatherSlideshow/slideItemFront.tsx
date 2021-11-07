import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../../commons/breakpoints';
import Size from '../../../commons/font';
import { IconContainer } from '../../buttons/info';
import { IconComp } from '../../../assets/Icon';
import { BsInfoCircle } from 'react-icons/bs';
import { timeData, weatherData } from '../../types';

interface Props {
    weatherData: weatherData;
    timeData: timeData;
    toggle: () => void;
}
export const CardFront = ({ timeData, weatherData, toggle }: Props): JSX.Element => {
    return (
        <CardFrontMain>
            <Container>
                <Paragraf>{weatherData.name}</Paragraf>
                <Paragraf className="clock">{timeData.locationTime}</Paragraf>
                <Paragraf>{timeData.dayMonthDateFormat}</Paragraf>
            </Container>

            <Container>
                <ColumnContainer>
                    <WeatherInfo>{weatherData.weather[0].description}</WeatherInfo>
                    <Icon className={'wi wi-owm-' + timeData?.sunLocation + '-' + weatherData.weather[0].id} />
                </ColumnContainer>
                <ColumnContainer>
                    <Paragraf className="temp">
                        {Math.round(weatherData.main.temp)}
                        <i className="wi wi-celsius"></i>
                    </Paragraf>
                    <IconContainer onClick={toggle}>
                        <IconComp Icon={BsInfoCircle} />
                    </IconContainer>
                </ColumnContainer>
            </Container>
        </CardFrontMain>
    );
};

const CardFrontMain = styled.div`
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;

    & .temp {
        position: relative;
        bottom: 3.5px;
        font-size: ${Size.XL};
        font-weight: bold;
        i {
            font-size: ${Size.XL};
            font-weight: bold;
        }
    }
    & .clock {
        font-size: ${Size.L};
        font-weight: bold;
    }
`;
const ColumnContainer = styled.div``;

const WeatherInfo = styled.p`
    align-self: center;
    font-size: ${Size.L};
    font-weight: bold;
`;
export const Paragraf = styled.p`
    line-height: 1.4;
`;
export const Container = styled.div`
    margin: 10px 10px 0 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Icon = styled.i`
    position: relative;
    top: 15px;
    font-size: 55px;
`;
