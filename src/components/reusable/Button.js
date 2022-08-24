import styled, { css } from "styled-components";

import { device } from "../../common/constants/device";

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 170px;
  border-radius: 24px;
  font-weight: 700;
  color: var(--white);

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    color: #dadada;
    transition: all 0.5s ease;
  }

  ${(props) =>
    props.colorYellow &&
    css`
      background: #ffc300;
    `}

  ${(props) =>
    props.colorPurple &&
    css`
      background: #c86dd7;
    `}
    

    ${(props) =>
    props.colorTransparent &&
    css`
      border: 1px solid rgba(255, 255, 255, 0.295063);

      @media ${device.tablet} {
        display: none;
      }
    `}
`;

export default StyledButton;
