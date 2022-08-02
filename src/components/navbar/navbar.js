import React from "react";
import logoSrc from "../../assets/text-logo.png";
import { Link, TextLogo, UserButton, UserIcon } from "./navbarElements";
import "./navbar.css";
import { NavLink,  } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";

class Navbar extends React.Component {
    constructor(props) {
        console.log('Navbar constructor has run');
        super(props);
        this.state = {
            userLoggedIn: false
        };

        this.isLoggedIn();

        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                case 'signIn':
                    this.setState({ userLoggedIn: true });
                    console.log('SignIn Event');
                    break;
                case 'signOut':
                    this.setState({ userLoggedIn: false });
                    console.log('SignOut Event');
                    break;
                default:
                    break;
            }
        });

        this.handleSignOut = this.handleSignOut.bind(this);
    }

    async isLoggedIn() {
        try {
            await Auth.currentAuthenticatedUser();
            this.setState({ userLoggedIn: true });
        }
        catch (error) {
            
        }
    }

   handleSignOut() {
        Auth.signOut();
    }
    
    render() {
        console.log('In render function: user is ', this.state.userLoggedIn);
        return(
            <div className="navWrapper">
                <NavLink to="/">
                    <TextLogo src={logoSrc} />
                </NavLink>
                <div className="linkWrapper">
                    {
                        this.state.userLoggedIn ? (
                            <NavLink to='/profile'>    
                                <UserIcon />
                            </NavLink>
                        ) : (
                            <></>
                        )
                    }
                    {
                        this.state.userLoggedIn ? (
                            <NavLink to='/' style={{textDecoration: 'none'}}>
                                <UserButton onClick={this.handleSignOut}>
                                    Sign Out
                                </UserButton>
                            </NavLink>
                        ) : (
                            <NavLink to='/sign-in' style={{textDecoration: 'none'}}>
                                <UserButton>
                                    Sign In
                                </UserButton>
                            </NavLink>
                        )
                    }
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