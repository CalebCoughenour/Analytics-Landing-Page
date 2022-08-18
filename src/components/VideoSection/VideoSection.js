import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { VideoSectionWrapper } from './VideoSection.elements';

const VideoSection = () => {
  return (
    <> 
      <VideoSectionWrapper>  
        <VideoPlayer />
      </VideoSectionWrapper>
    </>
  )
};

export default VideoSection;