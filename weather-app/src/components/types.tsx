export type weatherData = {
    coord: { lon: number; lat: number };
    weather: [{ id: number; main: string; description: string; icon: string }];
    base?: string;
    main: {
        temp: number;
        sea_level: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        grnd_level: number;
    };
    visibility: number;
    wind: { speed: number; deg: number };
    clouds: { all: number };
    dt: number;
    sys: { country: string; sunrise: number; sunset: number; timezone: number };
    id: number;
    timezone: number;
    name: string;
    cod: number;
};
export type slideShowData = [
    {
        coord: { lon: number; lat: number };
        weather: [{ id: number; main: string; description: string; icon: string }];
        base?: string;
        main: {
            temp: number;
            sea_level: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
            pressure: number;
            humidity: number;
            grnd_level: number;
        };
        visibility: number;
        timezone: number;
        wind: { speed: number; deg: number };
        clouds: { all: number };
        dt: number;
        sys: { country: string; sunrise: number; sunset: number; timezone: number };
        id: number;
        name: string;
        cod: number;
    },
];
export type timeData = {
    locationTime?: string;
    rise?: string;
    set?: string;
    sunLocation: string;
    dayMonthDateFormat: string;
};

export interface Props {
    weatherData: weatherData;
    timeData: timeData;
}
