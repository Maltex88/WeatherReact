import * as React from 'react';
import {
    Main,
    Icon,
    ParagrafCenter,
    Container,
    ColumnContainer,
    ExtraMarginPara,
    IconContainer,
} from './slideItemStyles';
import { Props } from '../../types';
import { IoIosSwap } from 'react-icons/io';
//break out timeData to own interface/type
import { IconComp, WeatherIcon } from '../../../assets/Icon';
export const SlideItem: React.FC<Props> = ({ weatherColor, weatherData, timeData }) => {
    const [toggle, setToggle] = React.useState<boolean>(true);
    function toggler(): void {
        console.log('triggerd');
        setToggle(!toggle);
    }

    //make 2 dif components, 1 for front and 1 for back
    return (
        <Main weatherColor={weatherColor}>
            {toggle ? (
                <div>
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
                </div>
            ) : (
                <Container>
                    <WeatherIcon icon="wi-sunrise" />
                    <WeatherIcon icon="wi-sunset" />
                    <WeatherIcon icon="wi-humidity" />
                    <WeatherIcon icon="wi-wind-beaufort-0" />
                    <WeatherIcon icon="wi-wind towards-360-deg" />
                </Container>
            )}
            <IconContainer onClick={toggler}>
                <IconComp Icon={IoIosSwap} />
            </IconContainer>
        </Main>
    );
};
