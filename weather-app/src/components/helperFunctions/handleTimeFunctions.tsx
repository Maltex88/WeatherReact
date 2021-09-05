import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // import plugin
dayjs.extend(utc);
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

import { timeData } from '../types';

export const checkIfSunrise = (timezone: number, sunset: number, sunrise: number): boolean => {
    const locationTime = dayjs()
        .utcOffset(timezone / 3600)
        .format();
    const set = dayjs
        .unix(sunset)
        .utcOffset(timezone / 3600)
        .format();
    const rise = dayjs
        .unix(sunrise)
        .utcOffset(timezone / 3600)
        .format();
    const isSunUp = dayjs(locationTime).isBetween(rise, dayjs(set), null, '[]');

    return isSunUp;
};

export const handleAndFormatTime = (timezone: number, sunset: number, sunrise: number): timeData => {
    let sunLocation = '';
    const locationTime = dayjs()
        .utcOffset(timezone / 3600)
        .format('HH:mm');
    const set = dayjs
        .unix(sunset)
        .utcOffset(timezone / 3600)
        .format('HH:mm');
    const rise = dayjs
        .unix(sunrise)
        .utcOffset(timezone / 3600)
        .format('HH:mm');
    const isSunUp = checkIfSunrise(timezone, sunset, sunrise);
    if (isSunUp) {
        sunLocation = 'day';
    } else {
        sunLocation = 'night';
    }
    const dayMonthDateFormat = dayjs()
        .utcOffset(timezone / 3600)
        .format('dddd, MMMM D');
    console.log(dayMonthDateFormat);
    return { locationTime, rise, set, sunLocation, dayMonthDateFormat };
};
