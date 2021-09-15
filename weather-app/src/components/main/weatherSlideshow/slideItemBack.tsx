import * as React from 'react';
import { CardBackMain, Container, IconContainer } from './slideItemStyles';
import { IconComp, WeatherIcon } from '../../../assets/Icon';
import { IoIosSwap } from 'react-icons/io';
interface Props {
    toggle: () => void;
}
export const CardBack: React.FC<Props> = ({ toggle }) => {
    return (
        <CardBackMain>
            <Container>
                <WeatherIcon icon="wi-sunrise" />
                <WeatherIcon icon="wi-sunset" />
            </Container>
            <Container>
                <WeatherIcon icon="wi-humidity" />
            </Container>
            <Container>
                <WeatherIcon icon="wi-wind-beaufort-0" />
                <WeatherIcon icon="wi-wind towards-360-deg" />
            </Container>

            <IconContainer onClick={toggle}>
                <IconComp Icon={IoIosSwap} />
            </IconContainer>
        </CardBackMain>
    );
};
