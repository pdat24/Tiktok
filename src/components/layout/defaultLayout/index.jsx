import Header from "../components/Header";
import SideBar from "./SideBar";
import scss from "./default.module.scss";

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
    return (
        <div id="main">
            <Header />
            <div id={scss["container"]}>
                <SideBar />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
