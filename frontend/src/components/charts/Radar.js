import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  RadarController,
} from "chart.js";

import PropTypes from "prop-types";

import ConfigChartJS from "config/chartjs";

import DataChartJS from "data/chartjs";

// Chart register
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Line with shadow element
require("components/charts/LineWithShadowElement");

// Radar with shadow
class RadarWithShadow extends RadarController {}

RadarWithShadow.id = "radarWithShadow";
RadarWithShadow.defaults = {
  datasetElementType: "lineWithShadowElement",
};

ChartJS.register(RadarWithShadow);

const Radar = (props) => {
  const { data, withShadow } = props;

  const radarOptions = ConfigChartJS().radar;
  const radarData = DataChartJS().radar;

  return (
    <Chart
      type={withShadow ? "radarWithShadow" : "radar"}
      options={radarOptions}
      data={data ? data : radarData}
    />
  );
};

Radar.propTypes = {
  withShadow: PropTypes.bool,
  options: PropTypes.object,
  data: PropTypes.object,
};

export default Radar;
