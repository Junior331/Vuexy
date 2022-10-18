import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn, Account, SignUp, EmailConfirmation  } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/account" element={<Account />} />
      <Route path="/emailconfirmation" element={<EmailConfirmation />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
