import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { signupFields } from "./authFormFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = signupFields;
const apiHost = import.meta.env.VITE_API_HOST;
const registrationRoute = import.meta.env.VITE_SIGN_UP_ROUTE;

interface SignupState {
  [key: string]: string | boolean;
  email: string;
  password: string;
  loading: boolean;
}

const SignUp = () => {
  // auth hooks and states
  const location = useLocation();
  const navigate = useNavigate();
  const prefillEmail = location.state?.prefillEmail || "";
  // console.log("Signup prefill Email  is " + prefillEmail);

  let fieldsState: SignupState = {
    email: prefillEmail,
    password: "",
    loading: false,
  };
  fields.forEach((field) => (fieldsState[field.id] = ""));

  const [signupState, setSignupState] = useState<SignupState>({
    ...fieldsState,
    email: prefillEmail,
    loading: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignupState((prevState) => ({ ...prevState, [id]: value }));
  };

  const signupUser = async () => {
    try {
      const response = await axios.post(
        `${apiHost}${registrationRoute}`,
        {
          user: {
            email: signupState.email,
            password: signupState.password,
            role: signupState.role,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        // Redirect user to dashboard upon successful signup
        navigate("/users/sign_in");
        console.log("User successfully created!");
      } else {
        // Handle other status codes or errors
        setSignupState((prevState) => ({
          ...prevState,
          error: "Signup failed. Please try again later.",
        }));
      }
    } catch (error) {
      // Handle error
      console.error("Signup failed", error);
      setSignupState((prevState) => ({
        ...prevState,
        error: "Signup failed. Please try again or contact support.",
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
        {fields.map((field) => {
          return (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id].toString()}
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
      <FormAction
        handleSubmit={handleSubmit}
        loading={signupState.loading}
        text="SignUp"
      />
      {signupState.error && (
        <div className="text-red-600">{signupState.error}</div>
      )}
    </form>
  );
};
export default SignUp;