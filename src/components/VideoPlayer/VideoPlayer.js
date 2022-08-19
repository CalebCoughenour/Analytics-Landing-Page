import React from 'react';
import { VideoContainer, VideoTopText, VideoBottomText, VideoOverlay } from './VideoPlayer.elements';


const iconSrc = "https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-29-2682822_90802.png";
const src =
  "https://assets.mixkit.co/videos/preview/mixkit-marketing-infographic-data-charts-animation-5404-large.mp4";

const VideoPlayer = () => {
  return (
    <>
    <VideoContainer>
      <VideoOverlay />
        <video src={src} autoPlay loop muted className='w-100'/>
        <VideoTopText><img
              alt="Half rainbow"
              src={iconSrc}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            Analytics Data Center</VideoTopText>
        <VideoBottomText>hello hello</VideoBottomText>
    </VideoContainer>
    </>
  )
};

export default VideoPlayer;