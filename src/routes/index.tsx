import { Navigate, Route, Routes } from "react-router-dom";
import {
  SignIn,
  Account,
  SignUp,
  EmailConfirmation,
  Migration,
  ExampleTable,
} from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/example-table" element={<ExampleTable/>} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/lovemonster/account" element={<Account />} />
      <Route path="/lovemonster/migration" element={<Migration />} />
      <Route path="/emailconfirmation" element={<EmailConfirmation />} />
      <Route path="/lovemonster" element={<Navigate to="/lovemonster/account" />} />
    </Routes>
  );
};
