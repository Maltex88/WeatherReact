import * as React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
    min-height: 7.5vh;

    color: white;
`;

export const Footer: React.FC = (): React.ReactElement => {
    return (
        <Foot>
            <p>hej</p>
        </Foot>
    );
};
