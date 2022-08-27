import React from "react";
import styled from "styled-components";

import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import Container from "../reusable/Container";
import Button from "../reusable/Button";

import { device } from "../../common/constants/device";

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  color: var(--white);
`;

const Content = styled(Container)`
  display: flex;
  padding-top: 30px;
  align-items: flex-end;
  min-height: 0;

  @media ${device.tablet} {
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.0984488);
    padding: 8px 15px;
    align-items: center;
  }
`;

const HeaderBottom = styled(Button)`
  border: 1px solid rgba(255, 255, 255, 0.295063);

  @media ${device.tablet} {
    display: none;
  }
`;

function Header(props) {
  return (
    <StyledHeader {...props}>
      <Content>
        <HeaderLogo>RELAP</HeaderLogo>
        <HeaderMenu />
        <HeaderBottom link="true">
          Contact Us
        </HeaderBottom>
      </Content>
    </StyledHeader>
  );
}

export default Header;
