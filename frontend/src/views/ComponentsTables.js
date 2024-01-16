import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

const ComponentsTables = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Tables">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Tables</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-y-5">
          {/* Basic */}
          <div className="card p-5">
            <h3>Basic</h3>
            <table className="table w-full mt-3">
              <thead>
                <tr>
                  <th className="ltr:text-left rtl:text-right uppercase">#</th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    First
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Last
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bordered */}
          <div className="card p-5">
            <h3>Bordered</h3>
            <table className="table table_bordered w-full mt-3">
              <thead>
                <tr>
                  <th className="ltr:text-left rtl:text-right uppercase">#</th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    First
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Last
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Hoverable */}
          <div className="card p-5">
            <h3>Hoverable</h3>
            <table className="table table_hoverable w-full mt-3">
              <thead>
                <tr>
                  <th className="ltr:text-left rtl:text-right uppercase">#</th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    First
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Last
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Striped */}
        <div className="flex flex-col gap-y-5">
          <div className="card p-5">
            <h3>Striped</h3>
            <table className="table table_striped w-full mt-3">
              <thead>
                <tr>
                  <th className="ltr:text-left rtl:text-right uppercase">#</th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    First
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Last
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Borderless */}
          <div className="card p-5">
            <h3>Borderless</h3>
            <table className="table table_borderless w-full mt-3">
              <thead>
                <tr>
                  <th className="ltr:text-left rtl:text-right uppercase">#</th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    First
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Last
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>John</td>
                  <td>Doe</td>
                  <td>@john</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsTables;
