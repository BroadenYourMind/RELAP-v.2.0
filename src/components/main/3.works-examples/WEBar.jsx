import React from "react";
import styled, { css } from "styled-components";

import { device } from "../../../common/constants/device";

const StyledWEBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 41px;

  @media ${device.laptop} {
    padding-top: 46px;
  }

  @media ${device.tablet} {
    justify-content: center;
    padding-bottom: 18px;
  }

  @media ${device.mobile} {
    justify-content: start;
  }
`;
const StyledBarButton = styled.button`
  padding-right: 31px;

  @media ${device.tablet} {
    padding-bottom: 24px;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ${({ isToggle }) => css`
    font-weight: ${isToggle ? "600" : "400"};
    opacity: ${isToggle ? "1" : "0.5"};
  `};
`;

const WEBar = ({ items, isActive, setIsActive }) => {
  return (
    <StyledWEBar>
      {items.map((item) => (
        <StyledBarButton
          isToggle={isActive === item}
          onClick={() => setIsActive(item)}
        >
          {item}
        </StyledBarButton>
      ))}
    </StyledWEBar>
  );
};

export default WEBar;
