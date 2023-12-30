import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { ROUTES } from "./utils/constants";
import Signup from "./pages/Signup";
import "./styles.css";
import { useState } from "react";

function App() {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <div className="page-container">
            <BrowserRouter>
                <Routes>
                    <Route
                        path={ROUTES.HOMEPAGE}
                        element={
                            <Homepage
                                isLogged={isLogged}
                                setIsLogged={setIsLogged}
                            />
                        }
                    />
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
