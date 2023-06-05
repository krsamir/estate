import React from "react";
import video from "../assets/estatevid.mp4";
import styled from "styled-components";
const Video = styled.video`
  width: 100% !important;
`;
const VideoContainer = styled.div`
  padding: 20px;
  border-radius: 6px;
  background-color: #fff;
  border: 2px solid #ebebeb;
  margin: 20px;
  /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
  background: #b993d6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #8ca6db,
    #b993d6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
function VideoComponent() {
  return (
    <React.Fragment>
      <VideoContainer>
        <Video src={video} muted loop={true} autoPlay={true}>
          Video not compatible with this device.
        </Video>
      </VideoContainer>
    </React.Fragment>
  );
}

export default VideoComponent;
