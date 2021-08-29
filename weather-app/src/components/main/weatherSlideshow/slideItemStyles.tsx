import breakpoint from '../../../commons/breakpoints';
import styled from 'styled-components';

interface Props {
    BackgroundSkyImg: string;
}
export const Main = styled.div<Props>`
    background-image: url(${(props) => props.BackgroundSkyImg});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50vh;
    min-width: 30vh;
    border-radius: 12px;
    margin: 1rem;

    @media only screen and ${breakpoint.device.md} {
        min-width: 80%;
    }
`;
export const Container = styled.div`
    margin 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    &:first-child {
        justify-content: space-between;
    }
    &:last-child {
        justify-content: space-between;
    }
`;

const Paragraf = styled.p`
    color: white;
    font-size: 25px;
`;
const Paragraf1 = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 25px;
`;
const Icon = styled.i`
    color: white;
    font-size: 55px;
    positon: absolute;
`;
