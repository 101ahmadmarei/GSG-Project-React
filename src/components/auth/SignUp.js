import React, { ChangeEvent, useState, useRef, useContext } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import classes from "./SignUp.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import CancelIcon from "@mui/icons-material/Cancel";
const SignUp = () => {
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const emailInputRef = useRef();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState("");
  //  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  // const handleMouseDownPassword = (event: MouseEvent) => {
  //   event.preventDefault();
  // };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailInputRef.current);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;
    if (enteredPassword !== enteredConfirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(enteredEmail, enteredPassword);
    setIsLoading(true);

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZZwOh3K5hpGQSNTdE286ncdIHi4b3l94";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessages = "Authentication Failed";
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        console.log(data.expiresIn * 1000);
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className={classes.overlay} onClick={() => navigate("/")}></div>
      <Card sx={{}} className={classes.card}>
        <form onSubmit={submitHandler}>
          {/* <CardContent> */}
          {/* <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircleIcon
            sx={{ color: "action.active", mr: 1, my: 0.5, top: 5 }}
          /> */}
          <TextField
            id="outlined-email"
            label="Email"
            variant="standard"
            fullWidth
            className={classes.textField}
            margin="dense"
            sx={{ height: 50 }}
            inputRef={emailInputRef}
          />
          {/* </Box> */}
          <FormControl sx={{}} fullWidth variant="standard" margin="dense">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <Input
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              // value={password}
              inputRef={passwordInputRef}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              // label="Password"
            />
          </FormControl>

          <FormControl sx={{}} fullWidth variant="standard" margin="dense">
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Confirm Password
            </InputLabel>
            <Input
              id="outlined-adornment-confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              // value={confirmPassword}
              // onChange={handleChangeConfirmPassword}
              inputRef={confirmPasswordInputRef}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirmPassword visibility"
                    onClick={handleClickShowConfirmPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div className={classes.checkbox}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
          </div>
          <Button
            variant="contained"
            size="large"
            className={classes.login}
            type="submit"
          >
            Sign Up
          </Button>
          <Button
            variant="text"
            sx={{
              fontSize: 10,
              color: "#3f51b5",
              // top: 60,
              // left: -40,
            }}
            // className={classes.login}
            onClick={() => navigate(`/home/login`)}
          >
            I already have an account ? Sign In here !
          </Button>
          {/* </CardContent> */}
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
