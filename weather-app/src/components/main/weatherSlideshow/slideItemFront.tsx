import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../../commons/breakpoints';
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
            <Container className="dayTimeLoc">
                <Paragraf>
                    {weatherData.name}, {weatherData.sys.country}
                </Paragraf>
                <Paragraf>{timeData.dayMonthDateFormat}</Paragraf>
                <Paragraf>{timeData.locationTime}</Paragraf>
            </Container>
            <Container className="iconTemp">
                <ColumnContainer className="temp">
                    <p>
                        {Math.round(weatherData.main.temp)}
                        <i className="wi wi-celsius"></i>
                    </p>
                    <p>
                        {Math.round(weatherData.main.temp_min)}
                        <i className="wi wi-celsius"></i> / {Math.round(weatherData.main.temp_max)}
                        <i className="wi wi-celsius"></i>
                    </p>
                </ColumnContainer>

                <Icon className={'wi wi-owm-' + timeData?.sunLocation + '-' + weatherData.weather[0].id} />
            </Container>
            <p className="column">{weatherData.weather[0].description}</p>

            <IconContainer onClick={toggle}>
                <IconComp Icon={BsInfoCircle} />
            </IconContainer>
        </CardFrontMain>
    );
};

const CardFrontMain = styled.div`
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    z-index: 0;

    .dayTimeLoc {
        display: flex;
        flex-direction: column;
    }

    .iconTemp {
        margin: 0 1rem 2rem;
        .temp {
            p:nth-child(2) {
                font-size: 17px;
            }
        }
    }
`;

export const Paragraf = styled.p`
    text-align: center;

    margin: 5px;
    &:nth-child(1) {
    }

    &:nth-child(3) {
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px;
    text-align: center;
    .column {
        display: flex;
        flex-direction: column;
    }
    &.top {
        margin: 25px 25px 15px 25px;
        p {
            margin-top: 12px;
            display: flex;
            flex-direction: column;
            i {
                margin-bottom: 7px;
            }
        }
    }
    &.middle {
        margin: 20px;
        display: flex;
        justify-content: center;
        i {
            margin: 5px;
        }
    }
    &.bottom {
        i {
            align-self: flex-end;
        }
    }
`;

const ColumnContainer = styled.div`
    flex-direction: column;
`;

const Icon = styled.i`
    font-size: 5vh;
    @media only screen and ${breakpoint.device.sm} {
        font-size: 40px;
    }
`;
