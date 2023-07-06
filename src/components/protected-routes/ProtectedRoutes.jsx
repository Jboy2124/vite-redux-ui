import React from "react";
import RedirectRoute from "./RedirectRoute";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  const user = useSelector((state) => state.userAuth.token);

  const token = user[0]?.email.length > 0 ? true : false;

  return token ? children : <RedirectRoute />;
};

export default ProtectedRoutes;
