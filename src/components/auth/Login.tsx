import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { loginFields } from "./authFormFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = loginFields;
const apiHost = import.meta.env.VITE_API_HOST;
const loginRoute = import.meta.env.VITE_LOGIN_ROUTE;

interface loginState {
  [key: string]: string;
  email: string;
  password: string;
}

const Login = () => {
  // auth hooks and states
  const navigate = useNavigate();

  let fieldsState: loginState = {
    email: "",
    password: "",
  };
  fields.forEach((field) => (fieldsState[field.id] = ""));

  const [loginState, setloginState] = useState<loginState>({
    ...fieldsState
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setloginState((prevState) => ({ ...prevState, [id]: value }));
  };

  const signupUser = async () => {
    try {
      const response = await axios.post(
        `${apiHost}${loginRoute}`,
        {
          user: {
            email: loginState.email,
            password: loginState.password,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Redirect user to dashboard upon successful signup
        navigate("/dashboard");
        console.log("User successfully signedIn!");
      } else {
        // Handle other status codes or errors
        setloginState((prevState) => ({
          ...prevState,
          error: "SignIn  failed. Please try again.",
        }));
      }
    } catch (error) {
      // Handle error
      console.error("SignIn failed", error);
      setloginState((prevState) => ({
        ...prevState,
        error: "SignIn failed. Please try again.",
      }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signupUser();
  };
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
