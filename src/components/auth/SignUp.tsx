import { useState } from "react";
import { useLocation } from "react-router-dom";
import { loginFields } from "./authFormFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = loginFields;

interface SignupState {
  [key: string]: string;
  email: string;
}

const SignUp = () => {
  // auth hooks and states
  const location = useLocation();
  const prefillEmail = location.state?.prefillEmail || "";
  console.log("Signup prefill Email  is " + prefillEmail);

  let fieldsState: SignupState = {
    "email-address": "",
    email: ""
  };
  fields.forEach((field) => (fieldsState[field.id] = ""));

  const [signupState, setSignupState] = useState<SignupState>({
    ...fieldsState,
    "email-address": prefillEmail,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignupState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    authenticateUser();
  };
  const authenticateUser = () => {};
  return (
    <form
      className="mt-8 space-y-6 max-w-md mx-auto w-1/2"
      onSubmit={handleSubmit}
    >
      <div className="-space-y-px">
        {fields.map((field) => {
          return (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
              customClass=""
            />
          );
        })}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="SignUp" />
    </form>
  );
};
export default SignUp;
