import React, { useState, useEffect, useContext } from 'react';
import Loader from '../../components/Loader/Loader';
import ItemList from '../../components/ItemList/ItemList';
import { CartContext } from '../../context/cartContext';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthenticatedLayout as Layout } from "../_layout/authenticated/index";

const { getItems } = require('../../sevices/utils');

export default function NewOrder() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    getItems()
      .then(res => setData(res));
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <Layout>
      <Container>
        {!isLoading ? <Loader /> : <ItemList data={data} />}
      </Container>
    </Layout>
  )
}
