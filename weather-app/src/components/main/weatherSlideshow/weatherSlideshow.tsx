import * as React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

//Children
import { SlideItem } from './slideItem';
//Types
import { weatherData } from '../../types';

//Images
import Paris from '../../../assets/paris.jpg';
import Berlin from '../../../assets/berlin.jpg';
import Italy from '../../../assets/Italy.jpg';
import Moscow from '../../../assets/moscow.jpg';
import Budapest from '../../../assets/Budapest.jpg';

const Main = styled.div`
    display: flex;
    height: auto;
`;
const LoadingPlaceHolder = styled.div`
    height: 50vh;
    width: 30vh;
    border-radius: 12px;
    margin: 15px;
    border: 2px solid black;
`;

export const WeatherSlideshow: React.FC = () => {
    const [ParisData, setParisData] = React.useState<weatherData | null>();
    const [BerlinData, setBerlinData] = React.useState<weatherData | null>();
    const [ItalyData, setItalyData] = React.useState<weatherData | null>();
    const [MoscowData, setMoscowData] = React.useState<weatherData | null>();
    const [BudapestData, setBudapestData] = React.useState<weatherData | null>();

    const GetDataforSlideshow1 = (searchWord: string) => {
        console.log('i get a call, then fetching data');
        const AxiosOptions: AxiosRequestConfig = {
            method: 'get',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            params: {
                q: `${searchWord}`,
                units: 'metric',
                lang: 'sv',
            },
            headers: {
                'x-rapidapi-key': `${process.env.REACT_APP_GOOGLE_API_KEY}`,
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            },
        };

        return axios.request(AxiosOptions);
    };

    useEffect(() => {
        Promise.all([
            GetDataforSlideshow1('Paris'),
            GetDataforSlideshow1('Berlin'),
            GetDataforSlideshow1('Italy'),
            GetDataforSlideshow1('Budapest'),
            GetDataforSlideshow1('Moscow'),
        ])
            .then(function (results) {
                setParisData(results[0].data);
                setBerlinData(results[1].data);
                setItalyData(results[2].data);
                setBudapestData(results[3].data);
                setMoscowData(results[4].data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <Main>
            {ParisData ? <SlideItem town={Paris} weatherData={ParisData} /> : <LoadingPlaceHolder />}
            {BerlinData ? <SlideItem town={Berlin} weatherData={BerlinData} /> : <LoadingPlaceHolder />}
            {ItalyData ? <SlideItem town={Italy} weatherData={ItalyData} /> : <LoadingPlaceHolder />}
            {BudapestData ? <SlideItem town={Budapest} weatherData={BudapestData} /> : <LoadingPlaceHolder />}
            {MoscowData ? <SlideItem town={Moscow} weatherData={MoscowData} /> : <LoadingPlaceHolder />}
        </Main>
    );
};
