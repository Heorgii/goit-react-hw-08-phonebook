import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";

const SharedLayout = () => {
    <>
        <AppBar />
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
    </>
}

export default SharedLayout;