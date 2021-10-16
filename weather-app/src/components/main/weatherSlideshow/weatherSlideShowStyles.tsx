import styled from 'styled-components';
export const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 50vh;
    font-size: 25px;
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
