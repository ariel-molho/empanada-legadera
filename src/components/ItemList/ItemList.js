import React, { useState, useContext } from "react";
import './ItemList.css';
import Item from '../Item/Item';
import { Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../context/cartContext';

const { createOrder } = require('../../sevices/utils');

export default function ItemList({ data, cart, totalPrice }) {
  const [show, setShow] = useState(true);
  let navigate = useNavigate();
  const { clearCart } = useContext(CartContext);

  const confirmOrder = () => {
    createOrder(cart, parseInt(totalPrice));
    clearCart();
    navigate("/historial");
  }

  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {
          data.map((data) => {
            return (
              <Item key={data.id} data={data} setShow={setShow} />
            )
          })
        }
      </Row>
      <Row className="g-4">
        <Button hidden={!show.hidden} variant="warning" size="lg" id="confirm-button" onClick={confirmOrder}>
          Confirmar Pedido
        </Button>
      </Row>
    </div>
  )
}
