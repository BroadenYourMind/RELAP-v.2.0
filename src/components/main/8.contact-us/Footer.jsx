import React from "react";
import styled from "styled-components";

import CULinks from "./CULinks";
import { device } from "src/common/constants/device";

const StyledFooter = styled.div`
  padding-top: 61px;
  margin-bottom: 74px;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  justify-content: space-between;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 58px;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  max-width: 239px;
  margin-right: 31px;

  @media ${device.laptop} {
    margin-right: 0;
    align-items: center;
    flex: 1 1 auto;
  }

  @media ${device.mobile} {
    align-items: flex-start;
    align-self: flex-start;
  }
`;

const SocialBlock = styled.div`
  margin-bottom: 15px;
`;

const LogoLinks = styled.a`
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const Copyright = styled.p`
  font-weight: 400;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <CULinks />
      <Social>
        <SocialBlock>
          <LogoLinks href="https://www.facebook.com/">
            <img src="/img/footer/FB.svg" alt="FaceBookLogo" />
          </LogoLinks>
          <LogoLinks href="https://twitter.com/">
            <img src="/img/footer/TW.svg" alt="TwitterLogo" />
          </LogoLinks>
          <LogoLinks href="https://www.instagram.com/">
            <img src="/img/footer/Inst.svg" alt="InstagramLogo" />
          </LogoLinks>
        </SocialBlock>
        <Copyright>Copyright 2019. All Rights Reserved.</Copyright>
      </Social>
    </StyledFooter>
  );
};

export default Footer;
