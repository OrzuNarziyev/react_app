import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";

const ComponentsButtons = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Buttons">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Buttons</BreadcrumbItem>
      </Breadcrumb>

      {/* Default */}
      <div className="card p-5">
        <h3>Default</h3>
        <div className="flex flex-wrap gap-5 mt-5">
          <Button className="uppercase">Primary</Button>
          <Button color="secondary" className="uppercase">
            Secondary
          </Button>
          <Button color="success" className="uppercase">
            Success
          </Button>
          <Button color="danger" className="uppercase">
            Danger
          </Button>
          <Button color="warning" className="uppercase">
            Warning
          </Button>
          <Button color="info" className="uppercase">
            Info
          </Button>
          <Button className="uppercase" disabled>
            Disabled
          </Button>
          <Button className="uppercase">
            <span className="la la-star ltr:mr-2 rtl:ml-2"></span>
            With Icon
          </Button>
        </div>
      </div>

      {/* Outlined */}
      <div className="card mt-5 p-5">
        <h3>Outlined</h3>
        <div className="flex flex-wrap gap-5 mt-5">
          <Button outlined className="uppercase">
            Primary
          </Button>
          <Button outlined color="secondary" className="uppercase">
            Secondary
          </Button>
          <Button outlined color="success" className="uppercase">
            Success
          </Button>
          <Button outlined color="danger" className="uppercase">
            Danger
          </Button>
          <Button outlined color="warning" className="uppercase">
            Warning
          </Button>
          <Button outlined color="info" className="uppercase">
            Info
          </Button>
          <Button outlined className="uppercase" disabled>
            Disabled
          </Button>
          <Button outlined className="uppercase">
            <span className="la la-star ltr:mr-2 rtl:ml-2"></span>
            With Icon
          </Button>
        </div>
      </div>

      {/* Icon Default */}
      <div className="card mt-5 p-5">
        <h3>Icon Button Default</h3>
        <div className="flex flex-wrap gap-5 mt-5">
          <Button icon>
            <span className="la la-star"></span>
          </Button>
          <Button icon color="secondary">
            <span className="la la-star"></span>
          </Button>
          <Button icon color="success">
            <span className="la la-star"></span>
          </Button>
          <Button icon color="danger">
            <span className="la la-star"></span>
          </Button>
          <Button icon color="warning">
            <span className="la la-star"></span>
          </Button>
          <Button icon color="info">
            <span className="la la-star"></span>
          </Button>
          <Button icon disabled>
            <span className="la la-star"></span>
          </Button>
        </div>
      </div>

      {/* Icon Outlined */}
      <div className="card mt-5 p-5">
        <h3>Icon Button Outlined</h3>
        <div className="flex flex-wrap gap-5 mt-5">
          <Button icon outlined>
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined color="secondary">
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined color="success">
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined color="danger">
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined color="warning">
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined color="info">
            <span className="la la-star"></span>
          </Button>
          <Button icon outlined disabled>
            <span className="la la-star"></span>
          </Button>
        </div>
      </div>

      {/* Grouped */}
      <div className="card mt-5 p-5 flex flex-col gap-y-5">
        <h3>Grouped</h3>
        <div className="btn-group">
          <Button>L</Button>
          <Button>C</Button>
          <Button>R</Button>
        </div>
        <div className="btn-group">
          <Button outlined>L</Button>
          <Button outlined>C</Button>
          <Button outlined>R</Button>
        </div>
        <div className="btn-group">
          <Button>L</Button>
          <Button>L</Button>
          <Button outlined>R</Button>
          <Button outlined>R</Button>
        </div>
        <div className="btn-group">
          <Button outlined>L</Button>
          <Button outlined>L</Button>
          <Button>R</Button>
          <Button>R</Button>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsButtons;
