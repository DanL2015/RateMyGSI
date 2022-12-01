// Page for GSI Profiles
import { Rating, SvgIcon } from "@mui/material";
import { useParams } from "react-router-dom";
import { Email, LinkedIn } from "@mui/icons-material";
import Navbar from "../shared/Navbar";
import "../../css/Profile.css";
import Comment from "./Comment";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
  let { profileid } = useParams();
  const [data, setData] = useState();

  const getData = () => {
    axios
      .get(`http://localhost:4000/gsi/${profileid}`)
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="profile-container">
        {/* Left Column */}
        <div>
          <h1>{data.name}</h1>
          <div>
            <Rating value={data.rating} precision={0.5} readOnly></Rating>
            <h1>
              {data.rating}/5 based on {data.ratingCount}
              ratings.
            </h1>
          </div>
          <div className="inline-container">
            Classes Taught:
            {data.classesTaught.map((i) => (
              <p>{i}</p>
            ))}
          </div>
          <div>
            <div className="inline-container">
              <SvgIcon component={LinkedIn}></SvgIcon>
              <p>{data.linkedin}</p>
            </div>
            <div className="inline-container">
              <SvgIcon component={Email}></SvgIcon>
              <p>{data.email}</p>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div>
          <div className="inline-container">
            <h1>Pronouns: </h1>
            <p>{data.pronouns}</p>
          </div>
          <div className="inline-container">
            <h1>Major: </h1>
            <p>{data.major}</p>
          </div>
          <div className="inline-container">
            <h1>Semesters Taught: </h1>
            <div>
              {data.semesters.map((i) => (
                <p>{i}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Ratings */}
      <div className="ratings-container">
        {data.comments.map((i, index) => (
          <Comment
            id={index}
            name={i.name}
            rating={i.rating}
            review={i.review}
          ></Comment>
        ))}
      </div>
    </div>
  );
}

export default Profile;
