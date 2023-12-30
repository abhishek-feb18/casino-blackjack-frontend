import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { APP_NAME, ROUTES } from "src/utils/constants";
import { useNavigate } from "react-router-dom";
import LeftNavigationPanel from "src/components/LeftNavigationPanel";

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href={ROUTES.HOMEPAGE}>
                {APP_NAME}
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

interface ILoginProps {
    isLogged: Boolean;
    setIsLogged: Function;
}

export default function Login({ isLogged, setIsLogged }: ILoginProps) {
    const navigate = useNavigate();
    const onSignupRedirectClick = () => {
        navigate(ROUTES.SIGNUP);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
        setIsLogged(true);
        navigate(ROUTES.HOMEPAGE);
    };

    return (
        <>
            <LeftNavigationPanel
                isLogged={isLogged}
                setIsLogged={setIsLogged}
            />
            <Grid
                container
                component="main"
                sx={{ height: "70vh", marginTop: "120px" }}
            >
                <Grid item xs={false} sm={2} md={4} />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={4}
                    component={Paper}
                    elevation={6}
                    sx={{ borderRadius: "6px" }}
                >
                    <Box
                        sx={{
                            my: 4,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        onClick={onSignupRedirectClick}
                                        variant="body2"
                                    >
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={false} sm={2} md={4} />
            </Grid>
        </>
    );
}
