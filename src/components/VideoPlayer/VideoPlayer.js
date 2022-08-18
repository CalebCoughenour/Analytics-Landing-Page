import React from 'react';


const src =
  "https://assets.mixkit.co/videos/preview/mixkit-marketing-infographic-data-charts-animation-5404-large.mp4";

const VideoPlayer = () => {
  return (
    <>
      <video loop muted autoPlay  style={{  objectFit: "cover", width: "100%"}}>
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

    </>
  )
};

export default VideoPlayer;