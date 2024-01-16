import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import Input from "components/form/Input";
import InputGroup, { InputGroupAddon } from "components/form/InputGroup";

const FormInputGroups = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Input Groups">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Form</BreadcrumbItem>
        <BreadcrumbItem>Input Groups</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="flex flex-col gap-y-5 lg:col-span-1">
          {/* Basic */}
          <div className="card p-5">
            <h3>Basic</h3>
            <div className="mt-5">
              <InputGroup>
                <InputGroupAddon type="prepend">@</InputGroupAddon>
                <Input className="input-group-item" placeholder="username" />
              </InputGroup>
            </div>
            <div className="mt-5">
              <InputGroup>
                <Input className="input-group-item" placeholder="example" />
                <InputGroupAddon type="append">.com</InputGroupAddon>
              </InputGroup>
            </div>
          </div>

          {/* Button Addons */}
          <div className="card p-5">
            <h3>Button Addons</h3>
            <div className="mt-5">
              <InputGroup>
                <Input className="input-group-item" placeholder="Input" />
                <Button className="input-group-item uppercase">Button</Button>
              </InputGroup>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 lg:col-span-2">
          {/* Multiple Inputs */}
          <div className="card p-5">
            <h3>Multiple Inputs</h3>
            <div className="mt-5">
              <InputGroup>
                <InputGroupAddon type="prepend">
                  First and last name
                </InputGroupAddon>
                <Input className="input-group-item" placeholder="First name" />
                <Input className="input-group-item" placeholder="Last name" />
              </InputGroup>
            </div>
          </div>

          {/* Multiple Addons */}
          <div className="card p-5">
            <h3>Multiple Addons</h3>
            <div className="mt-5">
              <InputGroup>
                <InputGroupAddon type="prepend">$</InputGroupAddon>
                <InputGroupAddon type="prepend">0.00</InputGroupAddon>
                <Input className="input-group-item" placeholder="Input" />
              </InputGroup>
            </div>
            <div className="mt-5">
              <InputGroup>
                <Input className="input-group-item" placeholder="Input" />
                <InputGroupAddon type="append">$</InputGroupAddon>
                <InputGroupAddon type="append">0.00</InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default FormInputGroups;
