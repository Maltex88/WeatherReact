import * as React from 'react';
import styled from 'styled-components';
import size from '../../commons/font';
//Components
import WeatherSlideshow from './weatherSlideshow/weatherSlideshow';
import { SearchComponent } from './weatherSearch/searchComponent';

//TODO find better solution for info icon and refactor and delete icon comp in assets
export const MainContainer = (): JSX.Element => {
    return (
        <Main>
            {/* SearchComponent */}
            <TextWrapper>
                <Header>Check the weather on some of the most popular locations</Header>
                <Paragraf>
                    Checkout some pre selected locations or search for your favorit location and get acess to temp,
                    time, wind levels and much more
                </Paragraf>
            </TextWrapper>
            <WeatherSlideshow />
        </Main>
    );
};
const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    min-height: 85vh;
`;
const TextWrapper = styled.div`
    height: 150px;
    letter-spacing: 1.7px;
`;
const Header = styled.h1`
    font-size: ${size.XXL};
    font-weight: bold;
    margin-bottom: 15px;
`;
const Paragraf = styled.p`
    width: 850px;
    font-size: ${size.XL};
    font-weight: bold;
    line-height: 34px;
`;
