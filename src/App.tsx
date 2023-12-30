import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { ROUTES } from "./utils/constants";
import Box from "@mui/material/Box";
import Signup from "./pages/Signup";
import "./styles.css";
import { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

function App() {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <div className="page-container">
            <Box sx={{ display: "flex" }}>
                <AppBar
                    position="fixed"
                    sx={{
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        backgroundColor: "#154F07",
                    }}
                >
                    <Toolbar sx={{ justifyContent: "center" }}>
                        <Typography
                            variant="h1"
                            noWrap
                            component="div"
                            fontSize={48}
                            paddingTop={"5px"}
                            sx={{
                                fontFamily: '"Carattere", cursive',
                                fontWeight: "900",
                                color: "antiquewhite",
                            }}
                        >
                            <span style={{ fontSize: 32 }}>❤️ ♠️</span>
                            <span
                                style={{
                                    fontFamily: '"Carattere", cursive',
                                    fontWeight: "900",
                                    color: "antiquewhite",
                                    padding: "0px 30px",
                                }}
                            >
                                Blackjack
                            </span>
                            <span style={{ fontSize: 32 }}>♣️ ♦️</span>
                        </Typography>
                    </Toolbar>
                </AppBar>
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
                        <Route
                            path={ROUTES.LOGIN}
                            element={
                                <Login
                                    isLogged={isLogged}
                                    setIsLogged={setIsLogged}
                                />
                            }
                        />
                        <Route
                            path={ROUTES.SIGNUP}
                            element={
                                <Signup
                                    isLogged={isLogged}
                                    setIsLogged={setIsLogged}
                                />
                            }
                        />
                        <Route
                            path="*"
                            element={<Navigate to={ROUTES.HOMEPAGE} replace />}
                        />
                    </Routes>
                </BrowserRouter>
            </Box>
        </div>
    );
}

export default App;
