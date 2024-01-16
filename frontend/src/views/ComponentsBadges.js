import Footer from "partials/Footer";

import Badge from "components/Badge";
import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

const ComponentsBadges = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Badges">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Badges</BreadcrumbItem>
      </Breadcrumb>

      {/* Default */}
      <div className="card p-5">
        <h3>Default</h3>
        <div className="flex flex-wrap gap-5 mt-5">
          <Badge className="uppercase">Primary</Badge>
          <Badge color="secondary" className="uppercase">
            Secondary
          </Badge>
          <Badge color="success" className="uppercase">
            Success
          </Badge>
          <Badge color="danger" className="uppercase">
            Danger
          </Badge>
          <Badge color="warning" className="uppercase">
            Warning
          </Badge>
          <Badge color="info" className="uppercase">
            Info
          </Badge>
        </div>
      </div>

      {/* Outlined */}
      <div className="card mt-5 p-5">
        <h3>Outlined</h3>
        <div className="flex flex-wrap gap-5 mt-5">
          <Badge outlined className="uppercase">
            Primary
          </Badge>
          <Badge color="secondary" outlined className="uppercase">
            Secondary
          </Badge>
          <Badge color="success" outlined className="uppercase">
            Success
          </Badge>
          <Badge color="danger" outlined className="uppercase">
            Danger
          </Badge>
          <Badge color="warning" outlined className="uppercase">
            Warning
          </Badge>
          <Badge color="info" outlined className="uppercase">
            Info
          </Badge>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsBadges;
