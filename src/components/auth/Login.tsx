import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loginFields } from "./authFormFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = loginFields;
let fieldsState: { [key: string]: any } = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Login = () => {
  // auth hooks and states
  const location = useLocation();
  const [loginState, setLoginState] = useState({ ...fieldsState });
  const prefillEmail = location.state?.prefillEmail || "";

  useEffect(() => {
    if (prefillEmail) {
      setLoginState((prevState) => ({ ...prevState, email: prefillEmail }));
    }
  }, [prefillEmail]);

  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
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
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            customClass=""
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
};
export default Login;
