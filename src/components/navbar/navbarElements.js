import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export const NavLink = styled(Link)`
    font-size: 24px;
    font-weight: 500;
    margin-top: 23px;
    margin-bottom: 23px;
    color: #545454;

    &:hover {
        color: #9A94DC;
        cursor: default;
    }

    &.active {
        color: #6a729a;
        font-weight: 600;
    }
`;

// export const NavLoginButton

export const TextLogo = styled.img`
    height: 70px;
    width: auto;
`;