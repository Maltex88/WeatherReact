import sun from '../../assets/sun.jpg';
import moon from '../../assets/moon.jpg';

export const DayOrNight = (day: string): string => {
    if (day === 'day') {
        return sun;
    } else {
        return moon;
    }
};
