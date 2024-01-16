import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import Dropdown from "components/Dropdown";
import Input from "components/form/Input";
import InputGroup from "components/form/InputGroup";
import Sidebar from "components/Sidebar";

import { categories, products } from "data/pos";

const ApplicationsPointOfSale = () => {
  return (
    <>
      <main className="workspace workspace_with-sidebar">
        {/* Breadcrumb */}
        <div className="xl:flex items-start">
          <Breadcrumb title="Point Of Sale">
            <BreadcrumbItem link="#no-link">Applications</BreadcrumbItem>
            <BreadcrumbItem>Point Of Sale</BreadcrumbItem>
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
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {categories.map((item) => {
            return (
              <div key={item.id} className="card card_list card_hoverable">
                <div className="image image_icon">
                  <span className="la la-folder la-4x"></span>
                </div>
                <div className="body">
                  <h5>{item.name}</h5>
                  <p>{item.items} Items</p>
                </div>
              </div>
            );
          })}
        </div>

        <hr className="my-5 dark:border-gray-800" />

        {/* List */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {products.map((item) => {
            return (
              <div key={item.id} className="card card_column card_hoverable">
                <div className="image">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={require("assets/images/" + item.thumbnail)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="header">
                  <h3>{item.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <Footer />
      </main>

      <Sidebar>
        <div className="overflow-y-auto">
          {/* Shopping Bag */}
          <h2 className="p-5">Shopping Bag</h2>
          <hr />
          <div className="p-3">
            <p className="flex justify-between px-2 py-1 hover:bg-background rounded">
              <span>
                Potato
                <span className="text-muted"> x 1</span>
              </span>
              <span className="font-bold">$10</span>
            </p>
            <p className="flex justify-between px-2 py-1 hover:bg-background rounded">
              <span>
                Tomato
                <span className="text-muted"> x 2</span>
              </span>
              <span className="font-bold">$40</span>
            </p>
            <p className="flex justify-between px-2 py-1 hover:bg-background rounded">
              <span>
                Onion
                <span className="text-muted"> x 1</span>
              </span>
              <span className="font-bold">$10</span>
            </p>
          </div>

          {/* Coupon */}
          <h2 className="p-5">Coupon</h2>
          <hr />
          <InputGroup className="p-5">
            <Input
              className="input-group-item"
              placeholder="Enter Coupon Code"
            />
            <Button className="input-group-item uppercase">Apply</Button>
          </InputGroup>

          {/* Totals */}
          <h2 className="p-5">Totals</h2>
          <hr />
          <div className="px-5 py-3">
            <p className="flex justify-between py-1">
              Subtotal
              <span className="font-bold">$100</span>
            </p>
            <p className="flex justify-between py-1">
              Discount
              <span className="font-bold">-$10</span>
            </p>
            <p className="flex justify-between py-1">
              Tax
              <span className="font-bold">$15</span>
            </p>
            <hr className="my-4 border-dashed" />
            <h5 className="flex justify-between">
              Total Charge
              <span>$105</span>
            </h5>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="mt-auto">
          <hr />
          <div className="flex p-5">
            <Button color="danger" className="uppercase">
              Clear Items
            </Button>
            <Button className="uppercase ltr:ml-auto rtl:mr-auto">
              Charge
            </Button>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default ApplicationsPointOfSale;
