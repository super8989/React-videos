import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
  });

  //props.videos - array of different records
  return <div>{renderedList}</div>;
};

export default VideoList;
