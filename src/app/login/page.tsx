"use client";

import { ChangeEvent, useState } from "react";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import AppLogo from "@/components/logo/AppLogo";
type User = {
  email: string;
  password: string;
};
const Login = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {};
  const paperStyle = {
    maxWidth: 400,
    padding: 20,
    margin: "20px 1rem",
  };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid
      display={"flex"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper elevation={10} style={paperStyle}>
        <Grid
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <TwoWheelerIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 1,
              rotate: 3,
            }}
          />
          <Typography
            className="typography-----"
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AppLogo />
          </Typography>
          <h2 style={{ textAlign: "center", marginTop: "1rem" }}>Login</h2>
        </Grid>
        <TextField
          label="email"
          variant="outlined"
          fullWidth
          required
          value={user.email}
          onChange={handleChange}
          sx={{ margin: "1rem 0 0.5rem 0" }}
        />

        <FormControl
          sx={{ width: "100%", margin: "0.5rem 0 1rem 0" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput

            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            required
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Login
        </Button>
        <Typography>
          <Link href="/reset-password">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ? <Link href="/register">Register</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
