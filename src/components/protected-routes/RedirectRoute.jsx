import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/signin");
    }, 100);
  }, []);

  return <></>;
};

export default RedirectRoute;
