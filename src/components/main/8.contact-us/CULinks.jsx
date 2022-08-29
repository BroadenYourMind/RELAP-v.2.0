import React from "react";
import { device } from "src/common/constants/device";
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 650px;

  @media ${device.laptop} {
    justify-content: space-around;
    margin-bottom: 58px;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

const Title = styled.p`
  margin-bottom: 8px;
`;

const Link = styled.a`
  font-weight: 400;
  mix-blend-mode: normal;
  opacity: 0.5;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const CULinks = (props) => {
  return (
    <Block>
      <Column>
        <Title>Consectetur</Title>
        <Link>Adipiscing</Link>
        <Link>Elit</Link>
        <Link>Eiusmod</Link>
      </Column>
      <Column>
        <Title>Tempor</Title>
        <Link>Incididunt</Link>
        <Link>Labore</Link>
        <Link>Dolore</Link>
      </Column>
      <Column>
        <Title>Magna</Title>
        <Link>Aliqua</Link>
        <Link>Minim</Link>
        <Link>Veniam</Link>
      </Column>
    </Block>
  );
};

export default CULinks;
