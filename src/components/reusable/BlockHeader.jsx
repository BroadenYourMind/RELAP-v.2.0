import React from "react";
import styled, { css } from "styled-components";

import { device } from "../../common/constants/device";

const StyledBlockHeader = styled.div`
  ${(props) =>
    props.colorWhite &&
    css`
      color: var(--white);
    `}

  ${(props) =>
    props.notesHeader &&
    css`
      padding-bottom: 54px;

      @media ${device.mobile} {
        padding-bottom: 40px;
      }
    `}

    ${(props) =>
    props.worksExampleHeader &&
    css`
      padding-top: 62px;
      flex: 0 1 431px;

      @media ${device.laptop} {
        max-width: 350px;
      }

      @media ${device.tablet} {
        padding-top: 29px;
      }
    `}
`;

const Text = styled.p`
  font-family: "Poppins";
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

const BlockHeader = (props) => {
  return (
    <StyledBlockHeader {...props}>
      <Text>{props.subtitle}</Text>
      <h2>{props.title}</h2>
    </StyledBlockHeader>
  );
};

export default BlockHeader;
