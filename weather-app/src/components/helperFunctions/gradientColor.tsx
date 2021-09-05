export const gradientColor = (temp: number): string => {
    let styleString = ``;

    if (temp < 10) {
        styleString = `background: rgb(97,163,230);
        background: linear-gradient(256deg, rgba(97,163,230,1) 21%, rgba(97,163,230,1) 35%, rgba(116,178,241,1) 65%)`;
    }

    if (temp > 10 && temp < 20) {
        styleString = `background: rgb(83, 208, 187);
        background: linear-gradient(90deg, rgba(83, 208, 187, 1) 0%, rgba(110, 222, 245, 1) 0%, rgba(83, 208, 187, 1) 100%);`;
    }
    if (temp > 20) {
        styleString = `background: rgb(254,133,133);
        background: linear-gradient(256deg, rgba(254,133,133,1) 0%, rgba(244,88,88,1) 58%, rgba(255,155,155,1) 100%);`;
    }

    return styleString;
};
