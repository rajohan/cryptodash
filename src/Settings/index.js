import React from "react";

import Page from "../Shared/Page";
import ConfirmButton from "./ConfirmButton";
import WelcomeMessage from "./WelcomeMessage";

export default function () {
    return (
        <Page name="settings">
            <WelcomeMessage/>
            <ConfirmButton/>
        </Page>
    );
};