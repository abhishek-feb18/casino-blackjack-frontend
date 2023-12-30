import "../styles.css";
import LeftNavigationPanel from "src/components/LeftNavigationPanel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

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
            <Grid
                container
                component="div"
                sx={{
                    height: "100vh",
                    width: "100vw",
                    marginTop: "80px",
                    display: "flex",
                }}
            >
                <Grid item xs={false} sm={2} md={3} sx={{ height: "20vh" }} />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    component={Paper}
                    elevation={0}
                    sx={{
                        borderRadius: "6px",
                        backgroundColor: "transparent",
                        height: "20vh",
                    }}
                ></Grid>
                <Grid item xs={false} sm={2} md={3} sx={{ height: "20vh" }} />
                <Grid item xs={false} sm={2} md={3} sx={{ height: "15vh" }} />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    component={Paper}
                    elevation={0}
                    sx={{
                        borderRadius: "6px",
                        backgroundColor: "transparent",
                        height: "15vh",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{
                            // fontFamily: '"Carattere", cursive',
                            fontSize: 20,
                            fontWeight: "900",
                            color: "brown",
                            textAlign: "center",
                        }}
                    >
                        BLACKJACK PAYS 3 TO 2
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{
                            // fontFamily: '"Carattere", cursive',
                            fontSize: 18,
                            fontWeight: "900",
                            color: "black",
                            textAlign: "center",
                            paddingTop: "15px",
                        }}
                    >
                        Dealer must draw to 16 & stand on all 17s
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{
                            // fontFamily: '"Carattere", cursive',
                            fontSize: 24,
                            fontWeight: "900",
                            color: "gold",
                            textAlign: "center",
                            paddingTop: "10px",
                        }}
                    >
                        Insurance pays 2 to 1
                    </Typography>
                </Grid>
                <Grid item xs={false} sm={2} md={3} sx={{ height: "10vh" }} />
                <Grid item xs={false} sm={2} md={3} sx={{ height: "20vh" }} />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    component={Paper}
                    elevation={0}
                    sx={{
                        borderRadius: "6px",
                        backgroundColor: "transparent",
                        height: "20vh",
                    }}
                ></Grid>
                <Grid item xs={false} sm={2} md={3} sx={{ height: "20vh" }} />
                <Grid item xs={false} sm={2} md={3} sx={{ height: "20vh" }} />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    component={Paper}
                    elevation={0}
                    sx={{
                        borderRadius: "6px",
                        backgroundColor: "transparent",
                        height: "20vh",
                    }}
                ></Grid>
                <Grid item xs={false} sm={2} md={3} sx={{ height: "20vh" }} />
            </Grid>

            {/* <Grid
                container
                component="main"
                sx={{
                    height: "20vh",
                    marginTop: "80px",
                }}
            >
                <Grid item xs={false} sm={2} md={3} />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={6}
                    component={Paper}
                    elevation={6}
                    sx={{ borderRadius: "6px", backgroundColor: "transparent" }}
                ></Grid>
                <Grid item xs={false} sm={2} md={3} />
            </Grid> */}
            {/* <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box>
            <Box>Test</Box> */}
        </>
    );
}

export default Homepage;
