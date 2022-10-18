import * as yup from "yup";

const signInSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Invalid password, must be 8 digits")
    .required("Mandatory password field"),
  email: yup
    .string()
    .email("Invalid e-mail.")
    .required("Mandatory e-mail field"),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], `Passwords don't match.`)
  //   .required("Mandatory confirm password field"),
});
export default signInSchema;
