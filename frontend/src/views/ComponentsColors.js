import Footer from "partials/Footer";

import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";

const ComponentsColors = () => {
  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <Breadcrumb title="Colors">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Components</BreadcrumbItem>
        <BreadcrumbItem>Colors</BreadcrumbItem>
      </Breadcrumb>

      <div className="flex flex-col gap-y-10">
        {/* Primary */}
        <div>
          <h3>Primary Colors</h3>
          <div className="flex flex-col gap-y-5 card mt-5 p-5">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Sky</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F0F9FF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#F0F9FF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#E0F2FE]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#E0F2FE</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#BAE6FD]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#BAE6FD</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#7DD3FC]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#7DD3FC</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#38BDF8]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#38BDF8</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#0EA5E9]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#0EA5E9</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#0284C7]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#0284C7</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#0369A1]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#0369A1</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#075985]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#075985</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#0C4A6E]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#0C4A6E</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#082F49]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#082F49</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Red</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FEF2F2]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#FEF2F2</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FEE2E2]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#FEE2E2</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FECACA]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#FECACA</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FCA5A5]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#FCA5A5</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F87171]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#F87171</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#EF4444]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#EF4444</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#DC2626]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#DC2626</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#B91C1C]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#B91C1C</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#991B1B]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#991B1B</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#7F1D1D]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#7F1D1D</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#450A0A]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#450A0A</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Orange</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FFF7ED]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#FFF7ED</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FFEDD5]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#FFEDD5</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FED7AA]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#FED7AA</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FDBA74]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#FDBA74</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FB923C]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#FB923C</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F97316]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#F97316</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#EA580C]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#EA580C</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#C2410C]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#C2410C</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#9A3412]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#9A3412</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#7C2D12]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#7C2D12</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#431407]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#431407</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Amber</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FFFBEB]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#FFFBEB</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FEF3C7]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#FEF3C7</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FDE68A]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#FDE68A</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FCD34D]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#FCD34D</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FBBF24]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#FBBF24</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F59E0B]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#F59E0B</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#D97706]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#D97706</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#B45309]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#B45309</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#92400E]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#92400E</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#78350F]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#78350F</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#451A03]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#451A03</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Yellow</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FEFCE8]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#FEFCE8</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FEF9C3]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#FEF9C3</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FEF08A]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#FEF08A</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FDE047]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#FDE047</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FACC15]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#FACC15</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#EAB308]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#EAB308</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#CA8A04]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#CA8A04</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#A16207]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#A16207</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#854D0E]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#854D0E</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#713F12]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#713F12</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#422006]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#422006</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Lime</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F7FEE7]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#F7FEE7</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#ECFCCB]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#ECFCCB</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#D9F99D]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#D9F99D</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#BEF264]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#BEF264</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#A3E635]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#A3E635</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#84CC16]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#84CC16</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#65A30D]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#65A30D</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#4D7C0F]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#4D7C0F</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#3F6212]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#3F6212</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#365314]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#365314</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#1A2E05]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#1A2E05</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Green</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F0FDF4]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#F0FDF4</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#DCFCE7]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#DCFCE7</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#BBF7D0]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#BBF7D0</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#86EFAC]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#86EFAC</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#4ADE80]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#4ADE80</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#22C55E]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#22C55E</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#16A34A]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#16A34A</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#15803D]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#15803D</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#166534]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#166534</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#14532D]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#14532D</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#052E16]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#052E16</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Emerald</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#ECFDF5]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#ECFDF5</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#D1FAE5]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#D1FAE5</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#A7F3D0]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#A7F3D0</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#6EE7B7]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#6EE7B7</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#34D399]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#34D399</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#10B981]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#10B981</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#059669]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#059669</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#047857]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#047857</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#065F46]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#065F46</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#064E3B]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#064E3B</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#022C22]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#022C22</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Teal</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F0FDFA]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#F0FDFA</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#CCFBF1]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#CCFBF1</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#99F6E4]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#99F6E4</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#5EEAD4]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#5EEAD4</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#2DD4BF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#2DD4BF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#14B8A6]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#14B8A6</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#0D9488]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#0D9488</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#0F766E]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#0F766E</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#115E59]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#115E59</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#134E4A]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#134E4A</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#042F2E]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#042F2E</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Cyan</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#ECFEFF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#ECFEFF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#CFFAFE]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#CFFAFE</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#A5F3FC]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#A5F3FC</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#67E8F9]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#67E8F9</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#22D3EE]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#22D3EE</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#06B6D4]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#06B6D4</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#0891B2]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#0891B2</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#0E7490]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#0E7490</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#155E75]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#155E75</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#164E63]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#164E63</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#083344]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#083344</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Blue</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#EFF6FF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#EFF6FF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#DBEAFE]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#DBEAFE</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#BFDBFE]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#BFDBFE</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#93C5FD]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#93C5FD</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#60A5FA]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#60A5FA</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#3B82F6]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#3B82F6</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#2563EB]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#2563EB</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#1D4ED8]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#1D4ED8</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#1E40AF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#1E40AF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#1E3A8A]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#1E3A8A</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#172554]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#172554</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Indigo</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#EEF2FF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#EEF2FF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#E0E7FF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#E0E7FF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#C7D2FE]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#C7D2FE</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#A5B4FC]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#A5B4FC</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#818CF8]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#818CF8</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#6366F1]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#6366F1</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#4F46E5]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#4F46E5</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#4338CA]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#4338CA</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#3730A3]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#3730A3</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#312E81]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#312E81</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#1E1B4B]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#1E1B4B</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Violet</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F5F3FF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#F5F3FF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#EDE9FE]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#EDE9FE</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#DDD6FE]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#DDD6FE</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#C4B5FD]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#C4B5FD</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#A78BFA]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#A78BFA</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#8B5CF6]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#8B5CF6</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#7C3AED]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#7C3AED</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#6D28D9]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#6D28D9</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#5B21B6]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#5B21B6</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#4C1D95]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#4C1D95</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#2E1065]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#2E1065</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Purple</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FAF5FF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#FAF5FF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F3E8FF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#F3E8FF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#E9D5FF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#E9D5FF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#D8B4FE]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#D8B4FE</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#C084FC]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#C084FC</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#A855F7]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#A855F7</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#9333EA]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#9333EA</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#7E22CE]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#7E22CE</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#6B21A8]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#6B21A8</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#581C87]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#581C87</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#3B0764]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#3B0764</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Fuchsia</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FDF4FF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#FDF4FF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FAE8FF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#FAE8FF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F5D0FE]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#F5D0FE</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F0ABFC]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#F0ABFC</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#E879F9]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#E879F9</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#D946EF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#D946EF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#C026D3]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#C026D3</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#A21CAF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#A21CAF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#86198F]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#86198F</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#701A75]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#701A75</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#4A044E]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#4A044E</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Pink</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FDF2F8]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#FDF2F8</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FCE7F3]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#FCE7F3</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FBCFE8]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#FBCFE8</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F9A8D4]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#F9A8D4</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F472B6]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#F472B6</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#EC4899]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#EC4899</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#DB2777]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#DB2777</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#BE185D]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#BE185D</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#9D174D]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#9D174D</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#831843]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#831843</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#500724]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#500724</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Rose</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FFF1F2]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#FFF1F2</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FFE4E6]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#FFE4E6</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FECDD3]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#FECDD3</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FDA4AF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#FDA4AF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FB7185]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#FB7185</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F43F5E]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#F43F5E</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#E11D48]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#E11D48</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#BE123C]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#BE123C</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#9F1239]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#9F1239</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#881337]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#881337</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#4C0519]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#4C0519</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gray */}
        <div>
          <h3>50 Shades of Gray</h3>
          <div className="flex flex-col gap-y-5 card mt-5 p-5">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Pure</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F9FAFB]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#F9FAFB</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F3F4F6]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#F3F4F6</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#E5E7EB]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#E5E7EB</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#D1D5DB]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#D1D5DB</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#9CA3AF]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#9CA3AF</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#6B7280]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#6B7280</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#4B5563]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#4B5563</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#374151]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#374151</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#1F2937]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#1F2937</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#111827]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#111827</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#030712]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#030712</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Slate</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F8FAFC]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#F8FAFC</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F1F5F9]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#F1F5F9</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#E2E8F0]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#E2E8F0</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#CBD5E1]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#CBD5E1</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#94A3B8]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#94A3B8</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#64748B]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#64748B</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#475569]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#475569</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#334155]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#334155</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#1E293B]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#1E293B</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#0F172A]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#0F172A</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#020617]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#020617</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Zinc</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FAFAFA]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#FAFAFA</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F4F4F5]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#F4F4F5</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#E4E4E7]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#E4E4E7</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#D4D4D8]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#D4D4D8</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#A1A1AA]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#A1A1AA</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#71717A]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#71717A</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#52525B]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#52525B</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#3F3F46]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#3F3F46</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#27272A]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#27272A</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#18181B]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#18181B</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#09090B]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#09090B</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Neutral</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FAFAFA]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#FAFAFA</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F5F5F5]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#F5F5F5</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#E5E5E5]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#E5E5E5</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#D4D4D4]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#D4D4D4</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#A3A3A3]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#A3A3A3</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#737373]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#737373</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#525252]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#525252</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#404040]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#404040</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#262626]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#262626</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#171717]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#171717</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#0A0A0A]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#0A0A0A</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col flex-shrink-0 justify-center w-24 h-10">
                <h5>Stone</h5>
              </div>
              <div className="grid grid-cols-6 xl:grid-cols-11 gap-5 flex-1">
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#FAFAF9]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>50</span>
                    <small>#FAFAF9</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#F5F5F4]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>100</span>
                    <small>#F5F5F4</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#E7E5E4]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>200</span>
                    <small>#E7E5E4</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#D6D3D1]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>300</span>
                    <small>#D6D3D1</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#A8A29E]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>400</span>
                    <small>#A8A29E</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#78716C]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>500</span>
                    <small>#78716C</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#57534E]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>600</span>
                    <small>#57534E</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#44403C]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>700</span>
                    <small>#44403C</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#292524]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>800</span>
                    <small>#292524</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#1C1917]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>900</span>
                    <small>#1C1917</small>
                  </div>
                </div>
                <div>
                  <div className="w-full h-10 rounded shadow-inner bg-[#0C0A09]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                    <span>950</span>
                    <small>#0C0A09</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ComponentsColors;
