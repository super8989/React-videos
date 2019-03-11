import React from "react";

const VideoDetail = ({ video }) => {
  if(!video) {
    return <div>Loading...</div>;
  }

  //props.video --> video
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
