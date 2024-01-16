import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PieController,
} from "chart.js";

import PropTypes from "prop-types";

import ConfigChartJS from "config/chartjs";

import DataChartJS from "data/chartjs";

// Chart register
ChartJS.register(ArcElement, Tooltip, Legend);

// Line with shadow element
require("components/charts/LineWithShadowElement");

// Pie with shadow
class PieWithShadow extends PieController {}

PieWithShadow.id = "pieWithShadow";
PieWithShadow.defaults = {
  datasetElementType: "lineWithShadowElement",
};

ChartJS.register(PieWithShadow);

const Pie = (props) => {
  const { data, withShadow } = props;

  const pieOptions = ConfigChartJS().pie;
  const pieData = DataChartJS().pie;

  return (
    <Chart
      type={withShadow ? "pieWithShadow" : "pie"}
      options={pieOptions}
      data={data ? data : pieData}
    />
  );
};

Pie.propTypes = {
  withShadow: PropTypes.bool,
  options: PropTypes.object,
  data: PropTypes.object,
};

export default Pie;
