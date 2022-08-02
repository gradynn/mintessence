import { Auth } from 'aws-amplify';
import React from "react";
import "./signUpSignInPage.css";
import { SwitchButtonSelected, SwitchButtonUnselected, TermsText, AcceptTerms } from './signUpSignInElements';

class CustomSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acceptedTerms: false
        }
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState(prevState => ({
            acceptedTerms: !prevState.acceptedTerms
        }));
    }

    render() {
        return(
            <div>
                <div className='lineWrapper'>
                    <input type="checkbox" onChange={this.handleChange} />
                    <TermsText>I have read and agree to the terms & conditions and privacy policy.</TermsText>
                </div>
                {(this.state.acceptedTerms) ? 
                    <button>Sign Up</button>
                    : <button disabled>Sign Up</button>}
            </div> 
        );
    }
}

class CustomAuthenticator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser : false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            newUser: !prevState.newUser
        }));
    }

    render() {
        return(
            <div className="mainWrapper">
                <div className="switchButtonWrapper">
                    {(this.state.newUser) ? 
                        <>
                            <SwitchButtonUnselected onClick={this.handleClick}>Sign In</SwitchButtonUnselected>
                            <SwitchButtonSelected>Sign Up</SwitchButtonSelected>
                        </>
                        :
                        <>
                            <SwitchButtonSelected>Sign In</SwitchButtonSelected>
                            <SwitchButtonUnselected onClick={this.handleClick}>Sign Up</SwitchButtonUnselected>
                        </>
                    }
                </div>
                {this.state.newUser ?
                    <CustomSignUp></CustomSignUp> :
                    <></>}
            </div>
        )
    }
}

export default CustomAuthenticator;