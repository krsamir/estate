import React from "react";
import styled from "styled-components";

const FooterComponent = styled.div`
  background-color: #b993d6;
  padding: 25px 0;
  font-size: 11px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
function Footer() {
  return (
    <React.Fragment>
      <FooterComponent>All Rights Reserved. ©️</FooterComponent>
    </React.Fragment>
  );
}

export default Footer;
