import React from "react";
import styled, {css} from "styled-components";

import {AppContext} from "./AppProvider";

const Logo = styled.div`
    font-size: 1.5em;
`;

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
    cursor: pointer;
    text-transform: capitalize;
    
    ${props => props.active && css`
        text-shadow: 0 0 60px #03ff03;
    `}
`;

const ControlButton = ({name}) => {
    return (
        <AppContext.Consumer>
            {({page, setPage}) => (
                <ControlButtonElem
                    active={page === name}
                    onClick={() => setPage(name)}
                >
                    {name}
                </ControlButtonElem>
            )}
        </AppContext.Consumer>
    );
};

const AppBar =  () => {
    return (
        <Bar>
            <Logo>CryptoDash</Logo>
            <div />
            <ControlButton active name="dashboard"/>
            <ControlButton name="settings"/>
        </Bar>
    );
};

export default AppBar;