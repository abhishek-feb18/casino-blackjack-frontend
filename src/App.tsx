import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ROUTES } from "./utils/constants";
import "./styles.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<AppLayout isLogged={isLogged} setIsLogged={setIsLogged} />}
        >
          <Route path={ROUTES.HOMEPAGE} element={<Homepage />} />
          <Route
            path={ROUTES.LOGIN}
            element={<Login setIsLogged={setIsLogged} />}
          />
          <Route
            path={ROUTES.SIGNUP}
            element={<Signup setIsLogged={setIsLogged} />}
          />
          <Route path="*" element={<Navigate to={ROUTES.HOMEPAGE} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
