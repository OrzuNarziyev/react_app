import Footer from "partials/Footer";

import Alert from "components/Alert";
import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

const ComponentsAlerts = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Alerts">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Alerts</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Default */}
        <div className="card p-5 flex flex-col gap-y-5">
          <h3>Default</h3>
          <Alert title="Hello!" dismissable>
            This is an alert message.
          </Alert>
          <Alert title="Hello!" color="secondary" dismissable>
            This is an alert message.
          </Alert>
          <Alert title="Hello!" color="success" dismissable>
            This is an alert message.
          </Alert>
          <Alert title="Hello!" color="danger" dismissable>
            This is an alert message.
          </Alert>
          <Alert title="Hello!" color="warning" dismissable>
            This is an alert message.
          </Alert>
          <Alert title="Hello!" color="info" dismissable>
            This is an alert message.
          </Alert>
        </div>

        {/* Outlined */}
        <div className="card p-5 flex flex-col gap-y-5">
          <h3>Outlined</h3>
          <Alert title="Hello!" outlined dismissable>
            This is an alert message.
          </Alert>
          <Alert title="Hello!" color="secondary" outlined dismissable>
            This is an alert message.
          </Alert>
          <Alert title="Hello!" color="success" outlined dismissable>
            This is an alert message.
          </Alert>
          <Alert title="Hello!" color="danger" outlined dismissable>
            This is an alert message.
          </Alert>
          <Alert title="Hello!" color="warning" outlined dismissable>
            This is an alert message.
          </Alert>
          <Alert title="Hello!" color="info" outlined dismissable>
            This is an alert message.
          </Alert>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsAlerts;
