import axios, { AxiosRequestConfig } from 'axios';

export const GetDataforSlideshow = (searchWord: string) => {
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
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
};
