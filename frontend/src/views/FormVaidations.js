import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Checkbox from "components/form/Checkbox";
import CustomSelect from "components/form/CustomSelect";
import Input from "components/form/Input";
import Label from "components/form/Label";
import Radio from "components/form/Radio";
import Textarea from "components/form/Textarea";

const FormValidations = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Validations">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Form</BreadcrumbItem>
        <BreadcrumbItem>Validations</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-3 gap-5">
        <div className="flex flex-col gap-y-5">
          {/* Input */}
          <div className="card p-5">
            <h3>Input</h3>
            <div className="mt-5">
              <Label className="block mb-2" htmlFor="input">
                Label
              </Label>
              <Input id="input" placeholder="Enter text here" invalid />
              <small className="block mt-2 invalid-feedback">
                This is help text.
              </small>
            </div>
          </div>

          {/* Custom Select */}
          <div className="card p-5">
            <h3>Custom Select</h3>
            <div className="mt-5">
              <CustomSelect invalid>
                <option>Select</option>
                <option>Option</option>
              </CustomSelect>
            </div>
          </div>

          {/* Textarea */}
          <div className="card p-5">
            <h3>Textarea</h3>
            <div className="mt-5">
              <Textarea rows="5" invalid></Textarea>
            </div>
          </div>
        </div>

        <div>
          {/* Custom Input */}
          <div className="card p-5">
            <h3>Custom Input</h3>
            <h4 className="mt-5 uppercase">Checkbox</h4>
            <div className="mt-5">
              <Checkbox label="Checkbox" invalid />
            </div>
            <h4 className="mt-10 uppercase">Radio</h4>
            <div className="mt-5">
              <Radio name="radio" label="Radio" invalid />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default FormValidations;
