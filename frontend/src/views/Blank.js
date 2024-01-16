import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

const Blank = () => {
  return (
    <main className="workspace">
      <Breadcrumb title="Blank Page">
        <BreadcrumbItem link="#no-link">Pages</BreadcrumbItem>
        <BreadcrumbItem>Home Pagefgh fgg</BreadcrumbItem>
      </Breadcrumb>

      <Footer />
    </main>
  );
};

export default Blank;
