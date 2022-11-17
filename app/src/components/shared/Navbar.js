//Navbar component
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Button variant="contained">About</Button>
          <Searchbar></Searchbar>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button variant="text">Log In</Button>
          <Button variant="contained">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
