import { Outlet } from "react-router-dom";

function NoneLayout({ children }) {
    return (
        <>
            {children}
            <Outlet />
        </>
    );
}

export default NoneLayout;
