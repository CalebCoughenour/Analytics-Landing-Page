import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import './Boxes.css';
import BootForm from '../BootForm/BootForm';

const SignUp = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return(
    <div>
      <div className="signup-section">
        <div className='grids'>
          <div data-aos='fade-up'>
            <h1 className="signup-header">Sign-Up</h1>
          </div>
          <div data-aos="fade-up" className='boxes'>
            <BootForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;