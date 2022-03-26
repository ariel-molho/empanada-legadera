import React, { useState, useEffect, useContext } from 'react';
import Loader from '../../components/Loader/Loader';
import ItemList from '../../components/ItemList/ItemList';
import { CartContext } from '../../context/cartContext';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthenticatedLayout as Layout } from "../_layout/authenticated/index";
import "../OrderHistory/OrderHistory.css"

const { getItems } = require('../../sevices/utils');

export default function NewOrder() {
  const [data, setData] = useState();
  const { cart, totalPrice } = useContext(CartContext);

  useEffect(() => {
    getItems()
      .then(res => setData(res));
  }, [])

  return (
    <Layout>
      <div>
        <h1 className='order-title'>Nuevo pedido</h1>
      </div>
      <Container>
        {data ? <ItemList data={data} cart={cart} totalPrice={totalPrice} /> : <Loader />}
      </Container>
    </Layout>
  )
}
