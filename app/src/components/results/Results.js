// Page for fullscreen results
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import ResultCard from "./ResultCard";

function Results() {
  //Filter is a search filter (based on url)
  let filter = useParams();
  //Will be replaced by an axios call later
  let gsiResults = [
    {
      id: 1,
      name: "Johnny Bolton",
      rating: 2.5,
      classes: ["Math 1B"],
    },
    {
      id: 2,
      name: "another random teacher",
      rating: 0,
      classes: ["random class"],
    },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <h1>Results</h1>
      <div>
        {gsiResults.map((gsi) => (
          <ResultCard
            id={gsi.id}
            name={gsi.name}
            rating={gsi.rating}
            classes={gsi.classes}
          ></ResultCard>
        ))}
      </div>
    </div>
  );
}

export default Results;
