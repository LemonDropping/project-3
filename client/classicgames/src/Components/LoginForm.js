import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // add logic to validate credentials and log user in
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
