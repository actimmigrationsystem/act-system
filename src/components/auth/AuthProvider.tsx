import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface AuthContextProps {
  user: string;
  signinUser: (email: string, password: string) => Promise<void>;
  signupUser: (email: string, password: string) => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    error: "",
  });
  const [signupState, setSignupState] = useState({
    email: "",
    password: "",
    role: "client",
    error: "",
  });
  const apiHost = import.meta.env.VITE_API_HOST;
  const loginRoute = import.meta.env.VITE_LOGIN_ROUTE;
const registrationRoute = import.meta.env.VITE_SIGN_UP_ROUTE;


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
       setUser(response.data.user);
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


  const signinUser = async () => {
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
       setUser(response.data.user);
       navigate("/client_dashboard");
     } else {
       setLoginState((prevState) => ({
         ...prevState,
         error: "SignIn  failed. Please try again.",
       }));
     }
    } catch (error) {
      setLoginState((prevState) => ({
        ...prevState,
        error: "SignIn failed. Incorrect username | password.",
      }));
    }
  };

  return (
    <AuthContext.Provider value={{ user, signupUser, signinUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
      const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};