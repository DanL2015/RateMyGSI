//Navbar component
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "mui-image";
import Logo from "../../assets/logo.png";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Button variant="text" component={Link} to="/about">
            <Image src={Logo} height="4em" />
          </Button>
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
