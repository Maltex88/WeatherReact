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
    height: 50vh;
    min-width: 30vh;
    border-radius: 12px;
    margin: 1rem;

    @media only screen and ${breakpoint.device.md} {
        min-width: 60%;
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
