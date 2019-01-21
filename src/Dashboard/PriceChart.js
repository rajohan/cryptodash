import React from "react";
import ReactHighcharts from "react-highcharts";

import highchartsConfig from "./HighchartsConfig";
import HighChartsTheme from "./HighchartsTheme";
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";

ReactHighcharts.Highcharts.setOptions(HighChartsTheme);

const PriceChart = () => {
    return (
        <AppContext.Consumer>
            {({historical}) =>
                <Tile>
                    {historical ?
                        <ReactHighcharts config={highchartsConfig(historical)} />
                        :
                        <div>Loading Historical Data</div>
                    }
                </Tile>
            }
        </AppContext.Consumer>
    );
};

export default PriceChart;