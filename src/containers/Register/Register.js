import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import 'antd/dist/antd.min.css';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import { registerUser } from '../../sevices/utils';
import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newUser, setNewUser] = useState({
    username: "",
    password: ""
  });

  const formValues = (values) => {
    if (values.username) {
      setNewUser({ ...newUser,
        username: values.username
      });
    }
    else {
      setNewUser({ ...newUser,
        password: values.password
      });
    }
  }

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);;
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert])

  const onRegister = async () => {
    const response = await registerUser(newUser.username, newUser.password);
    if (response.hasOwnProperty("message")) {
      // console.log(response.message);//para control
      setShowAlert(true);
    }
    if (response.hasOwnProperty("user")) {
      // console.log(response.user);//para control
      setShow(false);
      navigate("/historial");
    }
  };

  const closeAlert = () => {
    setShowAlert(false)
  }


  
  return (
    <>
      <Button type="secondary" shape="round" className='register-button' onClick={handleShow}>
        Registrarme
      </Button>

      <Modal show={show} onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="mx-auto">Nuevo Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            name="basic"
            layout="vertical"
            labelCol={{
              xs: { span: 12 },
              sm: { offset: 5, span: 14 },
              md: { offset: 4, span: 16 }
            }}
            wrapperCol={{
              xs: { span: 12 },
              sm: { offset: 5, span: 14 },
              md: { offset: 4, span: 16 }
            }}
            onValuesChange={formValues}
          >
            <Form.Item
              label="Email de usuario"
              name="username"
              rules={[{ required: true, message: 'Email requerido para registro' }]}
            >
              <Input placeholder="Ingrese su e-mail" />
            </Form.Item>
            <Form.Item
              label="Contraseña (mínimo 6 caracteres)"
              name="password"
              rules={[{ required: true, message: 'Contraseña requerida para registro' }]}
            >
              <Input.Password placeholder="Ingrese su contraseña" />
            </Form.Item>
          </Form>
          <div>
        {showAlert ?
          <Alert
            message="Algo falló"
            description="El usuario ya existe."
            type="error"
            showIcon
            closable
            onClose={closeAlert}
          />
          :
          null
        }
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="primary" shape="round" onClick={onRegister}>
            Confirmar Registro
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}