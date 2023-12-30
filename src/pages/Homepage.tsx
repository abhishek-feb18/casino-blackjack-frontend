import "../styles.css";
import LeftNavigationPanel from "src/components/LeftNavigationPanel";
import Box from "@mui/material/Box";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Homepage() {
    return (
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
                        <span style={{ fontSize: 36 }}>❤️ ♠️</span>
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
                        <span style={{ fontSize: 36 }}>♣️ ♦️</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <LeftNavigationPanel />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 0 }}
            >
                <Toolbar sx={{ backgroundColor: "black" }} />
            </Box>
        </Box>
    );
}

export default Homepage;
