import * as React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
    min-height: 7.5vh;
    background-color: #01000f;
    color: white;
`;

export const Footer: React.FC = (): React.ReactElement => {
    return <Foot></Foot>;
};
