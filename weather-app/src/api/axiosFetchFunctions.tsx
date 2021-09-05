import axios, { AxiosRequestConfig } from 'axios';
import { slideShowData, weatherData } from '../components/types';
export const getWeatherDataByID = (searchWord: string): Promise<slideShowData> => {
    const AxiosOptions: AxiosRequestConfig = {
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/group',
        params: {
            appid: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
            id: `${searchWord}`,
            cnt: 3,
            units: 'metric',
            lang: 'eng',
        },
    };
    return axios
        .request(AxiosOptions)
        .then(function (response) {
            console.log(response.data.list);
            return response.data.list;
        })
        .catch(function (error) {
            console.error(error);
        });
};

export const weatherSearchByName = (searchWord: string): Promise<weatherData> => {
    const AxiosOptions: AxiosRequestConfig = {
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/group',
        params: {
            appid: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
            q: `${searchWord}`,
            units: 'metric',
            lang: 'sv',
        },
    };
    return axios
        .request(AxiosOptions)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
};
