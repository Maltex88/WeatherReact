import * as React from 'react';
import styled from 'styled-components';
import { ContainerRowCenter } from '../mainStyle';
const Main = styled.div``;

const SearchButton = styled.button`
    margin: 5px;
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
        <div>
            <div>
                <SearchField></SearchField>
                <SearchButton onClick={clickEvent}>Search</SearchButton>
            </div>
        </div>
    );
};
