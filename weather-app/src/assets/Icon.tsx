import * as React from 'react';
import { IconContext, IconType } from 'react-icons';

export interface Props {
    Icon: IconType;
}

export const IconComp: React.FC<Props> = ({ Icon }) => {
    return (
        <IconContext.Provider
            value={{
                color: 'white',
                size: '35px',
            }}
        >
            <Icon />
        </IconContext.Provider>
    );
};
