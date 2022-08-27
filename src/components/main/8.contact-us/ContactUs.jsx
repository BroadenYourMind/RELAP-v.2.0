import React from "react";
import { device } from "src/common/constants/device";
import Button from "src/components/reusable/Button";
import Container from "src/components/reusable/Container";
import SectionHeader from "src/components/reusable/SectionHeader";
import styled from "styled-components";
import Footer from "./Footer";

const Section = styled.section`
  background: url(/img/contacts/background.svg);
`;

const Wrapper = styled.div`
  padding-top: 135px;
  margin: 0 auto 160px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  max-width: 570px;

  @media ${device.tablet} {
    padding-top: 70px;
    margin-bottom: 64px;
  }
`;

const Header = styled(SectionHeader)`
  margin-bottom: 34px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Input = styled.input`
  padding-left: 13px;
  min-width: 370px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;

  @media ${device.tablet} {
    margin-bottom: 16px;
  }

  @media ${device.mobile} {
    align-self: stretch;
    min-width: 100%;
  }

  &::placeholder {
    font-weight: 400;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const Line = styled.hr`
  margin-left: -50%;
  width: 200%;
  border: 1px solid #000;
  opacity: 0.1;
`;

const ContactUs = () => {
  const title = "Contact Us";
  const text =
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas.";

  return (
    <Section>
      <Container>
        <Wrapper>
          <Header title={title} text={text} />
          <Form>
            <Input placeholder="Your email" />
            <Button btn="true" bg={"var(--purpleBtn)"}>
              Send
            </Button>
          </Form>
        </Wrapper>
        <Line />
        <Footer />
      </Container>
    </Section>
  );
};

export default ContactUs;
