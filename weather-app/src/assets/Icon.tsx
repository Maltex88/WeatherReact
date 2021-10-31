import * as React from 'react';
import { IconContext, IconType } from 'react-icons';

interface Props {
    Icon: IconType;
}

export const IconComp: React.FC<Props> = ({ Icon }) => {
    return (
        <IconContext.Provider
            value={{
                color: 'white',
                size: '24px',
            }}
        >
            <Icon />
        </IconContext.Provider>
    );
};

interface Props1 {
    icon: string;
}
export const WeatherIcon: React.FC<Props1> = ({ icon }) => {
    return <i className={`wi ${icon}`}></i>;
};
