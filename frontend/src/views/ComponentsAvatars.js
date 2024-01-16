import Footer from "partials/Footer";

import Avatar from "components/Avatar";
import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

import potato from "assets/images/potato.jpg";
import tomato from "assets/images/tomato.jpg";
import breakfast from "assets/images/breakfast.jpg";

const ComponentsAlerts = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Avatars">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Avatars</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-4 gap-5">
        {/* Default */}
        <div className="flex flex-col space-y-5">
          <div className="card p-5">
            <h3>Default</h3>
            <div className="flex items-center gap-x-4 mt-4">
              <Avatar>
                <img src={potato} alt="" />
              </Avatar>
              <Avatar size="medium">
                <img src={tomato} alt="" />
              </Avatar>
              <Avatar size="large">
                <img src={breakfast} alt="" />
              </Avatar>
            </div>
          </div>
          <div className="card p-5">
            <h3>Default With Initials</h3>
            <div className="flex items-center gap-x-4 mt-4">
              <Avatar>JD</Avatar>
              <Avatar size="medium">JD</Avatar>
              <Avatar size="large">JD</Avatar>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="card p-5">
            <h3>Default With Status</h3>
            <div className="flex items-center gap-x-4 mt-4">
              <Avatar status="success">
                <img src={potato} alt="" />
              </Avatar>
              <Avatar size="medium" status="warning">
                <img src={tomato} alt="" />
              </Avatar>
              <Avatar size="large" status="danger">
                <img src={breakfast} alt="" />
              </Avatar>
            </div>
          </div>
          <div className="card p-5">
            <h3>Default With Initials & Status</h3>
            <div className="flex items-center gap-x-4 mt-4">
              <Avatar status="success">JD</Avatar>
              <Avatar size="medium" status="warning">
                JD
              </Avatar>
              <Avatar size="large" status="danger">
                JD
              </Avatar>
            </div>
          </div>
        </div>

        {/* Shadowed */}
        <div className="flex flex-col space-y-5">
          <div className="card p-5">
            <h3>Shadowed</h3>
            <div className="flex items-center gap-x-4 mt-4">
              <Avatar withShadow>
                <img src={potato} alt="" />
              </Avatar>
              <Avatar size="medium" withShadow>
                <img src={tomato} alt="" />
              </Avatar>
              <Avatar size="large" withShadow>
                <img src={breakfast} alt="" />
              </Avatar>
            </div>
          </div>
          <div className="card p-5">
            <h3>Shadowed With Initials</h3>
            <div className="flex items-center gap-x-4 mt-4">
              <Avatar withShadow>JD</Avatar>
              <Avatar size="medium" withShadow>
                JD
              </Avatar>
              <Avatar size="large" withShadow>
                JD
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="card p-5">
            <h3>Shadowed With Status</h3>
            <div className="flex items-center gap-x-4 mt-4">
              <Avatar status="success" withShadow>
                <img src={potato} alt="" />
              </Avatar>
              <Avatar size="medium" status="warning" withShadow>
                <img src={tomato} alt="" />
              </Avatar>
              <Avatar size="large" status="danger" withShadow>
                <img src={breakfast} alt="" />
              </Avatar>
            </div>
          </div>
          <div className="card p-5">
            <h3>Shadowed With Initials & Status</h3>
            <div className="flex items-center gap-x-4 mt-4">
              <Avatar status="success" withShadow>
                JD
              </Avatar>
              <Avatar size="medium" status="warning" withShadow>
                JD
              </Avatar>
              <Avatar size="large" status="danger" withShadow>
                JD
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsAlerts;
