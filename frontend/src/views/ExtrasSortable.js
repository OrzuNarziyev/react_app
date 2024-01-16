import { useState } from "react";

import { ReactSortable } from "react-sortablejs";

import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

const ExtrasSortable = () => {
  const [style1List, setStyle1List] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const [style2List, setStyle2List] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const [style3List, setStyle3List] = useState([
    { id: 1, icon: "la-sun", label: "Published Posts", value: 18 },
    { id: 2, icon: "la-cloud", label: "Pending Posts", value: 16 },
    { id: 3, icon: "la-layer-group", label: "Categories", value: 9 },
  ]);

  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Sortable">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Extras</BreadcrumbItem>
        <BreadcrumbItem>Sortable</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-y-5">
          {/* Style 1 */}
          <div className="card p-5">
            <h3>Style 1</h3>
            <div className="mt-5">
              <ReactSortable
                tag="ul"
                className="sortable"
                list={style1List}
                setList={setStyle1List}
                animation={150}
              >
                {style1List.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ReactSortable>
            </div>
          </div>

          {/* Style 2 */}
          <div className="card p-5">
            <h3>Style 2</h3>
            <div className="mt-5">
              <ReactSortable
                tag="ul"
                className="sortable"
                list={style2List}
                setList={setStyle2List}
                handle=".handle"
                animation={150}
              >
                {style2List.map((item) => (
                  <li key={item.id}>
                    <span className="handle la la-arrows"></span>
                    {item.name}
                  </li>
                ))}
              </ReactSortable>
            </div>
          </div>
        </div>

        <div>
          {/* Style 3 */}
          <div className="card p-5">
            <h3>Style 3</h3>
            <div className="mt-5">
              <ReactSortable
                className="grid lg:grid-cols-3 gap-5"
                list={style3List}
                setList={setStyle3List}
                animation={150}
              >
                {style3List.map((item) => (
                  <div
                    key={item.id}
                    className="card border border-divider px-4 py-8 text-center"
                  >
                    <span
                      className={`text-primary text-5xl leading-none la ${item.icon}`}
                    ></span>
                    <p className="mt-2">{item.label}</p>
                    <div className="text-primary mt-5 text-3xl leading-none">
                      {item.value}
                    </div>
                  </div>
                ))}
              </ReactSortable>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ExtrasSortable;
