import * as React from 'react';
import styled from 'styled-components';

//Components
import WeatherSlideshow from './weatherSlideshow/weatherSlideshow';
import { SearchComponent } from './weatherSearch/searchComponent';

export const MainContainer = (): JSX.Element => {
    return (
        <Main>
            {/* SearchComponent */}
            <WeatherSlideshow />
        </Main>
    );
};
export const Main = styled.main`
    display: flex;
    justify-content: center;
    min-height: 85vh;
`;
