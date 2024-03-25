import AuthHeader from "../components/auth/AuthHeader";
import Login from "../components/auth/Login";

const AuthPage = () => {
  return (
    <>
      <AuthHeader
        heading="Login to your account"
        paragraph="Dont have an account? "
        linkName="SignUp"
        linkUrl="/signup"
      />
      <Login />
    </>
  );
};

export default AuthPage;

