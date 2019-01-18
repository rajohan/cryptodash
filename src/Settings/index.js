import React from "react";

import Page from "../Shared/Page";
import ConfirmButton from "./ConfirmButton";
import WelcomeMessage from "./WelcomeMessage";
import CoinGrid from "./CoinGrid";
import Search from "./Search";

export default function () {
    return (
        <Page name="settings">
            <WelcomeMessage/>
            <CoinGrid topSection/>
            <ConfirmButton/>
            <Search/>
            <CoinGrid/>
        </Page>
    );
};