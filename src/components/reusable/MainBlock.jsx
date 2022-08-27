import React from "react";
import { device } from "src/common/constants/device";
import styled from "styled-components";
import BlockHeader from "./BlockHeader";
import Button from "./Button";

const StyledMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 470px;
  color: ${props => props.color || "var(--white)"};

  @media ${device.laptop} {
    max-width: 346px;
  }

  @media ${device.tablet} {
    flex-wrap: wrap;
    max-width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 0;
  }

  @media ${device.mobile} {
    text-align: start;
    align-items: flex-start;
  }
`;

const HeaderMainBlock = styled(BlockHeader)`
  margin-bottom: 23px;
`;

const Text = styled.p`
  margin-bottom: 41px;

  @media ${device.tablet} {
    margin-bottom: 31px;
  }
`;

const MainBlockButton = styled(Button)`
  @media ${device.mobile} {
    position: relative;
    z-index: 2;
  }
`;

const MainBlock = (props) => {
  return (
    <StyledMainBlock {...props}>
      <HeaderMainBlock title={props.title} subtitle={props.subtitle} />
      <Text>{props.text}</Text>
      <MainBlockButton link="true" bg={props.bg}>
        {props.buttonText}
      </MainBlockButton>
    </StyledMainBlock>
  );
};

export default MainBlock;
