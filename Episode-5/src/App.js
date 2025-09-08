import ReactDOM from "react-dom/client";
import { AppLayout, Body } from "./components/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, ContactUs, Error, Menu } from "./pages/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <ContactUs />,
            },
            {
                path: "restaurant/menu/:resId",
                element: <Menu />
            }
        ],
        errorElement: <Error />,
    },
]);


root.render(<RouterProvider router={appRouter} />);