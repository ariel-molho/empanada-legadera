import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import 'antd/dist/antd.min.css';

const { deleteOrder } = require('../../sevices/utils');

export default function DeleteOrder({ orderId }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function eraseOrder(idorder) {
    deleteOrder(idorder);
    setTimeout(function () {
      setShow(false);
      window.location.reload(false);
    }, 2000);
  }

  return (
    <div>
      <Tooltip placement="bottom" title="Eliminar pedido">
        <DeleteOutlined onClick={handleShow} />
      </Tooltip>

      <Modal show={show} onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body className="mx-auto" >
          <p>¿Está seguro que desea eliminar este pedido?</p>
          <p>Esta acción no se puede deshacer</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" shape="round" className="mx-auto" onClick={() => eraseOrder(orderId)}>
            Confirmar Eliminación
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
