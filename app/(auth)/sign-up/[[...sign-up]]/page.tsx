// import { SignUp } from "@clerk/nextjs";
 
// const SignUpPage = () => (
//   <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
// );
// export default SignUpPage;
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp />;
}