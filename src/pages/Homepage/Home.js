import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { VideoSection, PhotoCarousel, SignUp, BootForm } from '../../components';
import '../../App.css';

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <VideoSection/>
      <PhotoCarousel />
      <SignUp />
    </>
  )
}

export default Home;