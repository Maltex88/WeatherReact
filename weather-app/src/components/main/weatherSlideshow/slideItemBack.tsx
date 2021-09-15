import * as React from 'react';
import { useEffect } from 'react';
import { windInfo } from '../../helperFunctions/beaufortFunc';
import { CardBackMain, Container, IconContainer } from './slideItemStyles';
import { IconComp, WeatherIcon } from '../../../assets/Icon';
import { IoIosSwap } from 'react-icons/io';
import { timeData, weatherData } from '../../types';
import { levelOfBeaufort } from '../../helperFunctions/beaufortFunc';
interface Props {
    weatherData: weatherData;
    timeData: timeData;
    toggle: () => void;
}
export const CardBack: React.FC<Props> = ({ weatherData, timeData, toggle }) => {
    const [windDescription, setWindDescription] = React.useState<windInfo | null>();
    useEffect(() => {
        setWindDescription(levelOfBeaufort(weatherData.wind.speed));
    }, []);
    return (
        <CardBackMain>
            {windDescription ? (
                <>
                    <Container>
                        <p>
                            <WeatherIcon icon="wi-sunrise" />
                            {timeData.rise}
                        </p>
                        <p>
                            <WeatherIcon icon="wi-sunset" />
                            {timeData.set}
                        </p>
                    </Container>
                    <Container>
                        <p>
                            <WeatherIcon icon="wi-humidity" />
                            {weatherData.main.humidity}
                        </p>
                    </Container>
                    <Container>
                        <WeatherIcon icon={`wi-wind-beaufort-${windDescription.lvl}`} />
                        <p>{windDescription.description}</p>
                        <WeatherIcon icon={`wi-wind towards-${weatherData.wind.deg}-deg`} />
                    </Container>

                    <IconContainer onClick={toggle}>
                        <IconComp Icon={IoIosSwap} />
                    </IconContainer>
                </>
            ) : (
                <p>Load</p>
            )}
        </CardBackMain>
    );
};
