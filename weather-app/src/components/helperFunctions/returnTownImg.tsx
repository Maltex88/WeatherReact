import Paris from '../../assets/paris.jpg';
import Berlin from '../../assets/berlin.jpg';
import Italy from '../../assets/Italy.jpg';
import Moscow from '../../assets/moscow.jpg';
import Budapest from '../../assets/Budapest.jpg';
import Dubai from '../../assets/dubai.jpg';
import Honolulu from '../../assets/Honolulu.jpg';

const ImgList = [
    { name: 'Paris', imgUrl: Paris },
    { name: 'Berlin', imgUrl: Berlin },
    { name: 'Rome', imgUrl: Italy },
    { name: 'Moscow', imgUrl: Moscow },
    { name: 'Dubai', imgUrl: Dubai },
    { name: 'Budapest', imgUrl: Budapest },
    { name: 'Honolulu', imgUrl: Honolulu },
];

export const CheckForImg = (slideItemName: string): string => {
    let match = '';
    ImgList.forEach((element) => {
        if (slideItemName === element.name) {
            match = element.imgUrl;
        }
    });
    return match;
};
