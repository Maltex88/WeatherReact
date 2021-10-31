import React from 'react';
import { IconContainer } from '../../buttons/info';
import { CardFrontMain, ParagrafCenter, Container, ColumnContainer, Icon, ExtraMarginPara } from './slideItemStyles';
import { IconComp } from '../../../assets/Icon';
import { IoIosSwap } from 'react-icons/io';
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
                <ParagrafCenter>
                    {weatherData.name}, {weatherData.sys.country}
                </ParagrafCenter>
                <ParagrafCenter>{timeData.dayMonthDateFormat}</ParagrafCenter>
                <ParagrafCenter>{timeData.locationTime}</ParagrafCenter>
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
            <ExtraMarginPara className="column">{weatherData.weather[0].description}</ExtraMarginPara>

            <IconContainer onClick={toggle}>
                <IconComp Icon={BsInfoCircle} />
            </IconContainer>
        </CardFrontMain>
    );
};
