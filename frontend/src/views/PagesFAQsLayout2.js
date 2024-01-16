import { useState } from "react";

import Footer from "partials/Footer";

import { Accordion, AccordionItem } from "components/Collapse";
import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import Sidebar from "components/Sidebar";

const PagesFAQsLayout2 = () => {
  const [activeIndex1, setActiveIndex1] = useState(3);
  const [activeIndex2, setActiveIndex2] = useState(3);

  return (
    <>
      <main className="workspace workspace_with-sidebar">
        {/* Breadcrumb */}
        <Breadcrumb title="FAQs">
          <BreadcrumbItem link="#no-link">Pages</BreadcrumbItem>
          <BreadcrumbItem link="#no-link">FAQs</BreadcrumbItem>
          <BreadcrumbItem>Layout 2</BreadcrumbItem>
        </Breadcrumb>

        {/* FAQs */}
        <div className="flex flex-col gap-y-5">
          <div className="card p-5">
            <h3>Questions Regarding Potato</h3>
            <Accordion>
              <AccordionItem
                activeIndex={activeIndex1}
                index={1}
                title="Who Created Potato"
                onToggle={setActiveIndex1}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                iure rem sed dicta ut a perspiciatis temporibus! Repudiandae
                quidem eaque unde culpa molestias neque dolores assumenda
                magnam, ut doloremque iste.
              </AccordionItem>
              <hr />
              <AccordionItem
                activeIndex={activeIndex1}
                index={2}
                title="We Want Potato"
                onToggle={setActiveIndex1}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                iure rem sed dicta ut a perspiciatis temporibus! Repudiandae
                quidem eaque unde culpa molestias neque dolores assumenda
                magnam, ut doloremque iste.
              </AccordionItem>
              <hr />
              <AccordionItem
                activeIndex={activeIndex1}
                index={3}
                title="Where To Buy Potato"
                onToggle={setActiveIndex1}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                iure rem sed dicta ut a perspiciatis temporibus! Repudiandae
                quidem eaque unde culpa molestias neque dolores assumenda
                magnam, ut doloremque iste.
              </AccordionItem>
            </Accordion>
          </div>
          <div className="card p-5">
            <h3>Fruits</h3>
            <Accordion>
              <AccordionItem
                activeIndex={activeIndex2}
                index={1}
                title="Who Created Potato"
                onToggle={setActiveIndex2}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                iure rem sed dicta ut a perspiciatis temporibus! Repudiandae
                quidem eaque unde culpa molestias neque dolores assumenda
                magnam, ut doloremque iste.
              </AccordionItem>
              <hr />
              <AccordionItem
                activeIndex={activeIndex2}
                index={2}
                title="We Want Potato"
                onToggle={setActiveIndex2}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                iure rem sed dicta ut a perspiciatis temporibus! Repudiandae
                quidem eaque unde culpa molestias neque dolores assumenda
                magnam, ut doloremque iste.
              </AccordionItem>
              <hr />
              <AccordionItem
                activeIndex={activeIndex2}
                index={3}
                title="Where To Buy Potato"
                onToggle={setActiveIndex2}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                iure rem sed dicta ut a perspiciatis temporibus! Repudiandae
                quidem eaque unde culpa molestias neque dolores assumenda
                magnam, ut doloremque iste.
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <Footer />
      </main>

      <Sidebar>
        <div className="overflow-y-auto">
          <h2 className="p-5">Categories</h2>
          <hr />
          <div className="p-5 leading-normal">
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-laptop text-muted text-2xl ltr:mr-2 rtl:ml-2"></span>
              Questions Regarding Potato
            </a>
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-apple-alt text-muted text-2xl ltr:mr-2 rtl:ml-2"></span>
              Fruits
            </a>
            <hr className="my-2" />
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-egg text-muted text-2xl ltr:mr-2 rtl:ml-2"></span>
              Tomato
            </a>
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-hamburger text-muted text-2xl ltr:mr-2 rtl:ml-2"></span>
              Onions Have Skin?
            </a>
            <hr className="my-2" />
            <a href="#no-link" className="flex items-center text-normal">
              <span className="la la-lemon text-muted text-2xl ltr:mr-2 rtl:ml-2"></span>
              We Know Nothing
            </a>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default PagesFAQsLayout2;
