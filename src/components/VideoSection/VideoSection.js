import React from 'react';
import { VideoSectionTitle } from './VideoSection.elements';

const src =
  "https://assets.mixkit.co/videos/preview/mixkit-marketing-infographic-data-charts-animation-5404-large.mp4";

const VideoSection = () => {
  return (
    <>     
      <video loop muted autoPlay width="100%" style={{  objectFit: "cover" }}>
        <VideoSectionTitle>Hello</VideoSectionTitle>
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </>
  )
};

export default VideoSection;