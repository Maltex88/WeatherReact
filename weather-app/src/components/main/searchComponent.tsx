import * as React from 'react';
import styled from 'styled-components';

const Main = styled.div``;

const SearchButton = styled.button`
    margin: 5px;
    min-height: 40px;
    border-radius: 5px;
`;
const SearchField = styled.input``;
interface funcProps {
    newSearch(searchWord: string): void;
}
export const SearchComponent: React.FC<funcProps> = (props): React.ReactElement => {
    const clickEvent: (event: React.MouseEvent<HTMLButtonElement>) => void = () => {
        props.newSearch('Malmö');
    };
    //console.log(props.newSearch('Malmö'));
    return (
        <Main>
            <SearchField></SearchField>
            <SearchButton onClick={clickEvent}>Search</SearchButton>
        </Main>
    );
};
