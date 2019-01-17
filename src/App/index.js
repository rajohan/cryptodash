import React, {Component} from "react";

import "./App.css";
import AppLayout from "./AppLayout";
import WelcomeMessage from "./WelcomeMessage";

class App extends Component {
    render() {
        return (
            <AppLayout>
                <WelcomeMessage />
            </AppLayout>
        );
    }
}

export default App;