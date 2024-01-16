import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";

import PropTypes from "prop-types";

import ConfigChartJS from "config/chartjs";

import DataChartJS from "data/chartjs";

// Chart register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Line with shadow element
require("components/charts/LineWithShadowElement");

// Line with shadow
class LineWithShadow extends LineController {}

LineWithShadow.id = "lineWithShadow";
LineWithShadow.defaults = {
  datasetElementType: "lineWithShadowElement",
};

ChartJS.register(LineWithShadow);

const Line = (props) => {
  const { data, withShadow } = props;

  const lineOptions = ConfigChartJS().line;
  const lineData = DataChartJS().line;

  return (
    <Chart
      type={withShadow ? "lineWithShadow" : "line"}
      options={lineOptions}
      data={data ? data : lineData}
    />
  );
};

Line.propTypes = {
  withShadow: PropTypes.bool,
  options: PropTypes.object,
  data: PropTypes.object,
};

export default Line;
