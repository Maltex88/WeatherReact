import * as React from 'react';
import { IconType } from 'react-icons';

import { checkMainWeather } from './CustomIconFunc';
interface Props {
    MainWeather: string;
    WeatherDescription: string;
    Icon: string;
}

export const CostumIcon: React.FC<Props> = ({ MainWeather, Icon }) => {
    const [displayIcon, setDisplayIcon] = React.useState<IconType | null>();
    React.useEffect(() => {
        setDisplayIcon(checkMainWeather(MainWeather, Icon));
    }, []);

    return <div>{displayIcon ? <h2>{displayIcon}</h2> : <p>hej</p>}</div>;
};
