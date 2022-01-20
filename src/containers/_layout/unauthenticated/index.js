import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function UnauthenticatedLayout({ children }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/historial");
    }
  }, [sessionStorage.getItem("token")]);

  return (
    <>
      {children}
    </>
  );
}