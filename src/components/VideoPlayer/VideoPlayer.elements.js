import styled from "styled-components";


export const VideoContainer = styled.div`
  width: 100%;
  height: 80vh;
`;

export const VideoTopText = styled.h1`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const VideoBottomText = styled.p`

`;

export const VideoOverlay = styled.div`
  position: absolute;
  top: 56;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
`;