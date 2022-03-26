import React, { useState, useContext, useEffect } from 'react';
import './ItemCount.css';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../context/cartContext';

export default function ItemCount({ finalizar }) {
  const [number, setNumber] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if(cart.length === 0){
      setConfirm(false);
    }
  }, [cart])

  function onIncrement() {
    setNumber(number + 1)
  }

  function onDecrement() {
    setNumber(number - 1)
  }

  function addtoCart() {
    setConfirm(true);
    finalizar(number);
  }

  return (
    <>
      <Card.Body className="card-counter">
        {
          (number === 0 && !confirm) ? <Button variant="danger" onClick={onDecrement} disabled size="sm">-</Button>
          : (number > 0 && !confirm) ?
          <Button variant="danger" onClick={onDecrement} size="sm">-</Button>
          : <Button variant="danger" onClick={onDecrement} disabled size="sm">-</Button>
        }
        <div className="visual align-self-center">{number}</div>
        {
          (number === 5 && !confirm) ? <Button variant="primary" onClick={onIncrement} disabled size="sm">+</Button>
          : (number < 5 && !confirm) ?
          <Button variant="primary" onClick={onIncrement} size="sm">+</Button>
          : <Button variant="primary" onClick={onIncrement} disabled size="sm">+</Button>
        }
      </Card.Body>
      <Card.Body className="card-confirm">
        {
          (number === 0 && !confirm) ? <Button variant="success" onClick={addtoCart} disabled>OK</Button>
          : (number > 0 && !confirm) ?
          <Button variant="success" onClick={addtoCart}>OK</Button>
          : <Button variant="success" onClick={addtoCart} disabled>OK</Button>
        }
      </Card.Body>
    </>
  )
}

/*
        {
          number > 0 ? <Button variant="danger" onClick={onDecrement} size="sm">-</Button> : <Button variant="danger" onClick={onDecrement} disabled size="sm">-</Button>
        }
        <div className="visual align-self-center">{number}</div>
        {
          number < 5 ? <Button variant="primary" onClick={onIncrement} size="sm">+</Button> : <Button variant="primary" onClick={onIncrement} disabled size="sm">+</Button>
        }
*/