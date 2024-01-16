import { useState } from "react";

import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Button from "components/Button";
import Collapse, { Accordion, AccordionItem } from "components/Collapse";

const ComponentsCollapse = () => {
  const [firstCollapse, setFirstCollapse] = useState(false);
  const [secondCollapse, setSecondCollapse] = useState(true);

  const [activeIndex, setActiveIndex] = useState(3);

  const toggleFirstCollapse = () => setFirstCollapse(!firstCollapse);
  const toggleSecondCollapse = () => setSecondCollapse(!secondCollapse);
  const toggleBothCollapses = () => {
    setFirstCollapse(!firstCollapse);
    setSecondCollapse(!secondCollapse);
  };

  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Collapse">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Collapse</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Collapse */}
        <div className="card p-5">
          <h3>Collapse</h3>
          <div className="mt-5">
            <Button className="uppercase" onClick={toggleFirstCollapse}>
              Toggle Collapse
            </Button>
            <Collapse open={firstCollapse}>
              <div className="border border-divider rounded-xl mt-5 p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus accusamus porro eos soluta! Debitis ab quis nam
                sed, dolorum dolore illum qui iure eius voluptatum nemo
                accusamus blanditiis neque id.
              </div>
            </Collapse>
            <Button className="uppercase mt-5" onClick={toggleSecondCollapse}>
              Toggle Collapse
            </Button>
            <Collapse open={secondCollapse}>
              <div className="border border-divider rounded-xl mt-5 p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus accusamus porro eos soluta! Debitis ab quis nam
                sed, dolorum dolore illum qui iure eius voluptatum nemo
                accusamus blanditiis neque id.
              </div>
            </Collapse>
            <Button className="uppercase mt-5" onClick={toggleBothCollapses}>
              Toggle Collapse All
            </Button>
          </div>
        </div>

        {/* Accordion */}
        <div className="card p-5">
          <h3>Accordion</h3>
          <Accordion>
            <AccordionItem
              activeIndex={activeIndex}
              index={1}
              title="Accordion Title #1"
              onToggle={setActiveIndex}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              iure rem sed dicta ut a perspiciatis temporibus! Repudiandae
              quidem eaque unde culpa molestias neque dolores assumenda magnam,
              ut doloremque iste.
            </AccordionItem>
            <hr />
            <AccordionItem
              activeIndex={activeIndex}
              index={2}
              title="Accordion Title #2"
              onToggle={setActiveIndex}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              iure rem sed dicta ut a perspiciatis temporibus! Repudiandae
              quidem eaque unde culpa molestias neque dolores assumenda magnam,
              ut doloremque iste.
            </AccordionItem>
            <hr />
            <AccordionItem
              activeIndex={activeIndex}
              index={3}
              title="Accordion Title #3"
              onToggle={setActiveIndex}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              iure rem sed dicta ut a perspiciatis temporibus! Repudiandae
              quidem eaque unde culpa molestias neque dolores assumenda magnam,
              ut doloremque iste.
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsCollapse;
