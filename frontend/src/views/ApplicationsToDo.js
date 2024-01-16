import Footer from "partials/Footer";

import Badge from "components/Badge";
import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import Checkbox from "components/form/Checkbox";
import Dropdown from "components/Dropdown";
import Sidebar from "components/Sidebar";

const ApplicationsToDo = () => {
  return (
    <>
      <main className="workspace workspace_with-sidebar">
        {/* Breadcrumb */}
        <section className="lg:flex items-start">
          <Breadcrumb title="To Do">
            <BreadcrumbItem link="#no-link">Applications</BreadcrumbItem>
            <BreadcrumbItem>To Do</BreadcrumbItem>
          </Breadcrumb>

          <div className="flex flex-wrap gap-2 items-center ltr:ml-auto rtl:mr-auto mb-5">
            {/* Search */}
            <form className="flex flex-auto">
              <label className="form-control-addon-within rounded-full">
                <input
                  className="form-control border-none"
                  placeholder="Search"
                />
                <button className="text-gray-300 dark:text-gray-700 text-xl leading-none la la-search ltr:mr-4 rtl:ml-4"></button>
              </label>
            </form>

            {/* Sort By */}
            <Dropdown
              content={
                <div className="dropdown-menu">
                  <a href="#no-link">Ascending</a>
                  <a href="#no-link">Descending</a>
                </div>
              }
            >
              <Button color="secondary" outlined className="uppercase">
                Sort By
                <span className="ltr:ml-3 rtl:mr-3 la la-caret-down text-xl leading-none"></span>
              </Button>
            </Dropdown>

            {/* Add New */}
            <Button className="uppercase">Add New</Button>
          </div>
        </section>

        {/* To Do */}
        <div className="flex flex-col gap-y-5 ">
          <div className="card relative p-5">
            <div className="lg:absolute top-0 ltr:right-0 rtl:left-0 lg:mt-3 lg:ltr:mr-5 lg:rtl:ml-5 mb-5 lg:flex items-center justify-end ltr:text-right rtl:text-left">
              <span className="inline-flex text-muted pb-2 lg:pb-0">
                March 10, 2020
              </span>
              <a
                href="#no-link"
                className="btn btn-icon btn_outlined btn_secondary ltr:ml-5 rtl:mr-5"
              >
                <span className="la la-pen-fancy"></span>
              </a>
              <a
                href="#no-link"
                className="btn btn-icon btn_outlined btn_danger ltr:ml-2 rtl:mr-2"
              >
                <span className="la la-trash-alt"></span>
              </a>
            </div>
            <table className="table table_hoverable w-full">
              <thead>
                <tr>
                  <th className="w-px">
                    <Checkbox defaultChecked partial />
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Potato
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    Donec tempor lacus quis ex ullamcorper, ut cursus dui
                    pellentesque.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    Quisque molestie velit sed elit finibus, nec gravida nunc
                    finibus.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <input
                      className="w-full bg-transparent outline-none placeholder:text-placeholder"
                      placeholder="add new task here ..."
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* To Do */}
          <div className="card relative p-5">
            <div className="lg:absolute top-0 ltr:right-0 rtl:left-0 lg:mt-3 lg:ltr:mr-5 lg:rtl:ml-5 mb-5 lg:flex items-center justify-end ltr:text-right rtl:text-left">
              <span className="inline-flex text-muted pb-2 lg:pb-0">
                March 10, 2020
              </span>
              <a
                href="#no-link"
                className="btn btn-icon btn_outlined btn_secondary ltr:ml-5 rtl:mr-5"
              >
                <span className="la la-pen-fancy"></span>
              </a>
              <a
                href="#no-link"
                className="btn btn-icon btn_outlined btn_danger ltr:ml-2 rtl:mr-2"
              >
                <span className="la la-trash-alt"></span>
              </a>
            </div>
            <table className="table table_hoverable w-full">
              <thead>
                <tr>
                  <th className="w-px">
                    <Checkbox defaultChecked partial />
                  </th>
                  <th className="ltr:text-left rtl:text-right uppercase">
                    Tomato
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    Donec tempor lacus quis ex ullamcorper, ut cursus dui
                    pellentesque.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    Quisque molestie velit sed elit finibus, nec gravida nunc
                    finibus.
                  </td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <input
                      className="w-full bg-transparent outline-none placeholder:text-placeholder"
                      placeholder="add new task here ..."
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Footer />
      </main>

      <Sidebar>
        <div className="overflow-y-auto">
          {/* Status */}
          <h2 className="p-5">Status</h2>
          <hr />
          <div className="flex flex-col gap-y-5 p-5">
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-sync text-2xl leading-none ltr:mr-2 rtl:ml-2"></span>
              Pending Tasks
              <Badge
                outlined
                className="ltr:mr-2 rtl:ml-2 ltr:ml-auto rtl:mr-auto"
              >
                10
              </Badge>
            </a>
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-check-circle text-2xl leading-none ltr:mr-2 rtl:ml-2"></span>
              Completed Tasks
              <Badge
                outlined
                className="ltr:mr-2 rtl:ml-2 ltr:ml-auto rtl:mr-auto"
              >
                20
              </Badge>
            </a>
          </div>

          {/* Categories */}
          <h2 className="p-5">Categories</h2>
          <hr />
          <div className="flex flex-col gap-y-5 p-5">
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span></span>
              <span>Potato</span>
              <span className="badge badge_outlined badge_primary ltr:mr-2 rtl:ml-2 ltr:ml-auto rtl:mr-auto">
                10
              </span>
            </label>
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span></span>
              <span>Tomato</span>
              <span className="badge badge_outlined badge_primary ltr:mr-2 rtl:ml-2 ltr:ml-auto rtl:mr-auto">
                20
              </span>
            </label>
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span></span>
              <span>Onion</span>
              <span className="badge badge_outlined badge_primary ltr:mr-2 rtl:ml-2 ltr:ml-auto rtl:mr-auto">
                10
              </span>
            </label>
          </div>

          {/* Tags */}
          <h2 className="p-5">Tags</h2>
          <hr />
          <div className="flex gap-2 p-5">
            <button className="badge badge_outlined badge_primary">
              Potato
            </button>
            <button className="badge badge_outlined badge_success">
              Tomato
            </button>
            <button className="badge badge_outlined badge_warning">
              Onion
            </button>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default ApplicationsToDo;
