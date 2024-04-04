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
  [key: string]: string;
  email: string;
  password: string;
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
  };
  fields.forEach((field) => (fieldsState[field.id] = ""));

  const [signupState, setSignupState] = useState<SignupState>({
    ...fieldsState,
    "email": prefillEmail,
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
         navigate("/client_dashboard");
         console.log("User successfully created!");
       } else {
         // Handle other status codes or errors
         setSignupState((prevState) => ({
           ...prevState,
           error: "Signup failed. Please try again later.",
         }));
       }
     } catch (error: any) {
       // Type assertion here
       // Handle error
       console.error("Signup failed", error);

       // Check if the error response indicates that the user already exists
       if (error.response && error.response.status === 422) {
         const errorMessage =
           error.response.data.error || "User already exists. Please login.";
         setSignupState((prevState) => ({
           ...prevState,
           error: errorMessage,
         }));
       } else if (error.response && error.response.status === 409) {
         // For other errors, provide a generic error message
         setSignupState((prevState) => ({
           ...prevState,
           error: "You already have an existing account. Please login.",
         }));
       }
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
      {signupState.error && (
        <div className="text-red-600">{signupState.error}</div>
      )}
    </form>
  );
};
export default SignUp;
