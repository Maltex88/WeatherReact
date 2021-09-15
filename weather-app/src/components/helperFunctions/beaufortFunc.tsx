export type windInfo = {
    lvl: number;
    description: string;
};
export const levelOfBeaufort = (value: number): windInfo => {
    let windInfo: windInfo = {
        lvl: 0,
        description: '',
    };
    switch (true) {
        case value < 0.5:
            console.log('found match <=5', value);
            windInfo = { lvl: 0, description: 'Calm' };
            break;

        case value >= 0.5 && value < 1.5:
            console.log('found match between 0.5 and 1.5', value);
            windInfo = { lvl: 1, description: 'Light air' };
            break;
        case value >= 1.6 && value < 3.3:
            console.log('found match between 0.5 and 1.5', value);
            windInfo = { lvl: 2, description: 'Light breeze' };
            break;
        case value >= 3.4 && value < 5.5:
            console.log('found match between 0.5 and 1.5', value);
            windInfo = { lvl: 3, description: 'Gentle breeze' };
            break;
        case value >= 5.5 && value <= 7.9:
            console.log('found match between 0.5 and 1.5', value);
            windInfo = { lvl: 4, description: 'Moderate breeze' };
            break;
        case value >= 8 && value <= 10.7:
            console.log('found match between 0.5 and 1.5', value);
            windInfo = { lvl: 5, description: 'Fresh breeze' };
            break;
        case value >= 10.8 && value <= 13.8:
            console.log('found match <=5', value);
            windInfo = { lvl: 6, description: 'Strong breeze' };
            break;
        case value >= 13.9 && value <= 17.1:
            console.log('found match between 0.5 and 1.5', value);
            windInfo = { lvl: 7, description: 'Near gale' };
            break;
        case value >= 17.2 && value <= 20.7:
            console.log('found match between 0.5 and 1.5', value);
            windInfo = { lvl: 8, description: 'Gale' };
            break;
        case value >= 20.8 && value <= 24.4:
            console.log('found match between 0.5 and 1.5', value);
            windInfo = { lvl: 9, description: '	Strong gale' };
            break;
        case value >= 24.5 && value <= 28.4:
            console.log('found match between 0.5 and 1.5', value);
            windInfo = { lvl: 10, description: 'Storm' };
            break;
        case value >= 28.5 && value <= 32.6:
            console.log('found match between 0.5 and 1.5', value);
            windInfo = { lvl: 11, description: 'Violent storm' };
            break;
        case value >= 32.7:
            console.log('found match between 0.5 and 1.5', value);
            windInfo = { lvl: 12, description: 'Hurricane' };
            break;
        default:
            console.log('Nvalue:', value);
            break;
    }
    return windInfo;
};
