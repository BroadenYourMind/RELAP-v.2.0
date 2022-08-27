import React from "react";
import { device } from "src/common/constants/device";
import styled from "styled-components";

const StyledBlogImage = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  width: 570px;
  height: 544px;

  @media ${device.laptop} {
    width: 470px;
    height: 444px;
    margin-left: 40px;
  }

  @media ${device.mobile} {
    height: 329px;
    margin-left: 17px;
  }

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(224.72deg, #3023ae -1%, #c86dd7 100.5%);
    border-radius: 3px;
    width: 100%;
    height: 100%;
    top: 32px;
    left: -30px;

    @media ${device.mobile} {
      top: 19px;
      left: -17px;
    }
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  max-width: 474px;
  margin: auto 48px 46px;
  color: var(--white);
  z-index: 2;
`;

const Title = styled.p`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 24px;
  line-height: 1.333;

  margin-bottom: 10px;
`;

const Text = styled.p`
  margin-bottom: 19px;
  font-weight: 400;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const AvaBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  margin-right: 20px;
`;

const BlogImage = () => {
  return (
    <StyledBlogImage>
      <Image src="/img/blog/main-image.png" />
      <Content>
        <Title>Itaque earum rerum</Title>
        <Text>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates</Text>
        <AvaBlock>
          <Avatar src="/img/blog/face.png" alt="Face" />
          <p>Adaora Azubuike</p>
        </AvaBlock>
      </Content>
    </StyledBlogImage>
  );
};

export default BlogImage;
