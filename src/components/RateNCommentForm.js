import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";

const RateNCommentForm = () => {
  const [rate, setRating] = useState("1");
  const [commentText, setCommentText] = useState("");
  const [obj, setObj] = useState({ user: "", rating: "", comment: "" });
  let location = useLocation();
  var currentUser = localStorage.getItem("currentUser");
  console.log(currentUser);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleComment = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setObj((obj) => ({
      ...obj,
      user: currentUser,
      rating: rate,
      comment: commentText
    }));
    var newObj = JSON.stringify(obj);
    localStorage.setItem(`${currentUser}'s userComment`, newObj);
    var commentObj = JSON.parse(
      localStorage.getItem(`${currentUser}'s userComment`)
    );
    console.log(commentObj);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="p-2">Username: {location.state}</p>
        <div className="input-group form-group">
          <h6 className="p-2">Rate the movie:</h6>
          <ReactStars
            count={10}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
        <div className="input-group form-group">
          <textarea
            className="form-control"
            onChange={handleComment}
            placeholder="Comment about the movie"
          />
        </div>
        <div className="form-group d-flex justify-content-center">
          <input
            type="submit"
            value="Submit"
            className="btn btn-outline-danger"
          />
        </div>
      </form>
    </div>
  );
};

export default RateNCommentForm;
