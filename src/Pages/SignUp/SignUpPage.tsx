import React, { useState} from 'react';
import { useMutation } from '@apollo/client';
import { SignUpFormInterface } from '../../types';
import styles from './SignUpForm.module.css';
import FormInput from '../../components/UI/Form/FormInput';
import FormButton from '../../components/UI/Form/FormButton';
import  { ADD_USER }  from '../../utils/mutations';

const SignUpPage = ({
  firstName,
  lastName,
  userName,
  email,
  password,
//   confirmPassword,
//   onSubmit,
  btn
}: SignUpFormInterface) => {
    const [addUser] = useMutation(ADD_USER);
    const [formData, setFormData] = useState({
        firstName: firstName || '',
        lastName: lastName || '',
        userName: userName || '',
        email: email || '',
        password: password || '',
    });

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const variables = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password,
        };

        try {
            const { data } = await addUser({ variables });
            console.log('User added', data);
        } catch (error) {
            console.log('Error adding user', error);
        }

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value});
    };

  return (
    <div className={styles['signup-form']}>
        <form onSubmit={handleSubmit}>
            <h1>Sign-Up</h1>
                <p>Create an account to start seeing your scores on the leader board and be updated when new games are added to the site!</p>
                <div className={styles['form-group']}>
                    <FormInput
                        id="firstName"
                        label="First Name"
                        type="text"
                        value={firstName}
                        className="form-input"
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <FormInput
                        id="lastName"
                        label="Last Name"
                        type="text"
                        value={lastName}
                        className="form-input"
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                    <FormInput
                        id="userName"
                        label="Username"
                        type="text"
                        value={userName}
                        className="form-input"
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <FormInput
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        className="form-input"
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <FormInput
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        className="form-input"
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    {/* <FormInput
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        className="form-input"
                        onChange={handleChange}
                        placeholder="Confirm Password"
                    /> */}
                </div>
                
                    <FormButton
                        type="submit"
                        text={btn.text}
                        filled={btn.filled}
                        to={btn.to}
                        className="form-button submit-btn"
                    />
                
            </form>
        </div>
  );
};

export default SignUpPage;
