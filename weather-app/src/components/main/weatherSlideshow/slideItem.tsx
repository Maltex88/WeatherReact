import * as React from 'react';
import styled from 'styled-components';

import { Main, Icon, ParagrafCenter, Container, ColumnContainer, ExtraMarginPara } from './slideItemStyles';
import { Props } from '../../types';
//break out timeData to own interface/type

export const SlideItem: React.FC<Props> = ({ weatherColor, weatherData, timeData }) => {
    return (
        <Main weatherColor={weatherColor}>
            <ParagrafCenter>
                {weatherData.name}, {weatherData.sys.country}
            </ParagrafCenter>
            <ParagrafCenter>{timeData.dayMonthDateFormat}</ParagrafCenter>
            <ParagrafCenter>{timeData.locationTime}</ParagrafCenter>
            <Container>
                <ColumnContainer>
                    <p>
                        {Math.round(weatherData.main.temp)}
                        <i className="wi wi-celsius"></i>
                    </p>
                </ColumnContainer>
                <Icon className={'wi wi-owm-' + timeData?.sunLocation + '-' + weatherData.weather[0].id} />
            </Container>
            <ExtraMarginPara className="column">{weatherData.weather[0].description}</ExtraMarginPara>
        </Main>
    );
};
