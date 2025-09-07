import { Header } from "./Header.js";
import { Body } from "./Body.js";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};