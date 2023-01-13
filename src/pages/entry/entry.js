import React, {useState} from 'react';
import {LoginForm} from '../../components/login/login.js';
import {ResetPasswordForm} from '../../components/password-reset/passwordReset.js';

import './entry.css';

export const Entry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formType, setFormType] = useState('login');
    
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        switch(name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            return alert('Fill both email and password!');
        }

        //Call API to submit form
        console.log(email, password);
    };

    const handleOnResetSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            return alert('Enter Email!');
        }

        //Call API to submit form
        console.log(email);
    };

    const formSwitcher = (formType) => {
        setFormType(formType);
    };

    return (
        <div className="entry-page bg-info">
            <div className="bg-light p-4 rounded-lg m-3 form-box">
                {formType === 'login' && <LoginForm 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                    password={password}
                />}
                {formType === 'resetPassword' && <ResetPasswordForm 
                    handleOnChange={handleOnChange}
                    handleOnResetSubmit={handleOnResetSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                />}
            </div>
        </div>
    );
};