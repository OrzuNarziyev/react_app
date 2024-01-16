import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";

const PagesInvoice = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <div className="lg:flex items-start">
        <Breadcrumb title="Invoice">
          <BreadcrumbItem link="#no-link">Pages</BreadcrumbItem>
          <BreadcrumbItem>Invoice</BreadcrumbItem>
        </Breadcrumb>

        <div className="flex flex-wrap gap-2 items-center ltr:ml-auto rtl:mr-auto mb-5">
          <Button className="uppercase">
            <span className="la la-print text-xl leading-none ltr:mr-2 rtl:ml-2"></span>
            Print
          </Button>
          <Button outlined className="uppercase">
            <span className="la la-file-alt text-xl leading-none ltr:mr-2 rtl:ml-2"></span>
            Export PDF
          </Button>
        </div>
      </div>

      {/* Invoice */}
      <div className="card">
        <div className="p-10">
          <h2 className="uppercase text-4xl text-primary">Invoice</h2>
        </div>
        <hr />
        <div className="px-10 py-5 flex justify-between">
          <div>
            <strong>Invoice No.:</strong> 122619
          </div>
          <div>
            <strong>Date:</strong> 08/06/2021
          </div>
        </div>
        <hr />
        <div className="px-10 py-5 flex justify-between">
          <div>
            <h4 className="mb-2 uppercase">Invoice To</h4>
            <p className="leading-relaxed">
              Potato Johnes
              <br />
              15 Hodges Mews, CA
              <br />
              20205
              <br />
              United States
            </p>
          </div>
          <div className="ltr:text-right rtl:text-left">
            <h4 className="mb-2 uppercase">Payment To</h4>
            <p className="leading-relaxed">
              Tomato Johnes
              <br />
              15 Hodges Mews, CA
              <br />
              20205
              <br />
              United States
            </p>
          </div>
        </div>
        <hr />
        <div className="overflow-x-auto p-10">
          <table className="table table_list w-full">
            <thead>
              <tr>
                <th className="ltr:text-left rtl:text-right uppercase">
                  Description
                </th>
                <th className="w-px uppercase">Rate</th>
                <th className="w-px uppercase">QTY</th>
                <th className="w-px uppercase">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h5>Potato Fries</h5>
                  <p>Lorem ipsum dolor sit amet</p>
                </td>
                <td className="text-center">$10</td>
                <td className="text-center">2</td>
                <td className="text-center font-bold">$10</td>
              </tr>
              <tr>
                <td>
                  <h5>Tomato</h5>
                  <p>Consectetur adipiscing elit</p>
                </td>
                <td className="text-center">$10</td>
                <td className="text-center">2</td>
                <td className="text-center font-bold">$20</td>
              </tr>
              <tr>
                <td>
                  <h5>Onion</h5>
                  <p>Dolor sit amet</p>
                </td>
                <td className="text-center">$10</td>
                <td className="text-center">2</td>
                <td className="text-center font-bold">$10</td>
              </tr>
              <tr className="ltr:text-right rtl:text-left font-bold">
                <td colSpan="4">
                  Sub Total: $40
                  <br />
                  Tax: $5
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <div className="p-10 ltr:text-right rtl:text-left">
          <h4 className="uppercase">Total</h4>
          <p className="text-4xl my-4">$45</p>
          <p>Forty Five Dollars Only</p>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default PagesInvoice;
