import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { logout } from '../../sevices/utils';
import { useNavigate } from "react-router-dom";

export default function OrderHistory() {
  let navigate = useNavigate();
  const closeSession = () => {
    logout();
    navigate("/");
    sessionStorage.clear();
  }

  return (
    <div>
      <h1>OrderHistory</h1>
      <Button type="primary" shape="round" onClick={closeSession}>
        Cerrar Sessión
      </Button>
    </div>
  )
}
