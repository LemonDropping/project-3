export interface BadgeInterface {
    text: string;
    filled?: boolean;
}

export interface ButtonInterface {
    text: string;
    type: string;
    to: string;
    filled?: boolean;
    icon?: JSX.Element;
}

export interface CardInterface {
    badge?: BadgeInterface,
    indicator?: string,
    image?: string,
    title: string,
    subtitle?: string,
    body: string,
    btn: ButtonInterface
}

export interface NavbarInterface {
    icon?: {
        text: string;
        to: string;
        icon?: JSX.Element;
        className?: string;
    };
    links?: {
        text: string;
        to: string;
        className?: string;
    }[];
    className?: string;
    title: string;
    image?: string;
    button?: {
        text: string;
        to: string;
        onClick?: () => void;
    }
}

 export interface SignUpFormInterface {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    placeholder: string;
    className: string;
    onSubmit: () => void;
    btn: FormButtonInterface;
    
}

export interface FormButtonInterface {
    type: 'submit' | 'reset' | 'button';
    text: string;
    disabled?: boolean;
    filled?: boolean;
    to: string;
    className: string;
    onClick?: () => void;
}

export interface FormatInputInterface {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    className: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}









  

