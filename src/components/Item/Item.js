import React, { useContext } from "react";
import './Item.css';
import { Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/cartContext';


export default function Item({ data, setShow }) {
  const { addToCart } = useContext(CartContext);

  let cantidadCompra;
  function addButton(cantidad) {
    setShow({
      hidden: true
    });
    cantidadCompra = cantidad;
    productSelected();
  }

  function productSelected() {
    const newItem = {
      id: data.id,
      nombre: data.name,
      precio: data.price,
      cantidad: cantidadCompra
    };
    addToCart(newItem);
  }

  return (
    <Col>
      <Card className="item-card">
        <Card.Body>
          <Card.Text>{data.name}</Card.Text>
          <Card.Text>Precio: $ {data.price} c/u</Card.Text>
        </Card.Body>
        <ItemCount finalizar={addButton} />
      </Card>
    </Col>
  )
}