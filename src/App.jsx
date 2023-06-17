import { Route, Routes } from "react-router-dom";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import HomePageRouter from "./routes/Home";
import HomePage from "./pages/home";
import { DefaultLayout, NoneLayout } from "./components/layout";

function App() {
    return (
        <>
            {createPortal(<title>{useSelector((states) => states.root.title)}</title>, document.head)}
            <Routes>
                {/** Home page */}
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <HomePage />
                        </DefaultLayout>
                    }
                />
                {/** children of home page */}
                <Route path="/" element={<NoneLayout />}>
                    <Route path=":homePageParam" element={<HomePageRouter />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
