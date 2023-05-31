import { Route, Routes } from "react-router-dom";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import { publicRoute } from "./routes";
import DefaultLayout from "./components/layout/defaultLayout";

function App() {
    return (
        <>
            {createPortal(<title>{useSelector((states) => states.root.title)}</title>, document.head)}
            <Routes>
                {publicRoute.map((elem, index) => {
                    const Layout = elem.layout ? elem.layout : DefaultLayout;
                    const Page = elem.component;
                    return (
                        <Route
                            key={index}
                            path={elem.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </>
    );
}

export default App;
