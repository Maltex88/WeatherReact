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
                    <Container className="top">
                        <section>
                            <h4>Sunrise</h4>
                            <p>
                                <WeatherIcon icon="wi-sunrise" />
                                {timeData.rise}
                            </p>
                        </section>
                        <section>
                            <h4>Sunset</h4>
                            <p>
                                <WeatherIcon icon="wi-sunset" />
                                {timeData.set}
                            </p>
                        </section>
                    </Container>
                    <Container className="middle">
                        <section>
                            <h4>Humidity</h4>
                            <p>
                                {weatherData.main.humidity}
                                <WeatherIcon icon="wi-humidity" />
                            </p>
                        </section>
                    </Container>
                    <Container className="bottom">
                        <WeatherIcon icon={`wi-wind-beaufort-${windDescription.lvl}`} />
                        <h4>{windDescription.description}</h4>
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
