import styled from 'styled-components';
import {HiMenu} from 'react-icons/hi';
import React from 'react';
import { NavLink} from "react-router-dom";

const BlackIcon = styled(HiMenu)`
    color: #2c2c2c;
    transform: scale(2.5);
    padding: 25px;
`;

const DropButton = styled.button`
    display: block;
    border: none;
    background-color: white;
`;

const DropMenuWrapper = styled.div`
    @media (min-width: 768px) {
        display: none;
    }

    @media (max-width: 768px) {
        display: flex:
        flex-direction: column:
    }
`;

const DropMenuElement = styled(NavLink)`
    text-decoration: none;
    color: #2c2c2c;
    font-weight: 400;
    font-size: 50px;
    margin-right: 20px;
`;

export class DropMenuButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            display: !prevState.display
        }));
    }

    render() {
        return (
            <DropMenuWrapper>
                <DropButton onClick={this.handleClick}>
                            <BlackIcon />
                    </DropButton>
            </ DropMenuWrapper>
        );
    }

}




