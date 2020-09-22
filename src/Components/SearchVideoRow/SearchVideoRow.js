import React from "react";
import "./SearchVideoRow.css";

const SearchVideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  image,
  title,
}) => {
  return (
    <div className="searchVideoRow">
      <img src={image} alt="" />
      <div className="SearchVideoRow__text">
        <h3>{title}</h3>
        <p className="searchVideoRow__headline">
          {" "}
          {channel} •{" "}
          <span className="searchVideoRow__subs">
            <span className="searchVideoRow__subsNumber">{subs} </span>{" "}
            Subscribers
          </span>
          {views} • {timestamp}{" "}
        </p>
        <p className="searchVideoRow__desc">{description}</p>
      </div>
    </div>
  );
};

export default SearchVideoRow;
