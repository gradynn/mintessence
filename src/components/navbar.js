import React from 'react';
import {TextLogo, LogoLink, NavWrapper, LinkWrapper, NavLink, LoginButton} from './navbarElements';
import logoSrc from "../assets/text-logo.png";

const Navbar = () => {
    return (
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
            </NavWrapper>
    );
}

export default Navbar;