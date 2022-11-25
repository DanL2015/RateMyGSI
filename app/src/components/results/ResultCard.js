// Component to store individual result cards with professor name, rating, etc...

import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";

// Requires: gsi's id, name, rating, and classes taught
function ResultCard({ id, name, rating, classes }) {
  return (
    <div>
      <Button variant="text" component={Link} to={`/profile/${id}`}>
        <div>
          <h1>{name}</h1>
          <Rating value={rating} precision={0.5} readOnly></Rating>
        </div>
        <div>
          <p>{classes}</p>
        </div>
      </Button>
    </div>
  );
}

export default ResultCard;
