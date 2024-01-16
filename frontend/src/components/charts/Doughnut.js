import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";

import PropTypes from "prop-types";

import ConfigChartJS from "config/chartjs";

import DataChartJS from "data/chartjs";

// Chart register
ChartJS.register(ArcElement, Tooltip, Legend);

// Line with shadow element
require("components/charts/LineWithShadowElement");

// Doughnut with shadow
class DoughnutWithShadow extends DoughnutController {}

DoughnutWithShadow.id = "doughnutWithShadow";
DoughnutWithShadow.defaults = {
  datasetElementType: "lineWithShadowElement",
};

ChartJS.register(DoughnutWithShadow);

const Doughnut = (props) => {
  const { data, withShadow } = props;

  const doughnutOptions = ConfigChartJS().doughnut;
  const doughnutData = DataChartJS().doughnut;

  return (
    <Chart
      type={withShadow ? "doughnutWithShadow" : "doughnut"}
      options={doughnutOptions}
      data={data ? data : doughnutData}
    />
  );
};

Doughnut.propTypes = {
  withShadow: PropTypes.bool,
  options: PropTypes.object,
  data: PropTypes.object,
};

export default Doughnut;
