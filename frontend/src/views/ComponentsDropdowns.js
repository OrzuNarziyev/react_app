import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import Dropdown from "components/Dropdown";

const ComponentsDropdowns = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Dropdowns">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Dropdowns</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-y-5">
          {/* Dropdowns */}
          <div className="card p-5">
            <h3>Dropdowns</h3>
            <div className="mt-5">
              <Dropdown
                content={
                  <div className="dropdown-menu">
                    <a href="#no-link">Dropdown Action</a>
                    <a href="#no-link">Link</a>
                    <hr />
                    <h6 className="uppercase">Header</h6>
                    <a href="#no-link">Something Else</a>
                  </div>
                }
              >
                <Button className="uppercase">
                  Dropdown
                  <span className="ltr:ml-3 rtl:mr-3 la la-caret-down text-xl leading-none"></span>
                </Button>
              </Dropdown>
            </div>
          </div>

          {/* Split Dropdowns */}
          <div className="card p-5">
            <h3>Split Dropdowns</h3>
            <div className="mt-5">
              <div className="btn-group">
                <Button className="uppercase">Split Dropdown</Button>
                <Dropdown
                  content={
                    <div className="dropdown-menu">
                      <a href="#no-link">Dropdown Action</a>
                      <a href="#no-link">Link</a>
                      <hr />
                      <h6 className="uppercase">Header</h6>
                      <a href="#no-link">Something Else</a>
                    </div>
                  }
                >
                  <Button className="uppercase ltr:pl-4 rtl:pr-4">
                    <span className="la la-caret-down text-xl leading-none"></span>
                  </Button>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsDropdowns;
