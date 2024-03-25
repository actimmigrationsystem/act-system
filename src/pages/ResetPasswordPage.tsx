import AuthHeader from "../components/auth/AuthHeader";
import Reset from "../components/auth/Reset";

const ResetPasswordPage = () => {
  return (
    <>
      <AuthHeader
        heading="reset your password"
        paragraph="return to Login? "
        linkName="Login"
        linkUrl="/login"
      />
      <Reset />
    </>
  );
};

export default ResetPasswordPage;

