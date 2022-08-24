import React from "react";
import styled from "styled-components";

import { device } from "../../../common/constants/device";

const StyledNotesImage = styled.div`
  position: absolute;
  width: 672px;
  height: 544px;
  top: 96px;
  left: 648px;

  @media ${device.laptop} {
    margin-top: 96px;
    position: relative;
    top: 0;
    left: 0;
    height: 400px;
    flex: 0 1 50%;
  }

  @media ${device.tablet} {
    flex: 1 1 100%;
    position: relative;
    top: 0;
    left: 0;
    margin: 0px 0px 80px 40px;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 272px;
    margin-left: 0;
    left: 14px;
  }

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(224.72deg, #3023ae -1%, #c86dd7 100.5%);
    border-radius: 3px;
    width: 100%;
    height: 100%;
    top: 32px;
    left: -33px;

    @media ${device.mobile} {
      top: 19px;
      left: -17px;
    }
  }
`;

const Image = styled.img`
  &:nth-child(1) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    border-radius: 3px;
  }

  &:nth-child(2) {
    position: absolute;
    width: 32.2%;
    height: 28.3%;
    object-fit: cover;
    top: 41%;
    left: -15.8%;
    z-index: 1;

    @media ${device.tablet} {
      position: absolute;
      width: 24.2%;
      height: 28.3%;
      object-fit: cover;
      top: 41%;
      left: 40%;
      z-index: 1;
    }
  }

  &:nth-child(3) {
    position: absolute;
    width: 3.8%;
    height: 4.8%;
    object-fit: cover;
    top: 50%;
    left: -3%;
    z-index: 1;

    @media ${device.tablet} {
      position: absolute;
      width: 2.8%;
      height: 4.8%;
      object-fit: cover;
      top: 50%;
      left: 49.5%;
      z-index: 1;
    }

    @media ${device.mobile} {
      width: 3.4%;
      height: 3.8%;
      top: 51%;
    }
  }
`;

const NotesImage = () => {
  return (
    <StyledNotesImage>
      <Image src="/img/notes/Bitmap.png" alt="Painting with paints" />
      <Image src="/img/notes/Oval.svg" alt="White Oval" />
      <Image src="/img/notes/Triangle.svg" alt="Purple Triangle" />
    </StyledNotesImage>
  );
};

export default NotesImage;
