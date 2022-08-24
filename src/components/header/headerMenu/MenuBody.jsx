import React from "react";
import styled from "styled-components";
import { device } from "../../../common/constants/device";

const StyledMenuBody = styled.ul`
  display: flex;
  flex: 0 0 414px;
  margin: 0 0 7px 50px;
  justify-content: space-between;
  line-height: 1;

  @media ${device.tablet} {
    position: fixed;
    flex-direction: column;
    text-align: center;
    min-width: auto;
    margin: 0 auto;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: var(--purple);
    padding: 100px 30px 30px 30px;
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

const Link = styled.li`
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }

  @media ${device.tablet} {
    &:not(:last-child) {
      padding-bottom: 30px;
    }
  }
`;

function MenuBody(props) {
  return (
    <StyledMenuBody {...props}>
      {props.items.map((item) => (
        <Link>
          <a href={item.href}>{item.value}</a>
        </Link>
      ))}
    </StyledMenuBody>
  );
}

export default MenuBody;
