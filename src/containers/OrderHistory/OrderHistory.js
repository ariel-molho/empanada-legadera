import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { logout } from '../../sevices/utils';
import { useNavigate } from "react-router-dom";
import { AuthenticatedLayout as Layout } from "../_layout/authenticated/index";

export default function OrderHistory() {
  let navigate = useNavigate();
  const closeSession = () => {
    logout();
    navigate("/");
    sessionStorage.clear();
  }

  return (
    <Layout>
      <div>
        <h1>OrderHistory</h1>
        <Button type="primary" shape="round" onClick={closeSession}>
          Cerrar Sessión
        </Button>
      </div>
    </Layout>
  )
}
