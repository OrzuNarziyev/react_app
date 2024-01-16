import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutDefault from "layouts/Default";
// import LayoutBlank from "layouts/Blank";

// import Dashboard from "views/Dashboard";

import Blank from "views/Blank";

// import FormComponents from "views/FormComponents";
// import FormInputGroups from "views/FormInputGroups";
// import FormLayout from "views/FormLayout";
// import FormValidations from "views/FormVaidations";
// import FormWizards from "views/FormWizards";
// import ComponentsAlerts from "views/ComponentsAlerts";
// import ComponentsAvatars from "views/ComponentsAvatars";
// import ComponentsBadges from "views/ComponentsBadges";
// import ComponentsButtons from "views/ComponentsButtons";
// import ComponentsCards from "views/ComponentsCards";
// import ComponentsCollapse from "views/ComponentsCollapse";
// import ComponentsColors from "views/ComponentsColors";
// import ComponentsDropdowns from "views/ComponentsDropdowns";
// import ComponentsModal from "views/ComponentsModal";
// import ComponentsPopoversTooltips from "views/ComponentsPopoversTooltips";
// import ComponentsTables from "views/ComponentsTables";
// import ComponentsTabs from "views/ComponentsTabs";
// import ComponentsToasts from "views/ComponentsToasts";
// import ExtrasCarousel from "views/ExtrasCarousel";
// import ExtrasCharts from "views/ExtrasCharts";
// import ExtrasEditors from "views/ExtrasEditors";
// import ExtrasFullCalandar from "views/ExtrasFullCalendar";
// import ExtrasSortable from "views/ExtrasSortable";

// import AuthLogin from "views/AuthLogin";
// import AuthLogin from "pages/authPages/AuthLogin";
// import AuthForgotPassword from "views/AuthForgotPassword";
// import AuthRegister from "views/AuthRegister";
// import Error403 from "views/Error403";
import Error404 from "views/Error404";
// import Error500 from "views/Error500";
// import ErrorUnderMaintenance from "views/ErrorUnderMaintenance";
// import BlogList from "views/BlogList";
// import BlogListCardRows from "views/BlogListCardRows";
// import BlogListCardColumns from "views/BlogListCardColumns";
// import BlogAdd from "views/BlogAdd";
// import PagesPricing from "views/PagesPricing";
// import PagesFAQsLayout1 from "views/PagesFAQsLayout1";
// import PagesFAQsLayout2 from "views/PagesFAQsLayout2";
// import PagesInvoice from "views/PagesInvoice";

// import ApplicationsMediaLibrary from "views/ApplicationsMediaLibrary";
// import ApplicationsPointOfSale from "views/ApplicationsPointOfSale";
// import ApplicationsToDo from "views/ApplicationsToDo";
// import ApplicationsChat from "views/ApplicationsChat";

// custom pages

// import Dashboard from "views/Dashboard";

import HomePage from "pages/HomePage";
import LayoutBlank from "layouts/Blank";
// import PrivateRoute from "authRoutes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />,
    errorElement: <Error404/>,
    children: [
      {
        path: "",
        element: <HomePage />,
        // loader: teamLoader,
      },
      {
        path: "blank",
        element: <Blank />,
        // loader: teamLoader,
      },
      
    ],
  },
]);




const Router = () => {
  return (

    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<LayoutDefault />}>

    //       <Route path='/' element={
    //         <PrivateRoute>
    //           <HomePage />
    //         </PrivateRoute>
    //       } />
    //       <Route path="blank" element={

    //         <PrivateRoute>
    //           <Blank />
    //         </PrivateRoute>
    //       } />
    //       <Route path="blog-list-card-rows" element={<BlogListCardRows />} />
    //       <Route path="blog-list" element={<BlogList />} />
    //       <Route path="blog-list-card-rows" element={<BlogListCardRows />} />
    //       <Route
    //         path="blog-list-card-columns"
    //         element={<BlogListCardColumns />}
    //       />

    //       {/* <Route path="blank" element={<Blank />} />
    //       <Route path="form-components" element={<FormComponents />} />
    //       <Route path="form-input-groups" element={<FormInputGroups />} />
    //       <Route path="form-layout" element={<FormLayout />} />
    //       <Route path="form-validations" element={<FormValidations />} />
    //       <Route path="form-wizards" element={<FormWizards />} />
    //       <Route path="components-alerts" element={<ComponentsAlerts />} />
    //       <Route path="components-avatars" element={<ComponentsAvatars />} />
    //       <Route path="components-badges" element={<ComponentsBadges />} />
    //       <Route path="components-buttons" element={<ComponentsButtons />} />
    //       <Route path="components-cards" element={<ComponentsCards />} />
    //       <Route path="components-collapse" element={<ComponentsCollapse />} />
    //       <Route path="components-colors" element={<ComponentsColors />} />
    //       <Route
    //         path="components-dropdowns"
    //         element={<ComponentsDropdowns />}
    //       />
    //       <Route path="components-modal" element={<ComponentsModal />} />
    //       <Route
    //         path="components-popovers-tooltips"
    //         element={<ComponentsPopoversTooltips />}
    //       />
    //       <Route path="components-tabs" element={<ComponentsTabs />} />
    //       <Route path="components-tables" element={<ComponentsTables />} />
    //       <Route path="components-toasts" element={<ComponentsToasts />} />
    //       <Route path="extras-carousel" element={<ExtrasCarousel />} />
    //       <Route path="extras-charts" element={<ExtrasCharts />} />
    //       <Route path="extras-editors" element={<ExtrasEditors />} />
    //       <Route path="extras-fullcalendar" element={<ExtrasFullCalandar />} />
    //       <Route path="extras-sortable" element={<ExtrasSortable />} />
    //       <Route path="blog-list" element={<BlogList />} />
    //       <Route path="blog-list-card-rows" element={<BlogListCardRows />} />
    //       <Route
    //         path="blog-list-card-columns"
    //         element={<BlogListCardColumns />}
    //       />
    //       <Route path="blog-add" element={<BlogAdd />} />
    //       <Route path="pages-pricing" element={<PagesPricing />} />
    //       <Route path="pages-faqs-layout-1" element={<PagesFAQsLayout1 />} />
    //       <Route path="pages-faqs-layout-2" element={<PagesFAQsLayout2 />} />
    //       <Route path="pages-invoice" element={<PagesInvoice />} />
    //       <Route
    //         path="applications-media-library"
    //         element={<ApplicationsMediaLibrary />}
    //       />
    //       <Route
    //         path="applications-point-of-sale"
    //         element={<ApplicationsPointOfSale />}
    //       />
    //       <Route path="applications-to-do" element={<ApplicationsToDo />} />
    //       <Route path="applications-chat" element={<ApplicationsChat />} /> */}
    //     </Route>

    //     <Route element={<LayoutBlank />}>
    //       <Route path='login' element={<AuthLogin />} />
    //       <Route path="errors-403" element={<Error403 />} />
    //       <Route path="errors-404" element={<Error404 />} />
    //       <Route path="errors-500" element={<Error500 />} />
    //     </Route>


    //     {/* <Route element={<LayoutBlank />}>
    //       <Route path="auth-login" element={<AuthLogin />} />
    //       <Route path="auth-forgot-password" element={<AuthForgotPassword />} />
    //       <Route path="auth-register" element={<AuthRegister />} />
    //       <Route path="errors-403" element={<Error403 />} />
    //       <Route path="errors-404" element={<Error404 />} />
    //       <Route path="errors-500" element={<Error500 />} />
    //       <Route
    //         path="errors-under-maintenance"
    //         element={<ErrorUnderMaintenance />}
    //       />
    //     </Route> */}

    //     <Route element={<LayoutBlank />}>
    //       <Route path="*" element={<Error404 />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default Router;
