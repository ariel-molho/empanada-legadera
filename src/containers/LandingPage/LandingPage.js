import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import 'antd/dist/antd.css';
import './LandingPage.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/empanada-legadera.jpg';
import Register from '../Register/Register';
import RecoverPassword from '../../components/RecoverPassword/RecoverPassword';
import { loginUser } from '../../sevices/utils';
import { useNavigate } from "react-router-dom";
import { UnauthenticatedLayout as Layout } from "../_layout/unauthenticated/index";

export default function LandingPage() {
  let navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const onFinish = async (values) => {
    const response = await loginUser(values.username, values.password);
    if (response.hasOwnProperty("message")) {
      // console.log(response.message);//para control
      setShowAlert(true);
    }
    if (response.hasOwnProperty("user")) {
      // console.log(response.user);//para control
      navigate("/historial");
      // window.location.href = "/historial";
      // setTimeout(() => {}, 1000);
    }
  };

  const closeAlert = () => {
    setShowAlert(false)
  }

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);;
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert])

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <div>
        <h1 className='login-title'>Empanada Legadera</h1>
        <div className='logo-img-container'>
          <img src={Logo} alt='Logo' className='logo-img' />
        </div>
        <Container>
          <Form
            name="basic"
            layout="vertical"
            labelCol={{
              xs: { span: 2 },
              sm: { offset: 6, span: 12 },
              md: { offset: 7, span: 10 },
              lg: { offset: 8, span: 8 }
            }}
            wrapperCol={{
              xs: { span: 2 },
              sm: { offset: 6, span: 12 },
              md: { offset: 7, span: 10 },
              lg: { offset: 8, span: 8 }
            }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email de usuario"
              name="username"
              rules={[{ required: true, message: 'Email requerido para ingresar' }]}
            >
              <Input placeholder="Ingrese su e-mail" />
            </Form.Item>
            <Form.Item
              label="Contraseña"
              name="password"
              rules={[{ required: true, message: 'Contraseña requerida para ingresar' }]}
            >
              <Input.Password placeholder="Ingrese su e-contraseña" />
            </Form.Item>
            <div className='login-button-container'>
              <Button type="primary" shape="round" htmlType="submit" className='login-button'>
                Ingresar
              </Button>
            </div>
            <div className='register-button-container'>
              <Register />
            </div>
            <div className='reset-password-container'>
              <RecoverPassword />
            </div>
          </Form>
        </Container>
        <div>
          {showAlert ?
            <Alert
              message="Algo falló"
              description="El usuario y/o contraseña son incorrectos."
              type="error"
              showIcon
              closable
              onClose={closeAlert}
            />
            :
            null
          }
        </div>
      </div>
    </Layout>
  )
}

