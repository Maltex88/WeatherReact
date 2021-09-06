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
import { IconComp } from '../../../assets/Icon';
export const SlideItem: React.FC<Props> = ({ weatherColor, weatherData, timeData }) => {
    const [toggle, setToggle] = React.useState<boolean>(true);
    function toggler(): any {
        console.log('triggerd');
        setToggle(!toggle);
    }

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
                <p>hej</p>
            )}
            <IconContainer onClick={toggler}>
                <IconComp Icon={IoIosSwap} />
            </IconContainer>
        </Main>
    );
};
