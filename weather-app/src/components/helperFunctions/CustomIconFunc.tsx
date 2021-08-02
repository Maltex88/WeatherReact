import * as React from 'react';
import { IconType } from 'react-icons/lib';
import { WiDaySunny } from 'react-icons/wi';
import { WiNightClear } from 'react-icons/wi';

import { WiDayRain } from 'react-icons/wi';
import { WiNightAltRain } from 'react-icons/wi';

import { WiDayLightning } from 'react-icons/wi';
import { WiNightAltLightning } from 'react-icons/wi';

//clouds
import { WiDayCloudy } from 'react-icons/wi';
import { WiNightAltCloudy } from 'react-icons/wi';
import { WiDaySunnyOvercast } from 'react-icons/wi';
import { WiNightAltPartlyCloudy } from 'react-icons/wi';

interface Time {
    Thunderstorm: IconType[];
    Drizzle: IconType[];
    Snow: IconType[];
    Rain: IconType[];
    Atmosphere: IconType[];
    Clear: IconType[];
    Clouds: IconType[];
}

const Night: Time = {
    Thunderstorm: [],
    Drizzle: [],
    Snow: [],
    Rain: [],
    Atmosphere: [],
    Clear: [],
    Clouds: [],
};
const Day: Time = {
    Thunderstorm: [],
    Drizzle: [],
    Snow: [],
    Rain: [],
    Atmosphere: [],
    Clear: [WiDaySunny],
    Clouds: [WiDayCloudy, WiDaySunnyOvercast],
};

const checkDayOrNight = (Icon: string) => {
    if (Icon.includes('d', 2)) {
        return true;
    } else {
        return false;
    }
};

const searchObj = (Obj: Time, MainWeather: string) => {
    for (const [key, value] of Object.entries(Obj)) {
        console.log('inside obj.. comparing ', MainWeather, key);
        if (MainWeather === key) {
            return WiDayCloudy;
        } else {
        }
    }
};

export const checkMainWeather = (MainWeather: string, Icon: string) => {
    if (checkDayOrNight(Icon)) {
        console.log('its daytime', Icon, MainWeather);
        return searchObj(Day, MainWeather);
    } else {
        console.log('its nighttime');
        return searchObj(Night, MainWeather);
    }
};
