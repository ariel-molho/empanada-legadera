import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../layout.css";
export function UnauthenticatedLayout({ children }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/historial");
    }
  }, [sessionStorage.getItem("token")]);

  return (
    <div>
      <div className="main-cont">{children}</div>
      <footer className="footer">
        <p className="copyright">© Copyright 2022 AryApp - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}