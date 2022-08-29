import React from "react";
import { device } from "src/common/constants/device";
import styled from "styled-components";

const ImageBlock = styled.div`
  position: relative;

  @media ${device.laptop} {
    flex: 0 0 auto;
  }

  @media ${device.tablet} {
    margin-right: 88px;
  }

  @media ${device.mobile} {
    margin-right: 0px;
  }
`;

const Image1 = styled.img`
  position: relative;
  top: -16px;
  left: 68px;

  @media ${device.mobile} {
    width: 297px;
    height: 302px;
    left: 0px;
  }
`;

const Image2 = styled.img`
  content: url(../img/team/1.png);
  position: absolute;
  left: 384px;
  top: 190px;

  @media ${device.mobile} {
    width: 40px;
    height: 41px;
    left: 231px;
    top: 144px;
  }
`;

const Image3 = styled.img`
  position: absolute;
  top: 266px;
  left: 270px;

  @media ${device.mobile} {
    width: 66px;
    height: 67px;
    top: 190px;
    left: 159px;
  }
`;

const Image4 = styled.img`
  position: absolute;
  top: 183px;
  left: 52px;

  @media ${device.mobile} {
    width: 92px;
    height: 93px;
    top: 125px;
    left: 4px;
  }
`;

const Image5 = styled.img`
  position: absolute;
  top: 8px;
  left: 338px;

  @media ${device.mobile} {
    width: 92px;
    height: 93px;
    top: 33px;
    left: 197px;
  }
`;

const Image6 = styled.img`
  position: absolute;
  top: -32px;
  left: 37px;

  @media ${device.mobile} {
    width: 136px;
    height: 139px;
    top: -14px;
    left: 3px;
  }
`;

const TeamImage = () => {
  return (
    <ImageBlock>
      <Image1 src="/img/team/1pic.png" alt="Backgroung big circul" />
      <Image2 src="/img/team/1.png" alt="Face" />
      <Image3 src="/img/team/2.png" alt="Face" />
      <Image4 src="/img/team/3.png" alt="Face" />
      <Image5 src="/img/team/4.png" alt="Face" />
      <Image6 src="/img/team/5.png" alt="Face" />
    </ImageBlock>
  );
};

export default TeamImage;
