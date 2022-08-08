import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

export const Link = styled(NavLink)`
    font-size: 24px;
    font-weight: 500;
    margin-top: 23px;
    margin-bottom: 23px;
    text-decoration: none;
    color: black;

    &:hover {
        color: #9A94DC;
        cursor: default;
    }
`;

// export const NavLoginButton

export const TextLogo = styled.img`
    height: 70px;
    width: auto;
`;

export const UserIcon = styled(FaUserCircle)`
    height: 50px;
    width: auto;
    color: white;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    margin-top: 15px;
    margin-right: 10px;
    border: 2px solid #9A94DC;
    background-color: #9A94DC;
    border-radius: 50%;

    &:hover {
        color: #9A94DC;
        background-color: white;
    }
`;

export const StyledButton = styled.button`
    background-color: white;
    border: none;
`;

export const UserButton = styled.button`
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: 2px solid #9A94DC;
    border-radius: 0.6em;
    color: #9A94DC;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

    &:hover {
        color: white;
        outline: 0;
        box-shadow: 0 0 40px 40px #9A94DC inset;
    }
`;