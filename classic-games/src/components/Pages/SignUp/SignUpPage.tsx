import { handleFormSubmit, formFields, Form } from "../../UI/Form/Form";

const SignUpPage = () => {
    return (
        <div>
            <h1>Register</h1>    
            <Form fields={formFields} onSubmit={handleFormSubmit} />
        </div>
    );
};

export default SignUpPage;
