import React from 'react';
import {TextLogo, LogoLink, NavWrapper, LinkWrapper, NavLink, LoginButton} from './navbarElements';
import { DropMenuButton } from './navbarDropdown';
import logoSrc from "../assets/text-logo.png";
import styled from 'styled-components';

const NavOuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const Navbar = (props) => {
    return (
        <NavOuterWrapper>
            <NavWrapper>
                <LogoLink to="/">
                    <TextLogo src={logoSrc} />
                </LogoLink>
                <LinkWrapper>
                    <NavLink to="/explore">Explore</NavLink>
                    <NavLink to="/showcase">Showcase</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <LoginButton />
                </LinkWrapper>
                <DropMenuButton />
            </NavWrapper>  
        </NavOuterWrapper>
    );
}

export default Navbar;