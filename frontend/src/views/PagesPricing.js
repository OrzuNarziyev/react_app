import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

const PagesPricing = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <section className="breadcrumb">
        <Breadcrumb title="Pricing">
          <BreadcrumbItem link="#no-link">Pages</BreadcrumbItem>
          <BreadcrumbItem>Pricing</BreadcrumbItem>
        </Breadcrumb>
      </section>

      {/* Pricing */}
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="card text-center">
          <div className="p-5">
            <h2 className="uppercase">Gold</h2>
            <h4 className="uppercase mt-2">For Small Projects</h4>
          </div>
          <div className="p-5 bg-background bg-opacity-50 dark:bg-opacity-50 uppercase text-primary">
            <div className="text-2xl font-bold mb-2">$15</div>
            <span className="border-t border-primary pt-1 text-xs">
              Monthly
            </span>
          </div>
          <div className="p-5">
            <a href="#no-link" className="btn btn_primary uppercase">
              Get Started
            </a>
          </div>
          <hr className="border-dashed" />
          <div className="p-5">
            <ul className="leading-loose">
              <li>Upto 5 Users</li>
              <li>Max 100 Items</li>
              <li>500 Queries To Database</li>
              <li>Basic Statistics</li>
              <li>Email Support</li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="p-5">
            <h2 className="uppercase">Diamond</h2>
            <h4 className="uppercase mt-2">For Medium Projects</h4>
          </div>
          <div className="p-5 bg-background bg-opacity-50 dark:bg-opacity-50 uppercase text-primary">
            <div className="text-2xl font-bold mb-2">$25</div>
            <span className="border-t border-primary pt-1 text-xs">
              Monthly
            </span>
          </div>
          <div className="p-5">
            <a href="#no-link" className="btn btn_primary uppercase">
              Get Started
            </a>
          </div>
          <hr className="border-dashed" />
          <div className="p-5">
            <ul className="leading-loose">
              <li>Upto 5 Users</li>
              <li>Max 100 Items</li>
              <li>500 Queries To Database</li>
              <li>Basic Statistics</li>
              <li>Email Support</li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="p-5">
            <h2 className="uppercase">To The Moon</h2>
            <h4 className="uppercase mt-2">For Complex Projects</h4>
          </div>
          <div className="p-5 bg-background bg-opacity-50 dark:bg-opacity-50 uppercase text-primary">
            <div className="text-2xl font-bold mb-2">$35</div>
            <span className="border-t border-primary pt-1 text-xs">
              Monthly
            </span>
          </div>
          <div className="p-5">
            <a href="#no-link" className="btn btn_primary uppercase">
              Get Started
            </a>
          </div>
          <hr className="border-dashed" />
          <div className="p-5">
            <ul className="leading-loose">
              <li>Upto 5 Users</li>
              <li>Max 100 Items</li>
              <li>500 Queries To Database</li>
              <li>Basic Statistics</li>
              <li>Email Support</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default PagesPricing;
