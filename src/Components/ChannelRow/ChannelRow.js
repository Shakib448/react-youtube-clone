import { Avatar } from "@material-ui/core";
import React from "react";
import "./ChannelRow.css";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  nonOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlinedIcon />}{" "}
        </h4>
        <p>
          {subs} subscribers • {nonOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
