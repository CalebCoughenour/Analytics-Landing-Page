import styled from "styled-components";
import { Link } from 'react-router-dom';


export const FooterContainer = styled.div`
margin-bottom: 150px;
background-color: #35a1ca;
padding: 4rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FooterLinksContainer = styled.div`
width: 100%;
max-width: 1000px;
display: flex;
justify-content: center;

@media screen and (max-width: 820px) {
  padding-top: 32px;
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px) {
  flex-direction: column;
}
`;

export const FooterLinksItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px) {
  margin: 0;
  padding: 10px;
  width: 100%;
}
`;

export const FooterLinkTitle = styled.h2`

color: black;
margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;

&:hover {
  color: #0467fb;
  transition: 0.3s ease-out;
}
`;