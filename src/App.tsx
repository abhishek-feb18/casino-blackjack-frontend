import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { ROUTES } from "./utils/constants";
import Signup from "./pages/Signup";
import "./styles.css";

function App() {
    return (
        <div className="page-container">
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.HOMEPAGE} element={<Homepage />} />
                    <Route path={ROUTES.LOGIN} element={<Login />} />
                    <Route path={ROUTES.SIGNUP} element={<Signup />} />
                    <Route
                        path="*"
                        element={<Navigate to={ROUTES.HOMEPAGE} replace />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
