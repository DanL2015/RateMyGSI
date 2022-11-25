// Page for GSI Profiles
import { Rating, SvgIcon } from "@mui/material";
import { useParams } from "react-router-dom";
import { Email, LinkedIn } from "@mui/icons-material";
import Navbar from "../shared/Navbar";
import "../../css/Profile.css";
import Comment from "./Comment";

function Profile() {
  //profileId stores the id passed in through the link
  //No problem with empty profileId: the link will not work
  let profileId = useParams();

  //The following variables are all placeholders
  //This will be replaced with calls to the mongodb later.
  let name = "Johnny Bolton";
  let rating = 2.5; //out of 5
  let ratingCount = 20;

  let classesTaught = ["Math 1B"];
  let linkedInLink = "https://linkedin.com/jbolton";
  let emailLink = "johnnybolton@berkeley.edu";
  let pronouns = "he/him/his";
  let major = "MA, Mathematics";
  let semesters = ["Spring 2022", "Fall 2022"];
  let ratings = [
    {
      name: "Oski B.",
      rating: "5",
      review: "Highly recommended.",
    },
    {
      name: "Anonymous Bear",
      rating: "2",
      review: "Too fast.",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <div className="profile-container">
        {/* Left Column */}
        <div>
          <h1>{name}</h1>
          <div>
            <Rating value={rating} precision={0.5} readOnly></Rating>
            <h1>
              {rating}/5 based on {ratingCount} ratings.
            </h1>
          </div>
          <div className="inline-container">
            Classes Taught:
            {classesTaught.map((i) => (
              <p>{i}</p>
            ))}
          </div>
          <div>
            <div className="inline-container">
              <SvgIcon component={LinkedIn}></SvgIcon>
              <p>{linkedInLink}</p>
            </div>
            <div className="inline-container">
              <SvgIcon component={Email}></SvgIcon>
              <p>{emailLink}</p>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div>
          <div className="inline-container">
            <h1>Pronouns: </h1>
            <p>{pronouns}</p>
          </div>
          <div className="inline-container">
            <h1>Major: </h1>
            <p>{major}</p>
          </div>
          <div className="inline-container">
            <h1>Semesters Taught: </h1>
            <div>
              {semesters.map((i) => (
                <p>{i}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Ratings */}
      <div className="ratings-container">
        {ratings.map((i, index) => (
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
