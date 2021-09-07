import breakpoint from '../../../commons/breakpoints';
import styled from 'styled-components';

interface Props {
    weatherColor: string;
}

//trying out flip
export const Main = styled.div<Props>`
    ${(props) => props.weatherColor};
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 10);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 425px;
    min-width: 250px;
    border-radius: 12px;
    margin: 1rem;

    @media only screen and ${breakpoint.device.md} {
        min-width: 270px;
    }
`;

export const ParagrafCenter = styled.p`
    text-align: center;
    font-size: 15px;
    margin: 5px;
    &:nth-child(1) {
        font-size: 22px;
    }
    &:nth-child(2) {
        opacity: 90%;
    }
    &:nth-child(3) {
        font-size: 22px;
    }
`;

export const Icon = styled.i`
    font-size: 5rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px;

    .column {
        display: flex;
        flex-direction: column;
    }
`;

export const ColumnContainer = styled.div`
    flex-direction: column;
`;

export const ExtraMarginPara = styled.p`
    margin-left: 25px;
`;

export const IconContainer = styled.button`
    display: flex;
    align-self: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid white;
    transition: 0.3s ease-out;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.17), 0 3px 1px -2px rgba(0, 0, 0, 0.17), 0 1px 5px 0 rgba(0, 0, 0, 17);
    &:hover {
        border: 3px solid #04122a;
    }
    &:active {
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.14), 0 5px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 1);
    }
`;
