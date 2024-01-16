import Footer from "partials/Footer";

import Area from "components/charts/Area";
import Bar from "components/charts/Bar";
import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Doughnut from "components/charts/Doughnut";
import Line from "components/charts/Line";
import LineWithAnnotationChart from "components/charts/LineWithAnnotationChart";
import Pie from "components/charts/Pie";
import PolarArea from "components/charts/PolarArea";
import Radar from "components/charts/Radar";

import DataChartJS from "data/chartjs";

const ExtrasCharts = () => {
  const {
    lineWithAnnotationTO,
    lineWithAnnotationAO,
    lineWithAnnotationPO,
    lineWithAnnotationSO,
  } = DataChartJS();

  return (
    <main className="workspace overflow-hidden">
      {/* Breadcrumb */}
      <Breadcrumb title="Charts">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Extras</BreadcrumbItem>
        <BreadcrumbItem>Charts</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Area */}
        <div className="card p-5">
          <h3>Area</h3>
          <div className="mt-5">
            <Area />
          </div>
        </div>

        {/* Area With Shadow */}
        <div className="card p-5">
          <h3>Area With Shadow</h3>
          <div className="mt-5">
            <Area withShadow />
          </div>
        </div>

        {/* Bar */}
        <div className="card p-5">
          <h3>Bar</h3>
          <div className="mt-5">
            <Bar />
          </div>
        </div>

        {/* Bar With Shadow */}
        <div className="card p-5">
          <h3>Bar With Shadow</h3>
          <div className="mt-5">
            <Bar withShadow />
          </div>
        </div>

        {/* Line */}
        <div className="card p-5">
          <h3>Line</h3>
          <div className="mt-5">
            <Line />
          </div>
        </div>

        {/* Line With Shadow */}
        <div className="card p-5">
          <h3>Line With Shadow</h3>
          <div className="mt-5">
            <Line withShadow />
          </div>
        </div>

        {/* Pie */}
        <div className="card p-5">
          <h3>Pie</h3>
          <div className="mt-5">
            <Pie />
          </div>
        </div>

        {/* Pie With Shadow */}
        <div className="card p-5">
          <h3>Pie With Shadow</h3>
          <div className="mt-5">
            <Pie withShadow />
          </div>
        </div>

        {/* Doughnut */}
        <div className="card p-5">
          <h3>Doughnut</h3>
          <div className="mt-5">
            <Doughnut />
          </div>
        </div>

        {/* Doughnut With Shadow */}
        <div className="card p-5">
          <h3>Doughnut With Shadow</h3>
          <div className="mt-5">
            <Doughnut withShadow />
          </div>
        </div>

        {/* Radar */}
        <div className="card p-5">
          <h3>Radar</h3>
          <div className="mt-5">
            <Radar />
          </div>
        </div>

        {/* Radar With Shadow */}
        <div className="card p-5">
          <h3>Radar With Shadow</h3>
          <div className="mt-5">
            <Radar withShadow />
          </div>
        </div>

        {/* Polar Area */}
        <div className="card p-5">
          <h3>Polar Area</h3>
          <div className="mt-5">
            <PolarArea />
          </div>
        </div>

        {/* Polar Area With Shadow */}
        <div className="card p-5">
          <h3>Polar Area With Shadow</h3>
          <div className="mt-5">
            <PolarArea withShadow />
          </div>
        </div>

        {/* Line With Annotation */}
        <div className="card p-5">
          <h3>Line With Annotation</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-5">
            <div className="card p-5">
              <LineWithAnnotationChart data={lineWithAnnotationTO} />
            </div>
            <div className="card p-5">
              <LineWithAnnotationChart data={lineWithAnnotationAO} />
            </div>
            <div className="card p-5">
              <LineWithAnnotationChart data={lineWithAnnotationPO} />
            </div>
            <div className="card p-5">
              <LineWithAnnotationChart data={lineWithAnnotationSO} />
            </div>
          </div>
        </div>

        {/* Line With Annotation And Shadow */}
        <div className="card p-5">
          <h3>Line With Annotation And Shadow</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-5">
            <div className="card p-5">
              <LineWithAnnotationChart data={lineWithAnnotationTO} withShadow />
            </div>
            <div className="card p-5">
              <LineWithAnnotationChart data={lineWithAnnotationAO} withShadow />
            </div>
            <div className="card p-5">
              <LineWithAnnotationChart data={lineWithAnnotationPO} withShadow />
            </div>
            <div className="card p-5">
              <LineWithAnnotationChart data={lineWithAnnotationSO} withShadow />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ExtrasCharts;
