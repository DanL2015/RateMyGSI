// Page for fullscreen results
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import ResultCard from "./ResultCard";
import "../../css/Results.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Results() {
  const [gsiResults, setGsiResults] = useState();

  //Filter is a search filter (based on url)
  let { filter } = useParams();

  const getData = () => {
    axios
      .get(`http://localhost:4000/gsis/${filter}`)
      .then((data) => {
        setGsiResults(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (!gsiResults) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <h6>Search Results</h6>
      <div>
        {gsiResults.map((gsi) => (
          <ResultCard
            id={gsi._id}
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
