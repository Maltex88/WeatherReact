import * as React from 'react';
import styled from 'styled-components';

const SearchButton = styled.button`
    margin: 5px;
`;
const SearchField = styled.input``;
interface funcProps {
    newSearch(searchWord: string): void;
}
export const SearchComponent: React.FC<funcProps> = (): React.ReactElement => {
    //console.log(props.newSearch('Malmö'));
    return (
        <div>
            <div>
                <SearchField></SearchField>
                <SearchButton>Search</SearchButton>
            </div>
        </div>
    );
};
