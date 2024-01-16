import Footer from "partials/Footer";

import LineWithAnnotationChart from "components/charts/LineWithAnnotationChart";
import Area from "components/charts/Area";
import Badge from "components/Badge";
import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import CustomSelect from "components/form/CustomSelect";
import Input from "components/form/Input";
import Label from "components/form/Label";
import PolarArea from "components/charts/PolarArea";
import Textarea from "components/form/Textarea";

import DataChartJS from "data/chartjs";

const Dashboard = () => {
  const {
    visitors,
    lineWithAnnotationTO,
    lineWithAnnotationAO,
    lineWithAnnotationPO,
    lineWithAnnotationSO,
  } = DataChartJS();

  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Dashboard">
        <BreadcrumbItem link="#no-link">Login</BreadcrumbItem>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Summaries */}
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="card px-4 py-8 flex justify-center items-center text-center lg:transform hover:scale-110 hover:shadow-lg transition-transform duration-200">
            <div>
              <span className="text-primary text-5xl leading-none la la-sun"></span>
              <p className="mt-2">Published Posts</p>
              <div className="text-primary mt-5 text-3xl leading-none">18</div>
            </div>
          </div>
          <div className="card px-4 py-8 flex justify-center items-center text-center lg:transform hover:scale-110 hover:shadow-lg transition-transform duration-200">
            <div>
              <span className="text-primary text-5xl leading-none la la-cloud"></span>
              <p className="mt-2">Pending Posts</p>
              <div className="text-primary mt-5 text-3xl leading-none">16</div>
            </div>
          </div>
          <div className="card px-4 py-8 flex justify-center items-center text-center lg:transform hover:scale-110 hover:shadow-lg transition-transform duration-200">
            <div>
              <span className="text-primary text-5xl leading-none la la-layer-group"></span>
              <p className="mt-2">Categories</p>
              <div className="text-primary mt-5 text-3xl leading-none">9</div>
            </div>
          </div>
        </div>

        {/* Lines */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
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

        {/* Visitors */}
        <div className="card p-5">
          <h3>Visitors</h3>
          <div className="mt-5">
            <Area data={visitors} withShadow />
          </div>
        </div>

        {/* Recent Posts */}
        <div className="card p-5 flex flex-col">
          <h3>Recent Posts</h3>
          <table className="table table_list mt-3 w-full">
            <thead>
              <tr>
                <th className="ltr:text-left rtl:text-right uppercase">
                  Title
                </th>
                <th className="w-px uppercase">Views</th>
                <th className="w-px uppercase">Pulbished</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </td>
                <td className="text-center">100</td>
                <td className="text-center">
                  <Badge color="secondary" outlined className="uppercase">
                    Draft
                  </Badge>
                </td>
              </tr>
              <tr>
                <td>
                  Donec tempor lacus quis ex ullamcorper, ut cursus dui
                  pellentesque.
                </td>
                <td className="text-center">150</td>
                <td className="text-center">
                  <Badge color="success" outlined className="uppercase">
                    Published
                  </Badge>
                </td>
              </tr>
              <tr>
                <td>
                  Quisque molestie velit sed elit finibus, nec gravida nunc
                  finibus.
                </td>
                <td className="text-center">300</td>
                <td className="text-center">
                  <Badge color="warning" outlined className="uppercase">
                    Pending
                  </Badge>
                </td>
              </tr>
              <tr>
                <td>
                  Morbi nec nisl ac libero facilisis finibus vitae fringilla
                  dolor.
                </td>
                <td className="text-center">120</td>
                <td className="text-center">
                  <Badge color="success" outlined className="uppercase">
                    Published
                  </Badge>
                </td>
              </tr>
              <tr>
                <td>Donec suscipit libero in nibh fringilla hendrerit.</td>
                <td className="text-center">180</td>
                <td className="text-center">
                  <Badge color="secondary" outlined className="uppercase">
                    Draft
                  </Badge>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-auto">
            <a href="#no-link" className="btn btn_primary mt-5">
              Show all Posts
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="card p-5 flex flex-col">
          <h3>Categories</h3>
          <div className="flex-auto mt-5">
            <PolarArea withShadow />
          </div>
        </div>

        {/* Quick Post */}
        <div className="card p-5">
          <h3>Quick Post</h3>
          <form className="mt-5">
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="title">
                Title
              </Label>
              <Input id="title" />
            </div>
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="content">
                Content
              </Label>
              <Textarea id="content" rows="4"></Textarea>
            </div>
            <div className="mb-5">
              <Label className="block mb-2" htmlFor="category">
                Category
              </Label>
              <CustomSelect id="category">
                <option>Select</option>
                <option>Option</option>
              </CustomSelect>
            </div>
            <div className="mt-10">
              <Button className="uppercase">Publish</Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Dashboard;
