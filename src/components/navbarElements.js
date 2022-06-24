import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const TextLogo = styled.img`
    width: 250px;
`;

export const LogoLink = styled(Link)`
`;

export const NavWrapper = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
`;

export const LinkWrapper = styled.div`
    display: flex;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #2c2c2c;
    font-weight: 400;
    font-size: 18px;
    padding: 20px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledButton = styled.button`
    color: #9A94DC;
    border: 3px solid #9A94DC;
    background-color: white;
    width: 100px;
    margin: 15px 10px;
    font-size: 18px;
    border-radius: 5px;
    
    &:hover {
        color: white;
        background-color: #9A94DC;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }));
    }

    render() {
        return (
            <StyledButton onClick={this.handleClick}>
                {this.state.isLoggedIn ? 'Logout' : 'Login'}
            </StyledButton>
        );
    }
}