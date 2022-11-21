// Page to submit new GSI information
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import "../../css/Submission.css";
import Navbar from "../shared/Navbar";

function Submission() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="submission-container">
        <h1>Submit a GSI</h1>
        <p>
          Important: If the GSI is already listed on the website, you will not
          be able to submit.
        </p>
        <p>
          Please use the search bar above to make sure the GSI is not already
          listed on this website.
        </p>
        <FormControl className="form-container">
          <TextField required label="GSI First Name" margin="normal" />
          <TextField required label="GSI Last Name" margin="normal" />
          <FormControl required margin="normal">
            <InputLabel>Class</InputLabel>
            <Select autoWidth label="Class *"></Select>
          </FormControl>
          <TextField label="LinkedIn" margin="normal" />
          <TextField label="Email" margin="normal" />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="I have checked that the data is accurate."
            margin="normal"
          ></FormControlLabel>
          <Button variant="contained" margin="normal">
            Submit
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Submission;
