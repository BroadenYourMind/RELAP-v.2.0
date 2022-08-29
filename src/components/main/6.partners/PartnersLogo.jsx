import React from "react";
import { device } from "src/common/constants/device";
import styled from "styled-components";

const LogoBar = styled.div`
  margin-bottom: 73px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${device.laptop} {
    justify-content: center;
    margin-bottom: 40px;
  }
`;

const ImageLogo = styled.img`
  width: 140px;
  height: 80px;
  -webkit-filter: grayscale(1) opacity(0.5);
  filter: grayscale(1) opacity(0.5);

  &:hover {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
  }
`;

const PartnersLogo = ({ partners }) => {
  return (
    <LogoBar>
      {partners.map((partner) => (
        <a href={partner.href} key={partner.id}>
          <ImageLogo src={partner.src} alt="partnerLogo" />
        </a>
      ))}
    </LogoBar>
  );
};

export default PartnersLogo;
