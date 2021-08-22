import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // import plugin
dayjs.extend(utc);
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

export const checkIfSunrise = (timezone: number, sunset: number, sunrise: number) => {
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

export const handleAndFormatTime = (timezone: number, sunset: number, sunrise: number) => {
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
    return { locationTime, rise, set, sunLocation };
};
