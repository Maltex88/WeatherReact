import * as React from 'react';

//Components
import { WeatherSlideshow } from './weatherSlideshow/weatherSlideshow';
import { SearchComponent } from './weatherSearch/searchComponent';

import { Main } from './mainStyle';

export const MainContainer: React.FC = (): React.ReactElement => {
    return (
        <Main>
            <WeatherSlideshow />
        </Main>
    );
};
