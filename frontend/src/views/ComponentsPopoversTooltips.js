import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import Popover from "components/Popover";
import Tooltip from "components/Tooltip";

const ComponentsPopoversTooltips = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Popovers & Tooltips">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Popovers & Tooltips</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-y-5">
          {/* Popovers */}
          <div className="card p-5">
            <h3>Popovers</h3>
            <div className="mt-5">
              <Popover
                title="Popover Title"
                content="Here’s some amazing content. It’s very engaging. Right?"
                placement="right"
              >
                <Button className="uppercase">Toggle Popover</Button>
              </Popover>
            </div>
          </div>

          {/* Tooltips */}
          <div className="card p-5">
            <h3>Tooltips</h3>
            <div className="mt-5">
              <Tooltip content="Tooltip on the right" placement="right">
                <Button className="uppercase">Button</Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsPopoversTooltips;
