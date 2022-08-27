import React from "react";
import styled from "styled-components";

import { device } from "../../../common/constants/device";

const Navigation = styled.ul`
  display: flex;
  flex: 0 1 414px;
  justify-content: space-between;
  line-height: 1;

  @media ${device.tablet} {
    position: fixed;
    flex-direction: column;
    justify-content: start;
    text-align: center;
    min-width: auto;
    margin: 0 auto;
    gap: 30px;

    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: var(--purple);
    padding: 80px 30px 30px 30px;
    transition: right 0.3s ease 0s;
    overflow: auto;

    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

    &::before {
      content: "";
      position: ${({ isOpen }) => (isOpen ? "fixed" : "absolute")};
      width: 100%;
      top: 0;
      left: 0;
      height: 48px;
      background: #ffffff;
      z-index: 2;
    }
  }
`;

const NavigationItem = styled.li`
  &:hover {
    text-decoration: underline;
  }
`;

function MenuBody(props) {
  return (
    <Navigation {...props}>
      {props.items.map((item) => (
        <NavigationItem key={item.id}>
          <a href={item.href}>{item.value}</a>
        </NavigationItem>
      ))}
    </Navigation>
  );
}

export default MenuBody;
