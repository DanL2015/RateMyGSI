// Login page
import { FormControl, TextField, Button } from "@mui/material";
import Navbar from "../shared/Navbar";

function Login() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1>Login</h1>
        <FormControl>
          <TextField required label="Berkeley Email"></TextField>
          <TextField required label="Berkeley Password"></TextField>
          <Button variant="contained">Submit</Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Login;
