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
        <FooterLinksContainer>
          <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='#'>How it works</FooterLink>
              <FooterLink to='#'>Testimonials</FooterLink>
              <FooterLink to='#'>Investors</FooterLink>
              <FooterLink to='#'>FAQ</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='#'>Customer Service</FooterLink>
              <FooterLink to='#'>Email</FooterLink>
              <FooterLink to='#'>Phone Number</FooterLink>
              <FooterLink to='#'>Careers</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
          <FooterLinksItems>
              <FooterLinkTitle>More Info</FooterLinkTitle>
              <FooterLink to='#'>Subscribe</FooterLink>
              <FooterLink to='#'>Newsletter</FooterLink>
              <FooterLink to='#'>Settings</FooterLink>
              <FooterLink to='#'>Reviews</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Resources</FooterLinkTitle>
              <FooterLink to='#'>Newsletter</FooterLink>
              <FooterLink to='#'>Links</FooterLink>
              <FooterLink to='#'>Site Map</FooterLink>
              <FooterLink to='#'>Terms of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterContainer>
    </div>

  );
};

export default Footer;