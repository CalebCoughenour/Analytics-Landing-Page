import React, { useEffect } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const VideoSection = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div data-aos='fade-up'>
        <VideoPlayer />
      </div>
    </>
  )
};

export default VideoSection;