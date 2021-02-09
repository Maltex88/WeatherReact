import * as React from 'react';
import styled from 'styled-components';

const Head = styled.div`
    min-height: 7.5vh;
`;

export const Header: React.FC = (): React.ReactElement => {
    return (
        <Head>
            <p>hej</p>
        </Head>
    );
};
