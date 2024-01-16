import Tippy from "@tippyjs/react";

import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Checkbox from "components/form/Checkbox";
import CustomSelect from "components/form/CustomSelect";
import FileBrowser from "components/form/FileBrowser";
import Input from "components/form/Input";
import Label from "components/form/Label";
import Radio from "components/form/Radio";
import RangeSlider from "components/form/RangeSlider";
import RatingStars from "components/form/RatingStars";
import Switch from "components/form/Switch";
import Textarea from "components/form/Textarea";

const FormComponents = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Components">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Form</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
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
              <Input id="input" placeholder="Enter text here" />
              <small className="block mt-2">This is help text.</small>
            </div>
          </div>

          {/* Custom Select */}
          <div className="card p-5">
            <h3>Custom Select</h3>
            <div className="mt-5">
              <CustomSelect>
                <option>Select</option>
                <option>Option</option>
              </CustomSelect>
            </div>
          </div>

          {/* Textarea */}
          <div className="card p-5">
            <h3>Textarea</h3>
            <div className="mt-5">
              <Textarea rows="5"></Textarea>
            </div>
          </div>

          {/* File Browser */}
          <div className="card p-5">
            <h3>File Browser</h3>
            <div className="mt-5">
              <FileBrowser />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          {/* Custom Input */}
          <div className="card p-5">
            <h3>Custom Input</h3>
            <h4 className="mt-5 uppercase">Checkbox</h4>
            <div className="flex flex-col gap-y-2 mt-5">
              <Checkbox label="Checkbox" />
              <Checkbox label="Checkbox Checked" defaultChecked />
              <Checkbox
                label="Checkbox Partially Checked"
                defaultChecked
                partial
              />
            </div>
            <h4 className="mt-10 uppercase">Radio</h4>
            <div className="flex flex-col gap-y-2 mt-5">
              <Radio name="radio" label="Radio" />
              <Radio name="radio" label="Radio Checked" defaultChecked />
            </div>
          </div>

          {/* Switch */}
          <div className="card p-5">
            <h3>Switch</h3>
            <h4 className="mt-5 uppercase">Default</h4>
            <div className="flex flex-col gap-y-5 mt-5">
              <Switch label="Switched Off" />
              <Switch label="Switched On" defaultChecked />
            </div>
            <h4 className="mt-10 uppercase">Outlined</h4>
            <div className="flex flex-col gap-y-5 mt-5">
              <Switch label="Switched Off" outlined />
              <Switch label="Switched On" outlined defaultChecked />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          {/* Range Slider */}
          <div className="card p-5">
            <h3>Range Slider</h3>
            <div className="mt-5">
              <RangeSlider min="1" max="100" defaultValue="50" />
            </div>
          </div>

          {/* Rating */}
          <div className="card p-5">
            <h3>Rating</h3>
            <div className="mt-5">
              <RatingStars />
            </div>
          </div>

          {/* Search & Select */}
          <div className="card p-5">
            <h3>Search & Select</h3>
            <div className="search-select mt-5">
              <Tippy
                content={
                  <div className="search-select-menu">
                    <h6 className="uppercase">Nepal</h6>
                    <div className="item">Kathmandu</div>
                    <div className="item active">Pokhara</div>
                    <div className="item">Lumbini</div>
                    <h6 className="uppercase">India</h6>
                    <div className="item">Delhi</div>
                    <div className="item">Mumbai</div>
                    <div className="item">Karnataka</div>
                  </div>
                }
                theme="light-border"
                offset={[0, 8]}
                maxWidth="none"
                arrow={false}
                placement="bottom-start"
                trigger="click"
                interactive
                allowHTML
                animation="shift-toward-extreme"
              >
                <label className="form-control-addon-within flex-row-reverse">
                  <input
                    className="form-control ltr:pl-2 rtl:pr-2 border-none w-full"
                    placeholder="Search"
                    defaultValue="Lumbini"
                  />
                  <span className="flex items-center ltr:pl-4 rtl:pr-4">
                    <span className="badge badge_primary">
                      Pokhara
                      <button
                        type="button"
                        className="ltr:ml-1 rtl:mr-1 la la-times"
                      ></button>
                    </span>
                  </span>
                </label>
              </Tippy>
            </div>
          </div>

          {/* Tags Input */}
          <div className="card p-5">
            <h3>Tags Input</h3>
            <div className="mt-5">
              <label className="form-control-addon-within flex-row-reverse">
                <input
                  className="form-control ltr:pl-2 rtl:pr-2 border-none w-full"
                  placeholder="Enter a tag"
                />
                <span className="flex items-center ltr:pl-4 rtl:pr-4">
                  <span className="badge badge_primary">
                    tag
                    <button
                      type="button"
                      className="ltr:ml-1 rtl:mr-1 la la-times"
                    ></button>
                  </span>
                </span>
              </label>
            </div>
          </div>

          {/* Dropzone */}
          <div className="card p-5">
            <h3>Dropzone</h3>
            <div className="dropzone mt-5">
              <h3>Drop files here to upload</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default FormComponents;
