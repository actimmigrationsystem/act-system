import Header from "../components/auth/AuthHeader";
import Signup from "../components/auth/SignUp";

export default function SignupPage() {
  return (
    <>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Signup />
    </>
  );
}
