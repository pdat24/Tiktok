import Header from "../components/Header";
import SideBar from "./SideBar";
import scss from "./default.module.scss";

function DefaultLayout({ children }) {
    return (
        <div id="main">
            <Header />
            <div id={scss["container"]}>
                <SideBar />
                <div id="bodyContentContainer" className="ml-60">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
