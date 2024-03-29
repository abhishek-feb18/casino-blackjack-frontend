import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { ROUTES, APP_NAME } from "src/utils/constants";

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

interface ISignupProps {
  setIsLogged: Function;
}

export default function Signup({ setIsLogged }: ISignupProps) {
  const navigate = useNavigate();
  const [signupFormValues, setSignupFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const onSignInRedirectClick = () => {
    navigate(ROUTES.LOGIN);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    setIsLogged(true);
    navigate(ROUTES.HOMEPAGE);
  };

  const onSignupFormValueChange = (event: any) => {
    console.log(event.target.id);
    console.log(event.target.value);
    setSignupFormValues((previousValues) => {
      return {
        ...previousValues,
        [event.target.id]: event.target.value,
      };
    });
  };

  return (
    <>
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
              {`Create a ${APP_NAME} account`}
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={onSignupFormValueChange}
                    value={signupFormValues.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={onSignupFormValueChange}
                    value={signupFormValues.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={onSignupFormValueChange}
                    value={signupFormValues.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={onSignupFormValueChange}
                    value={signupFormValues.password}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link onClick={onSignInRedirectClick} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Grid>
        <Grid item xs={false} sm={2} md={4} />
      </Grid>
    </>
  );
}
