import React from "react";
import styled, {css} from "styled-components";

import {fontSize3, fontSizeBig} from "../Shared/Styles";
import {SelectableTile} from "../Shared/Tile";
import {CoinHeaderGridStyled} from "../Settings/CoinHeaderGrid";

const numberFormat = number => {
    return +(number + "").slice(0, 7);
};

const JustifyRight = styled.div`
    justify-self: right;
`;

const JustifyLeft = styled.div`
    justify-self: left;
`;

const TickerPrice = styled.div`
    ${fontSizeBig};
`;

const ChangePct = styled.div`
    color: green;
    ${props => props.red && css`
        color: red;
    `}
`;

const PriceTileStyled = styled(SelectableTile)`
    ${props => props.compact && css`
        ${fontSize3};
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5px;
        justify-items: right;
    `}
`;

const ChangePercent = ({data}) => {
    return (
        <JustifyRight>
            <ChangePct red={data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}
            </ChangePct>
        </JustifyRight>
    );
};

const PriceTileDetailed = ({sym, data}) => {
    return (
        <PriceTileStyled>
            <CoinHeaderGridStyled>
                <JustifyLeft>{sym}</JustifyLeft>
                <ChangePercent data={data}/>
            </CoinHeaderGridStyled>
            <TickerPrice>
                ${numberFormat(data.PRICE)}
            </TickerPrice>
        </PriceTileStyled>
    );
};

const PriceTileCompact = ({sym, data}) => {
    return (
        <PriceTileStyled compact>
            <JustifyLeft>{sym}</JustifyLeft>
            <ChangePercent data={data}/>
            <div>
                ${numberFormat(data.PRICE)}
            </div>
        </PriceTileStyled>
    );
};

const PriceTile = ({price, index}) => {
    let sym = Object.keys(price)[0];
    let data = price[sym]["USD"];
    let TileClass = index < 5 ? PriceTileDetailed : PriceTileCompact;

    return (
        <TileClass sym={sym} data={data} />
    );
};

export default PriceTile;