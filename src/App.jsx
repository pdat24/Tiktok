import { Outlet, Route, Routes } from "react-router-dom";
import HomePageRouter from "./routes/Home";
import HomePage from "./pages/home";
import { DefaultLayout } from "./components/layout";

function App() {
    return (
        <>
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
                <Route
                    path="/"
                    element={
                        <>
                            <Outlet />
                        </>
                    }
                >
                    <Route path=":homePageParam" element={<HomePageRouter />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
