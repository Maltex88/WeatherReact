import styled from 'styled-components';
import breakpoint from '../../../commons/breakpoints';
export const Main = styled.main`
    display: flex;
    background: green;
    max-width: 900px;
    min-height: 470px;
    align-self: center;
    flex-wrap: wrap;

    @media only screen and ${breakpoint.device.sm} {
        width: 600px;
    }
    @media only screen and ${breakpoint.device.ms} {
        width: 300px;
    }
`;

export const LoadingPlaceHolder = styled.div`
    height: 50vh;
    width: 30vh;
    border-radius: 12px;
    margin: 15px;
    border: 2px solid black;
`;
export const SlideHeader = styled.h3`
    position: absolute;
    z-index: 1;
`;
