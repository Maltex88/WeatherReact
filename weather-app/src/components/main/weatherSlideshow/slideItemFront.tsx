import * as React from 'react';
import {
    CardFrontMain,
    ParagrafCenter,
    Container,
    IconContainer,
    ColumnContainer,
    Icon,
    ExtraMarginPara,
} from './slideItemStyles';
import { IconComp } from '../../../assets/Icon';
import { IoIosSwap } from 'react-icons/io';
import { timeData, weatherData } from '../../types';
interface Props {
    weatherData: weatherData;
    timeData: timeData;
    toggle: () => void;
}
export const CardFront: React.FC<Props> = ({ timeData, weatherData, toggle }) => {
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
                <IconComp Icon={IoIosSwap} />
            </IconContainer>
        </CardFrontMain>
    );
};
