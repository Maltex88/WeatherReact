import breakpoint from '../../../commons/breakpoints';
import styled, { css } from 'styled-components';

interface Props {
    weatherColor: string;
}

export const CardSides = css`
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
`;
export const CardContainer = styled.div`
    width: 300px;
    height: 350px;

    display: flex;
    perspective: 1000px;
    transition: z-index 500ms, transform 500ms;
    z-index: 0;
    transform-style: preserve-3d;

    &:flipped {
        z-index: 1;
    }
`;
export const CardContainerSkeletonLoader = styled.div`
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    @media only screen and ${breakpoint.device.sm} {
        width: 200px;
    }
`;
export const CardInnerSkeletonLoader = styled.div`
    margin: 1rem;
    margin-top: 2.5rem;
    display: flex;
    flex: 1;
    border-radius: 12px;
    border: 3px solid black;
`;

export const CardFrontMain = styled.div`
    ${CardSides}
    z-index: 0;

    .dayTimeLoc {
        display: flex;
        flex-direction: column;
    }

    .iconTemp {
        margin: 0 1rem 2rem;
        .temp {
            p:nth-child(2) {
                font-size: 17px;
            }
        }
    }
`;
export const CardBackMain = styled.div`
    ${CardSides}
    transform: rotateY(-180deg) translate(0, 0);
    z-index: 1;
`;
export const CardInner = styled.div<Props>`
    ${(props) => props.weatherColor};
    margin: 0.5rem;
    margin-top: 2.5rem;
    display: flex;
    flex: 1;
    border-radius: 12px;
    transition: transform 500ms;
    transform-style: preserve-3d;
    &.flipped {
        transform: rotateY(180deg);
    }
    @media only screen and ${breakpoint.device.md} {
    }
`;
export const ParagrafCenter = styled.p`
    text-align: center;

    margin: 5px;
    &:nth-child(1) {
    }

    &:nth-child(3) {
    }
`;

export const Icon = styled.i`
    font-size: 5vh;
    @media only screen and ${breakpoint.device.sm} {
        font-size: 40px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px;
    text-align: center;
    .column {
        display: flex;
        flex-direction: column;
    }
    &.top {
        margin: 25px 25px 15px 25px;
        p {
            margin-top: 12px;
            display: flex;
            flex-direction: column;
            i {
                margin-bottom: 7px;
            }
        }
    }
    &.middle {
        margin: 20px;
        display: flex;
        justify-content: center;
        i {
            margin: 5px;
        }
    }
    &.bottom {
        i {
            align-self: flex-end;
        }
    }
`;

export const ColumnContainer = styled.div`
    flex-direction: column;
`;

export const ColumnContainer1 = styled.div`
    background-color: blue;
`;
export const ExtraMarginPara = styled.p`
    margin-left: 1rem;
`;
