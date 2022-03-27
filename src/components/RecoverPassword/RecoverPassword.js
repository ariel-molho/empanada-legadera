import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import 'antd/dist/antd.css';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { resetPassword } from '../../sevices/utils';

export default function RecoverPassword() {
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [userMail, setUserMail] = useState("");

  const formValues = (values) => {
    if (values.username) {
      setUserMail(values.username);
    }
  }

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        setShow(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert])

  const sendReset = async () => {
    await resetPassword(userMail);
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false)
  }

  return (
    <>
      <a className='nav-link' onClick={handleShow}>¿Olvidaste tu contraseña?</a>

      <Modal show={show} onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="mx-auto">Recuperación de contraseña</Modal.Title>
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
              rules={[{ required: true, message: 'Email requerido para recuperar su contraseña' }]}
            >
              <Input placeholder="Ingrese su e-mail" />
            </Form.Item>
          </Form>
          <div>
            {showAlert ?
              <Alert
                message="Se ha enviado un correo a su casilla de correos"
                type="success"
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
          <Button type="primary" className='mx-auto' shape="round" onClick={sendReset}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
