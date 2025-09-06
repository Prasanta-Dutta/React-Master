import React from "react";
import ReactDOM from "react-dom/client";
import { AppLayout } from "./components/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Error} from "./pages/Error";
import {About} from "./pages/About";
import { ContactUs } from "./pages/ContactUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <ContactUs />,
    }
]);


root.render(<RouterProvider router={appRouter} />);