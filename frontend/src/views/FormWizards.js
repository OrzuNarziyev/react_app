import { useState } from "react";

import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import Input from "components/form/Input";
import Label from "components/form/Label";
import Tabs, {
  TabsContent,
  TabsContentItem,
  TabsNavigation,
  TabsNavigationItem,
} from "components/Tabs";

const FormWizards = () => {
  const [activeIndexStyle1, setActiveIndexStyle1] = useState(1);
  const [activeIndexStyle2, setActiveIndexStyle2] = useState(1);

  const tabsStyle1 = 3;
  const tabsStyle2 = 3;

  const gotoPreviousTab = (activeIndex, setActiveIndex) => {
    const newIndex = activeIndex - 1;
    if (newIndex >= 1) {
      setActiveIndex(newIndex);
    }
  };

  const gotoNextTab = (activeIndex, setActiveIndex, tabs) => {
    const newIndex = activeIndex + 1;
    if (newIndex <= tabs) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Wizards">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Form</BreadcrumbItem>
        <BreadcrumbItem>Wizards</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Style 1 */}
        <div>
          <h3>Style 1</h3>
          <div className="card mt-5 p-5">
            <Tabs
              activeIndex={activeIndexStyle1}
              onActiveIndexChange={setActiveIndexStyle1}
              className="wizard"
            >
              <TabsNavigation>
                <TabsNavigationItem index={1}>
                  Step 1<small>First step description</small>
                </TabsNavigationItem>
                <TabsNavigationItem index={2}>
                  Step 2<small>Second step description</small>
                </TabsNavigationItem>
                <TabsNavigationItem index={3}>
                  Step 3<small>Third step description</small>
                </TabsNavigationItem>
              </TabsNavigation>
              <TabsContent>
                <TabsContentItem index={1}>
                  <div>
                    <div className="mb-5">
                      <Label className="block mb-2" htmlFor="email">
                        Email
                      </Label>
                      <Input id="email" placeholder="example@example.com" />
                    </div>
                    <div className="mb-5">
                      <Label className="block mb-2" htmlFor="password">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        defaultValue="12345"
                      />
                    </div>
                  </div>
                </TabsContentItem>
                <TabsContentItem index={2}>Step 2 Content</TabsContentItem>
                <TabsContentItem index={3}>Step 3 Content</TabsContentItem>
              </TabsContent>
              <div className="mt-5">
                <div className="btn-group">
                  <Button
                    className="uppercase"
                    onClick={() =>
                      gotoPreviousTab(activeIndexStyle1, setActiveIndexStyle1)
                    }
                  >
                    Previous
                  </Button>
                  <Button
                    className="uppercase"
                    onClick={() =>
                      gotoNextTab(
                        activeIndexStyle1,
                        setActiveIndexStyle1,
                        tabsStyle1
                      )
                    }
                  >
                    Next
                  </Button>
                </div>
              </div>
            </Tabs>
          </div>
        </div>

        {/* Style 2 */}
        <div>
          <h3>Style 2</h3>
          <div className="card mt-5 p-5">
            <Tabs
              activeIndex={activeIndexStyle2}
              onActiveIndexChange={setActiveIndexStyle2}
              className="wizard wizard-style-2"
            >
              <TabsNavigation>
                <TabsNavigationItem index={1}>
                  Step 1<small>First step description</small>
                </TabsNavigationItem>
                <TabsNavigationItem index={2}>
                  Step 2<small>Second step description</small>
                </TabsNavigationItem>
                <TabsNavigationItem index={3}>
                  Step 3<small>Third step description</small>
                </TabsNavigationItem>
              </TabsNavigation>
              <TabsContent className="mt-8">
                <TabsContentItem index={1}>
                  <div>
                    <div className="mb-5">
                      <Label className="block mb-2" htmlFor="email">
                        Email
                      </Label>
                      <Input id="email" placeholder="example@example.com" />
                    </div>
                    <div className="mb-5">
                      <Label className="block mb-2" htmlFor="password">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        defaultValue="12345"
                      />
                    </div>
                  </div>
                </TabsContentItem>
                <TabsContentItem index={2}>Step 2 Content</TabsContentItem>
                <TabsContentItem index={3}>Step 3 Content</TabsContentItem>
              </TabsContent>
              <div className="mt-5">
                <div className="btn-group">
                  <Button
                    className="uppercase"
                    onClick={() =>
                      gotoPreviousTab(activeIndexStyle2, setActiveIndexStyle2)
                    }
                  >
                    Previous
                  </Button>
                  <Button
                    className="uppercase"
                    onClick={() =>
                      gotoNextTab(
                        activeIndexStyle2,
                        setActiveIndexStyle2,
                        tabsStyle2
                      )
                    }
                  >
                    Next
                  </Button>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default FormWizards;
