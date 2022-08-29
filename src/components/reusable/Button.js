import styled from "styled-components";

const BtnType = (props) => {
    if (props.btn) {
      return <button {...props}>{props.children}</button>;
    }
    if (props.link) {
      return <a href={props.href} {...props}>{props.children}</a>;
    }
};

const Button = styled(BtnType)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 170px;
  border-radius: 24px;
  font-weight: 700;
  color: var(--white);
  background: ${props => props.bg || "transparent"};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    color: #dadada;
    transition: all 0.5s ease;
  }
`;

export default Button;
