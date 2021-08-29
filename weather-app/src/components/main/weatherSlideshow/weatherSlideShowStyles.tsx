import styled from 'styled-components';
import breakpoint from '../../../commons/breakpoints';
export const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    color: white;
    font-size: 25px;
`;
export const LoadingPlaceHolder = styled.div`
    height: 50vh;
    width: 30vh;
    border-radius: 12px;
    margin: 15px;
    border: 2px solid black;
`;

/*@media only screen and ${breakpoint.device.xs} {
        flex-direction: column;
    }
    @media only screen and ${breakpoint.device.sm} {
    }
    @media only screen and ${breakpoint.device.lg} {
    }*/
