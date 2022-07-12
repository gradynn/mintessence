import React from "react";
import { TextLogo } from "../navbar/navbarElements";
import logoSrc from "../../assets/text-logo.png";
import { MenuToggle, DropdownLink } from "./mobileNavbarElements";
import "./mobileNavbar.css";
import { GrMenu, GrClose } from "react-icons/gr";

class MobileNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuToggled: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            menuToggled: !prevState.menuToggled
        }));
    }

    render() {
        return(
            <div className="mobileNavWrapper">
                <div className="topBar">
                    <TextLogo src={logoSrc}/>
                    <MenuToggle onClick={this.handleClick}>
                        {this.state.menuToggled ? <GrClose size={35} /> : <GrMenu size={35}/> }
                    </MenuToggle>
                </div>
                {this.state.menuToggled ? 
                    <div className="dropdownLinks">
                        <div className="dropdownLinkContainer">
                            <DropdownLink onClick={this.handleClick} activeClass="active" smooth spy to="explore">Explore</DropdownLink>
                        </div>
                        <div className="dropdownLinkContainer">
                            <DropdownLink onClick={this.handleClick} activeClass="active" smooth spy to="about">About</DropdownLink>
                        </div>
                    </div> :
                    <></>
                }
            </div>
        );
    }
}

export default MobileNavbar;