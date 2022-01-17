import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './Register.css';

export default function Register() {
  const onRegister = (values) => {
    console.log('Success:', values);
  };

  return (
    <div>
      <h1 className='register-title'>Empanada Legadera</h1>
      <h2 className='register-subTitle'>Nuevo Usuario</h2>
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
          onFinish={onRegister}
          autoComplete="off"
        >
          <Form.Item
            label="Nombre"
            name="firstname"
            rules={[{ required: true, message: 'Nombre requerido para registro' }]}
          >
            <Input placeholder="Ingrese su nombre" />
          </Form.Item>
          <Form.Item
            label="Apellido"
            name="lastname"
            rules={[{ required: true, message: 'Apellido requerido para registro' }]}
          >
            <Input placeholder="Ingrese su apellido" />
          </Form.Item>
          <Form.Item
            label="Email de usuario"
            name="username"
            rules={[{ required: true, message: 'Email requerido para registro' }]}
          >
            <Input placeholder="Ingrese su e-mail" />
          </Form.Item>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: 'Contraseña requerida para registro' }]}
          >
            <Input.Password placeholder="Ingrese su e-contraseña" />
          </Form.Item>
          <div className='registry-button-container'>
            <Button type="primary" shape="round" htmlType="submit" className='registry-button'>
              Confirmar Registro
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
