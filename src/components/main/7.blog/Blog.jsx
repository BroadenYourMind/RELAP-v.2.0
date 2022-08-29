import React from "react";
import { device } from "src/common/constants/device";
import Container from "src/components/reusable/Container";
import MainBlock from "src/components/reusable/MainBlock";
import styled from "styled-components";
import BlogImage from "./BlogImage";

const Section = styled.section`
  background: #fdf2ff;
`;

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-top: 112px;

  @media ${device.laptop} {
    padding-top: 80px;
  }

  @media ${device.tablet} {
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 80px;
    padding-top: 0px;
  }

  @media ${device.mobile} {
    justify-content: start;
    align-items: flex-start;
  }
`;

const BlogMainBlock = styled(MainBlock)`
  padding-top: 62px;

  @media ${device.tablet} {
    padding-top: 45px;
    margin-bottom: 48px;
  }
`;

const Blog = () => {
  const title = "Omnis voluptas assumenda";
  const subtitle = "Nisi ut aliquid";
  const text =
    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.";
  const buttonText = "Our blog";

  return (
    <Section>
        <Content>
          <BlogMainBlock bg={"var(--purpleBtn)"} color={"var(--grey)"} title={title} subtitle={subtitle} text={text} buttonText={buttonText} />
          <BlogImage />
        </Content>
    </Section>
  );
};

export default Blog;
