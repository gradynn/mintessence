import React from "react";
import logoSrc from "../../assets/text-logo.png";
import { Link, animateScroll } from "react-scroll";
import { NavLink, TextLogo} from "./navbarElements";
import "./navbar.css";

class Navbar extends React.Component {
    render() {
        return(
            <div className="navWrapper">
                <Link smooth spy to="">
                    <TextLogo src={logoSrc} />
                </Link>
                <div className="linkWrapper">
                    <NavLink activeClass='active' smooth spy to="explore">
                        Explore
                    </NavLink>
                    <NavLink activeClass='active' smooth spy to="about">
                        About
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;

/*
<Link activeClass='active' smooth spy to='about'>
    About
</Link>  
*/