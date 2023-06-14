// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import GlobalStyle from "./components/GlobalStyle";
import store from "./components/GlobalStore";
import { Provider } from "react-redux";
import "./index.css";
import "./assets/fonts/fontawesome/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </Provider>
    </BrowserRouter>
    // </React.StrictMode>
);
