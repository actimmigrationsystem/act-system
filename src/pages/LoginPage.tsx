import AuthHeader from "../components/auth/AuthHeader";
import Login from "../components/auth/Login";

const LoginPage = () => {
  return (
    <>
      <AuthHeader
        heading="Login to your account"
        paragraph="Dont have an account? "
        linkName="SignUp"
        linkUrl="/registrations"
      />
      <Login />
    </>
  );
};

export default LoginPage;

