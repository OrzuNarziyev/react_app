import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Input from "components/form/Input";
import Label from "components/form/Label";

const FormLayout = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Layout">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Form</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="card p-5">
          <h3>Input Label Over</h3>
          <div className="relative mt-5">
            <Label
              className="absolute block bg-input top-0 ltr:ml-3 rtl:mr-3 px-1 rounded font-heading uppercase"
              htmlFor="input-1"
            >
              Label
            </Label>
            <Input
              id="input-1"
              className=" mt-2 pt-5"
              placeholder="Enter text here"
            />
          </div>
        </div>
        <div className="card p-5">
          <h3>Input Label Boxed Over</h3>
          <div className="relative mt-5">
            <Label
              className="absolute block bg-input border border-border rounded top-0 ltr:ml-4 rtl:mr-4 px-2 font-heading"
              htmlFor="input-2"
            >
              Label
            </Label>
            <Input
              id="input-2"
              className="mt-2 pt-5"
              placeholder="Enter text here"
            />
          </div>
        </div>
        <div className="card p-5">
          <h3>Input Label In</h3>
          <div className="relative mt-5">
            <Label
              className=" absolute block top-0 mt-2 ltr:ml-4 rtl:mr-4 font-heading uppercase"
              htmlFor="input-3"
            >
              Label
            </Label>
            <Input
              id="input-3"
              className="pt-8"
              placeholder="Enter text here"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default FormLayout;
