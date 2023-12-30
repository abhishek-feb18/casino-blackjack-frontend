import "../styles.css";
import LeftNavigationPanel from "src/components/LeftNavigationPanel";
import Box from "@mui/material/Box";
import { AppBar, Toolbar, Typography } from "@mui/material";

interface IHomepageProps {
    isLogged: Boolean;
    setIsLogged: Function;
}

function Homepage({ isLogged, setIsLogged }: IHomepageProps) {
    return (
        <>
            <LeftNavigationPanel
                isLogged={isLogged}
                setIsLogged={setIsLogged}
            />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 0 }}
            >
                <Toolbar sx={{ backgroundColor: "black" }} />
            </Box>
        </>
    );
}

export default Homepage;
