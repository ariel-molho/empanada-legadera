import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './LandingPage.css';
import Logo from '../../assets/empanada-legadera.jpg';
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  })
  
  const onFinish = (values) => {
    console.log('Success:', values);
    setLogin({
      username: values.username,
      password: values.password
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <h1 className='login-title'>Empanada Legadera</h1>
      <div className='logo-img-container'>
        <img src={Logo} alt='Logo' className='logo-img' />
      </div>
      <div>
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
            <Button type="secondary" shape="round" className='register-button'>
            <Link to="/registro">Registrarme</Link>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

