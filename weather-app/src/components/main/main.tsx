import * as React from 'react';
import styled from 'styled-components';

//Components
import WeatherSlideshow from './weatherSlideshow/weatherSlideshow';
import { SearchComponent } from './weatherSearch/searchComponent';

//TODO find better solution for info icon and refactor and delete icon comp in assets
export const MainContainer = (): JSX.Element => {
    return (
        <Main>
            {/* SearchComponent */}
            <WeatherSlideshow />
            <WeatherSlideshow />
        </Main>
    );
};
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 85vh;
`;
