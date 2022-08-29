import React from "react";
import { device } from "src/common/constants/device";
import styled from "styled-components";

const ReweiwsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 73px;

  @media ${device.laptop} {
    justify-content: space-around;
  }

  @media ${device.tablet} {
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

const Reweiw = styled.div`
  height: 272px;
  max-width: 370px;
  padding: 34px 32px 42px;
  display: flex;
  flex-direction: column;
  background: var(--white);
  box-shadow: 16px 16px 48px rgba(0, 0, 0, 0.0994678);
  border-radius: 3px;

  @media ${device.laptop} {
    max-width: 346px;

    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  @media ${device.tablet} {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media ${device.mobile} {
    &:not(:last-child) {
      margin-bottom: 16px;
    }

    width: 100%;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 15px;
`;

const Text = styled.p`
  margin-bottom: 23px;
  width: 100%;
  font-weight: 400;
  mix-blend-mode: normal;
  opacity: 0.5;

  @include laptop {
    max-width: 286px;
  }
`;

const RewiewerName = styled.p`
  font-weight: 600;
`;

const PartnersReweiws = ({ reweiws }) => {
  return (
    <ReweiwsBlock>
      {reweiws.map((reweiw) => (
        <Reweiw key={reweiw.id}>
          <Wrapper>
            <img src={reweiw.src} alt="Face" />
          </Wrapper>
          <Text>{reweiw.text}</Text>
          <RewiewerName>{reweiw.rewiewerName}</RewiewerName>
        </Reweiw>
      ))}
    </ReweiwsBlock>
  );
};

export default PartnersReweiws;
