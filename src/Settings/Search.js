import React from 'react';
import styled from "styled-components";
import _ from "lodash";
import fuzzy from "fuzzy";

import {AppContext} from "../App/AppProvider";
import {backgroundColor2, fontSize2} from "../Shared/Styles";

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
    ${backgroundColor2};
    ${fontSize2};
    border: 1px solid;
    height: 40px;
    color: #1163c9;
    place-self: center left;
`;

const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {
    // Get all the coin symbols
    let coinSymbols = Object.keys(coinList);
    // Get all the coin names, map symbol to name
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
    // Combine coinSymbols and coinNames
    let allStringsToSearch = coinSymbols.concat(coinNames);
    // Fuzzy search
    let fuzzyResults = fuzzy
        .filter(inputValue, allStringsToSearch, {})
        .map(result => result.string);
    // Filter coins
    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
        let coinName = result.CoinName;
        return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName));
    });

    setFilterCoins(filteredCoins);
}, 500);

const filterCoins = (e, setFilteredCoins, coinList) => {
    let inputValue = e.target.value;

    if(!inputValue || inputValue.length < 2) {
        setFilteredCoins(null);
        return;
    }

    handleFilter(inputValue, coinList, setFilteredCoins);
};

const Search = () => {
    return (
        <AppContext.Consumer>
            {({setFilteredCoins, coinList}) =>
                <SearchGrid>
                    <h2>Search all coins</h2>
                    <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)} />
                </SearchGrid>
            }
        </AppContext.Consumer>
    );
};

export default Search;