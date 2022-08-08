//import { Auth } from 'aws-amplify';
import React from "react";
import "./signUpSignInPage.css";
//import { SwitchButtonSelected, SwitchButtonUnselected, TermsText } from './signUpSignInElements';
import { Authenticator } from '@aws-amplify/ui-react';

// class CustomSignUp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             acceptedTerms: false,
//             email: '',
//             password: '',
//             passwordBackup: ''
//         }
        
//         this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
//         this.handleEmailChange = this.handleEmailChange.bind(this);
//         this.handlePasswordChange = this.handlePasswordChange.bind(this);
//         this.handlePasswordBackupChange = this.handlePasswordBackupChange.bind(this);
//         this.handleSignUpRequest = this.handleSignUpRequest.bind(this);
//     }

//     handleCheckboxChange = () => {
//         this.setState(prevState => ({
//             acceptedTerms: !prevState.acceptedTerms
//         }));
//     }

//     handleEmailChange = (event) => {
//         this.setState({
//             email: event.target.value
//         });
//     }

//     handlePasswordChange = (event) => {
//         this.setState({
//             password: event.target.value
//         });
//     }

//     handlePasswordBackupChange = (event) => {
//         this.setState({
//             passwordBackup: event.target.value
//         });
//     }

//     handleSignUpRequest = async () => {
//         try {
//             const { user } = await Auth.signUp({
//                 username: this.state.email,
//                 password: this.state.password,
//                 autoSignIn: {
//                     enabled: true
//                 }
//             });
//             console.log(user);
//         } catch (error) {
//             console.log('error signing up', error);
//         }
//     }

//     render() {
//         return(
//             <div>
//                 <div className='lineWrapper'>
//                     <input type="checkbox" onChange={this.handleCheckboxChange} />
//                     <TermsText>I have read and agree to the terms & conditions and privacy policy.</TermsText>
//                 </div>
//                 {(this.state.acceptedTerms) ? 
//                     <button onClick={this.handleSignUpRequest}>Sign Up</button>
//                     : <button disabled>Sign Up</button>}
//             </div> 
//         );
//     }
// }

// class CustomAuthenticator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             newUser : false
//         };

//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(prevState => ({
//             newUser: !prevState.newUser
//         }));
//     }

//     render() {
//         return(
//             <div className='mainWrapper'>
//                 <div className="switchButtonWrapper">
//                     {(this.state.newUser) ? 
//                         <>
//                             <SwitchButtonUnselected onClick={this.handleClick}>Sign In</SwitchButtonUnselected>
//                             <SwitchButtonSelected>Sign Up</SwitchButtonSelected>
//                         </>
//                         :
//                         <>
//                             <SwitchButtonSelected>Sign In</SwitchButtonSelected>
//                             <SwitchButtonUnselected onClick={this.handleClick}>Sign Up</SwitchButtonUnselected>
//                         </>
//                     }
//                 </div>
//                 <div className="formWrapper">
//                     {this.state.newUser ?
//                         <CustomSignUp></CustomSignUp> :
//                         <></>}
//                 </div>
//             </div>
//             )
//     }
// }

// Using the basic amazon authenticator for now until I can figure out custom authentication
let BasicAuthenticator = () => {
    return(
        <Authenticator></Authenticator>
    );
}

export default BasicAuthenticator;