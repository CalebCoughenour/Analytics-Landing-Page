import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FooterContainer, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink } from './Footer.elements';


const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos='fade-up'>
      <FooterContainer>
        <FooterLinkTitle>Site Links</FooterLinkTitle>
        <FooterLinksContainer>
          <FooterLinksWrapper>
          <FooterLinksItems>
              <FooterLink to='#'>How it works</FooterLink>
              <FooterLink to='#'>Testimonials</FooterLink>
              <FooterLink to='#'>Careers</FooterLink>
              <FooterLink to='#'>Investors</FooterLink>
              <FooterLink to='#'>Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLink to='#'>Customer Service</FooterLink>
              <FooterLink to='#'>Email</FooterLink>
              <FooterLink to='#'>FAQ</FooterLink>
              <FooterLink to='#'>Careers</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
          <FooterLinksItems>
              <FooterLink to='#'>Account</FooterLink>
              <FooterLink to='#'>Settings</FooterLink>
              <FooterLink to='#'>Contact</FooterLink>
              <FooterLink to='#'>Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLink to='#'>Account</FooterLink>
              <FooterLink to='#'>Settings</FooterLink>
              <FooterLink to='#'>Contact</FooterLink>
              <FooterLink to='#'>Terms of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterContainer>
    </div>

  );
};

export default Footer;