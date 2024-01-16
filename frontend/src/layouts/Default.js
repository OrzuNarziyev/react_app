import { Outlet } from "react-router-dom";

import Navigation from "partials/Navigation";

const LayoutDefault = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default LayoutDefault;
