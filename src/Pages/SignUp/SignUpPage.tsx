import { SignUpFormInterface } from '../../types';
import styles from './SignUpForm.module.css';
import FormInput from '../../components/UI/Form/FormInput';
import FormButton from '../../components/UI/Form/FormButton';

const SignUpPage = ({
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmPassword,
  onSubmit,
  btn
}: SignUpFormInterface) => {
  return (
    <div className={styles['signup-form']}>
        <form onSubmit={onSubmit}>
            <h1>Sign-Up</h1>
                <p>Create an account to start seeing your scores on the leader board and be updated when new games are added to the site!</p>
                <div className={styles['form-group']}>
                    <FormInput
                        id="firstName"
                        label="First Name"
                        type="text"
                        value={firstName}
                        className="form-input"
                        onChange={(e) => console.log(e.target.value)}
                        placeholder="First Name"
                    />
                    <FormInput
                        id="lastName"
                        label="Last Name"
                        type="text"
                        value={lastName}
                        className="form-input"
                        onChange={(e) => console.log(e.target.value)}
                        placeholder="Last Name"
                    />
                    <FormInput
                        id="userName"
                        label="Username"
                        type="text"
                        value={userName}
                        className="form-input"
                        onChange={(e) => console.log(e.target.value)}
                        placeholder="Username"
                    />
                    <FormInput
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        className="form-input"
                        onChange={(e) => console.log(e.target.value)}
                        placeholder="Email"
                    />
                    <FormInput
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        className="form-input"
                        onChange={(e) => console.log(e.target.value)}
                        placeholder="Password"
                    />
                    <FormInput
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        className="form-input"
                        onChange={(e) => console.log(e.target.value)}
                        placeholder="Confirm Password"
                    />
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
