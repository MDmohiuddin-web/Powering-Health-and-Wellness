import {
    createBrowserRouter,
    
  } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";
import Error from "../error/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,

        children:[
            {
                path:"/",
                element:<Home></Home>
            }

        ]
    },
]);