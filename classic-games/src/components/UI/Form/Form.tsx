import { useState } from 'react';

interface FormField {
  label: string;
  name: string;
  type: "text" | "email" | "password" | "textarea";
  required: boolean;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (formData: Record<string, string>) => void;
}

export function handleFormSubmit(formData: Record<string, string>) {
  console.log(formData);
}

export const formFields: FormField[] = [
  { label: "Name", name: "name", type: "text", required: true },
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Password", name: "password", type: "password", required: true },
  { label: "Message", name: "message", type: "textarea", required: true },
];


export function Form({ fields, onSubmit }: FormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.name}</label>
          {field.type === "textarea" ? ( 
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              onChange={handleChange}
            />
          ) : (
            <input 
              id={field.name}
              name={field.name}
              required={field.required}
              onChange={handleChange}
            />
          
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

