import * as React from 'react';
import { WiDaySunny } from 'react-icons/wi';
import { WiDayCloudy } from 'react-icons/wi';
interface Props {
    IconString: string;
}

export const CostumIcon: React.FC<Props> = ({ IconString }) => {
    console.log('hej', IconString);
    return <h2>hej</h2>;
};
