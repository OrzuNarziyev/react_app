import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";

// pages 


import HomePage from "pages/HomePage";


import Blank from "views/Blank";
import LayoutDefault from "layouts/Default";
import LayoutBlank from "layouts/Blank";


// error pages 
import Error404 from "views/Error404";

// auth pages 
import AuthLogin from "views/AuthLogin";
import { authService } from "services/authService";

function getUser() {

    const is_logged = authService.isLoggedIn()
    return is_logged


    // console.log(is_logged)
    // if (!is_logged) {
    //     authService.refresh_token()
    //         .then(res => {
    //             console.log(res)
    //             return true
    //         })
    //         .catch(err => {
    //             return false
    //         })
    //     return false
    // }
}

const loader = async () => {
    const user = await getUser();
    if (!user) {
        return redirect("/login");
    }
    return null;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutDefault />,
        loader: loader,
        errorElement: <Error404 />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "blank",
                element: <Blank />,
            },


        ],
    },

    {
        path: "/login",
        element: <LayoutBlank />,
        errorElement: <Error404 />,
        children: [
            {
                path: "",
                element: <AuthLogin />
            }
        ]
    },
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router