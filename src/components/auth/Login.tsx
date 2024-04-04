import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginFields } from "./authFormFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = loginFields;
const apiHost = import.meta.env.VITE_API_HOST;
const loginRoute = import.meta.env.VITE_LOGIN_ROUTE;

interface LoginState {
  email: string;
  password: string;
  loading: boolean;
  [key: string]: string | boolean;
}

const Login = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState<LoginState>({
    email: "",
    password: "",
    loading: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginState((prevState) => ({ ...prevState, [id]: value }));
  };

  const signinUser = async () => {
    try {
      setLoginState((prevState) => ({ ...prevState, loading: true }));

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
        const { role } = response.data.user;

        if (role === "client") {
          navigate("/client_dashboard");
        } else if (role === "admin") {
          navigate("/admin_dashboard");
        } else {
          console.error("Unknown user role:", role);
          navigate("/users/sign_in");
        }
      } else {
        setLoginState((prevState) => ({
          ...prevState,
          error: "Sign-in failed. Please try again.",
        }));
      }
    } catch (error) {
      console.error("Sign-in failed:", error);
      setLoginState((prevState) => ({
        ...prevState,
        error: "Sign-in failed. Incorrect username or password.",
      }));
    } finally {
      setLoginState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signinUser();
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
            value={loginState[field.id].toString()}
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
      <FormAction
      handleSubmit={handleSubmit}
       loading={loginState.loading}
        text="Login" />
      {loginState.error && (
        <div className="text-red-600">{loginState.error}</div>
      )}
    </form>
  );
};

export default Login;
