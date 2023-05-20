import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { loginUser } from "../../../Service/UserAPI";
import { useNavigate } from "react-router-dom";

export default function SignInSide() {
  const navigate = useNavigate()
  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    console.log("payload", payload);
    navigate("/Home")
    const response = await loginUser(payload);
    console.log(
      "🚀 ~ file: LoginForm.js:28 ~ handleSubmit ~ response:",
      response
    );
  };

  const onChangeInput = (e, field) => {
    setPayload({ ...payload, [field]: e.target.value });
  };

  return (
    <Grid container component="main" sx={{ height: "10vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={3}
        md={5}
        sx={{
          backgroundImage:
            "https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Country-Image.jpg",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
              onChange={(e) => onChangeInput(e, "email")}
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
              onChange={(e) => onChangeInput(e, "password")}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
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

              <Link href="/StudentSignUP" variant="body2">
                {"Don't have an account? Create an Account"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
