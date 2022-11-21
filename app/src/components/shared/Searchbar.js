//Search bar component from Search page and Navbar
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import "../../css/Searchbar.css";

function Search() {
  return (
    <div className="search">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <InputBase placeholder="Search for GSI..." />
    </div>
  );
}

export default Search;
