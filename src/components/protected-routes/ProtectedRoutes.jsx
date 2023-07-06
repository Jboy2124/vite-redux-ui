import React from "react";
import RedirectRoute from "./RedirectRoute";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  const user = useSelector((state) => state.userAuth.user);

  const token = user[0]?.token ? true : false;

  return token ? children : <RedirectRoute />;
};

export default ProtectedRoutes;
