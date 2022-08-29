import { Auth, Hub } from 'aws-amplify';
import React, { useState, useEffect } from "react";
import "./signUpSignInPage.css";
import { SwitchButtonSelected, SwitchButtonUnselected, TermsText } from './signUpSignInElements';
import { render } from '@testing-library/react';
import { updateLanguageServiceSourceFile } from 'typescript';

const initialFormState = {
    email: '',
    password: '',
    authCode: '',
    formType: 'signIn',
    formNotification: ''
}

function Form() {
    const [formState, setFormState] = useState(initialFormState);
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUser()
        setAuthListener()
    }, []);

    async function setAuthListener() {
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                case 'signIn':
                    setFormState(() => ({ ...formState, formType: 'signedIn'}))
                    break;
                case 'signOut':
                    setFormState(() => ({ ...formState, formType: 'signIn'}))
            }
        })
    }

    async function checkUser() {
        try {
            const user = await Auth.currentAuthenticatedUser();
            console.log(user);
            setUser(user);
            setFormState(() => ({ ...formState, formType: 'signedIn'}))
        } catch (err) {
            setUser(null);
        }
    }

    function onChange(event) {
        event.persist();
        setFormState(() => ({...formState, [event.target.name]: event.target.value}));
    }

    const { formType } = formState;

    async function signUp() {
        const { email, password } = formState;

        const username = email;

        try {
            await Auth.signUp({ username, password });
            setFormState(() => ({...formState, formType: "confirmSignUp"}));
        } catch(err) {
            setFormState(() => ({...formState, formNotification: err.message}));
        }
    }

    async function confirmSignUp() {
        const { email, authCode } = formState;

        try {
            await Auth.confirmSignUp( email, authCode);
            setFormState(() => ({ ...formState, formType: "signIn" }));
        } catch (err) {
            setFormState(() => ({ ...formState, formNotification: err.message }));
        }
    }

    async function signIn() {
        const { email, password } = formState;

        try {
            await Auth.signIn(email, password);
            setFormState(() => ({ ...formState, formType: "signedIn"}));
        }
        catch (err) {
            setFormState(() => ({ ...formState, formNotification: err.message}));
        }
    }

    async function sendResetCode() {
        const {email} = formState;
        
        try {
            await Auth.forgotPassword(email)
            setFormState(() => ({ ...formState, formType: "resetPassword2"}));
        } catch (err) {
            setFormState(() => ({ ...formState, formNotification: err.message}));
        }
    }

    async function resetPassword() {
        const { email, authCode, password } = formState;

        try {
            await Auth.forgotPasswordSubmit(email, authCode, password);
            setFormState(() => ({ ...formState, formType: 'signIn'}));
        } catch (err) {
            setFormState(() => ({ ...formState, formNotification: err.message}));
        }
    }

    function toggleSignUp() {
        setFormState(() => ({ ...formState, formType: "signUp", formNotification: ''}));
    }

    function toggleSignIn() {
        setFormState(() => ({ ...formState, formType: "signIn", formNotification: ''}));
    }

    function toggleResetPassword1() {
        setFormState(() => ({ ...formState, formType: "resetPassword1", formNotification: ''}));
    }

    return(
        <section>
            {
                formType === 'signUp' && (
                    <div className='verticalContainer'>
                        <div className='formText'>
                            <p className='primaryFormText'>Welcome to <span style={{color: '#9A94DC'}}>Mintessence</span>!</p>
                            <p className='formSubText'>Sign up to create your profile</p>
                        </div>
                        <input name='email' onChange={onChange} placeholder='email' className='inputField'/>
                        <input name='password' type='password' onChange={onChange} placeholder='password' className='inputField' />
                        <p className='notificationText'>{formState.formNotification}</p>
                        <button onClick={signUp} className='formButton'>Sign Up</button>
                        <div className='formText horizontalContainer'>
                            <p className='formSubText'>Already have an account?</p>
                            <button onClick={toggleSignIn} className='formButton'>Sign In</button>
                        </div>
                    </div>
                )   
            }
            {
                formType === 'confirmSignUp' && (
                    <div className='verticalContainer'>
                        <div className='formText'>
                            <p className='formSubText'>Enter the code send to your email</p>
                        </div>
                        <input name='authCode' onChange={onChange} placeholder='Confirmation Code' className='inputField' />
                        <p className='notificationText'>{formState.formNotification}</p>
                        <button onClick={confirmSignUp} className='formButton'>Confirm Sign Up</button>
                    </div>
                )
            }
            {
                formType === 'signIn' && (
                    <div className='verticalContainer'>
                        <div className='formText'>
                            <p className='primaryFormText'>Welcome Back!</p>
                            <p className='formSubText'>Login to access your profile</p>
                        </div>
                        <input name='email' onChange={onChange} placeholder='email' className='inputField' />
                        <input name='password' type='password' onChange={onChange} placeholder='password' className='inputField' />
                        <p className='notificationText'>{formState.formNotification}</p>
                        <button onClick={signIn} className='formButton'>Sign In</button>
                        <div className='formText verticalContainer'>
                            <div className='horizontalContainer'>
                                <p className='formSubText'>No account?</p>
                                <button onClick={toggleSignUp} className='formButton'>Sign Up</button>
                            </div>
                            <div className='horizontalContainer'>
                                <p className='formSubText'>Forgot password?</p>
                                <button onClick={toggleResetPassword1} className='formButton'>Reset</button>
                            </div>
                        </div>
                    </div>
                )               
            }
            {
                formType === 'signedIn' && (
                    <h1>Welcome user.</h1>
                )
            }
            {
                formType === 'resetPassword1' && (
                    <div className='verticalContainer'>
                        <div className='formText'>
                            <p className='formSubText'>Enter your email</p>
                        </div>
                        <input name='email' onChange={onChange} placeholder='email' className='inputField' />
                        <p className='notificationText'>{formState.formNotification}</p>
                        <button onClick={sendResetCode} className='formButton'>Send Code</button>
                    </div>
                )               
            }
            {
                formType === 'resetPassword2' && (
                    <div className='verticalContainer'>
                        <div className='formText'>
                            <p className='formSubText'>Enter the code sent to your email and your new password</p>
                        </div>
                        <input name='authCode' onChange={onChange} placeholder='confirmation code' className='inputField' />
                        <input name='password' onChange={onChange} type='password' placeholder='new password' className='inputField' />
                        <p className='notificationText'>{formState.formNotification}</p>
                        <button onClick={resetPassword} className='formButton'>Confirm</button>
                    </div>
                )               
            }
        </section>
    );
}

export default Form;