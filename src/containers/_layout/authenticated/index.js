import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from '../../../sevices/utils';
import NavigatorBar from '../../../components/Navbar/NavigatorBar';

export function AuthenticatedLayout({ children }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      logout();
      navigate("/");
    }
  }, [sessionStorage.getItem("token")]);

  return (
    <>
      {sessionStorage.getItem("token") ? (
        <div>
          <NavigatorBar />
          <div>{children}</div>
        </div>
      ) : null}
    </>
  );
}