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
    height: 450px;
    display: flex;
    flex-direction: column;
    perspective: 1000px;
    transition: z-index 500ms, transform 500ms;
    z-index: 0;
    transform-style: preserve-3d;

    &:flipped {
        z-index: 1;
    }
    @media only screen and ${breakpoint.device.md} {
        min-width: 270px;
    }
`;
export const CardContainerSkeletonLoader = styled.div`
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
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
    margin: 1rem;
    margin-top: 2.5rem;
    display: flex;
    flex: 1;
    border-radius: 12px;
    transition: transform 500ms;
    transform-style: preserve-3d;
    &.flipped {
        transform: rotateY(180deg);
    }
`;
export const ParagrafCenter = styled.p`
    text-align: center;
    font-size: 15px;
    margin: 5px;
    &:nth-child(1) {
        font-size: 22px;
    }

    &:nth-child(3) {
        font-size: 22px;
    }
`;

export const Icon = styled.i`
    font-size: 5rem;
    position: absolute;
    right: 15px;
    bottom: 50%;
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

export const IconContainer = styled.button`
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    bottom: 25px;
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
