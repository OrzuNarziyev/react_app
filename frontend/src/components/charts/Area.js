import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
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
  Legend,
  Filler
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

const Area = (props) => {
  const { data, withShadow } = props;

  const areaOptions = ConfigChartJS().area;
  const areaData = DataChartJS().area;

  return (
    <Chart
      type={withShadow ? "lineWithShadow" : "line"}
      options={areaOptions}
      data={data ? data : areaData}
    />
  );
};

Area.propTypes = {
  withShadow: PropTypes.bool,
  options: PropTypes.object,
  data: PropTypes.object,
};

export default Area;
