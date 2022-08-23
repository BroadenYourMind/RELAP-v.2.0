import React from "react";
import styled from 'styled-components';
import { device } from "../../../common/constants/device";



const StyledMenuBody = styled.ul`
display: flex;
flex: 0 0 414px;
margin: 0 0 7px 50px;
justify-content: space-between;
line-height: 1;

@media ${device.tablet} {
    position: fixed;
    display: flex;
    flex-direction: column;
    text-align: center;
    min-width:auto;
    margin: 0 auto;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: var(--purple);
    padding: 100px 30px 30px 30px;
    transition: right 0.3s ease 0s;
    overflow: auto;

    right: ${({ open }) => open ? '0' : '-100%'};
    

    &::before {
        content: "";
        position: ${({ open }) => open ? 'fixed' : 'absolute'};
        width: 100%;
        top: 0;
        left: 0;
        height: 64px;
        background: #FFFFFF;
        z-index: 2;
    }
}
`

const Link = styled.a`
font-weight: 600;

&:hover {
    text-decoration: underline;
}

@media ${device.tablet} {
    margin-bottom: 30px;
}
`

function MenuBody(props) {

    return (
        <StyledMenuBody {...props}>
            {props.items.map(item =>
                <li>
                    <Link href={item.href}>{item.value}</Link>
                </li>)}
        </StyledMenuBody>
    );
}

export default MenuBody;