import React, {useMemo} from "react";
import styled, { css } from "styled-components";

import { device } from "../../../common/constants/device";

const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 44px;

  @media ${device.tablet} {
    justify-content: center;
    padding-bottom: 18px;
  }

  @media ${device.mobile} {
    justify-content: start;
  }
`;
const Button = styled.button`
  &:not(:last-child) {
    margin-right: 31px;
  }

  @media ${device.tablet} {
    padding-bottom: 24px;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ${({ isActive }) => css`
    font-weight: ${isActive ? "600" : "400"};
    opacity: ${isActive ? "1" : "0.5"};
  `};
`;

const WEBar = ({ items, isActive, setIsActive }) => {
  const toggleButton = useMemo(() => {
    return items.map((item) => (
      <Button key={item} isActive={isActive === item} onClick={() => setIsActive(item)}>
        {item}
      </Button>
    ))
  }, [isActive]);

  return (
    <Bar>
      {toggleButton}
    </Bar>
  );
};

export default WEBar;
