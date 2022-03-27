import React, { useState } from 'react';
import { AuthenticatedLayout as Layout } from "../_layout/authenticated/index";
import { Container, Table, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../OrderHistory/OrderHistory.css"
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

const { getOrdersByDate } = require('../../sevices/utils');

export default function AdminPage() {
  const [orders, setOrders] = useState();
  const options = { year: "numeric", month: "long", day: "numeric" };

  function onChange(date, dateString) {
    getOrdersByDate(dateString).then(res => {
      setOrders(res);
    })
  }

  return (
    <Layout>
      <div className='mb-4'>
        <h1 className='admin-title'>Administrar Pedidos</h1>
      </div>
      <Container className='mb-4'>
        <div className='admin-date-container'>
          <h6 className='admin-date-select'>Seleccione la fecha de pedidos:</h6>
          <DatePicker onChange={onChange} />
        </div>
      </Container>
      <Container>
        {orders &&
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Usuario</th>
                <th>Total en $</th>
                <th>Pedido</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ?
                orders.map((order) => {
                  return (
                    <tr key={order.id}>
                      <td>{order.date.toDate().toLocaleDateString('es-AR', options)}</td>
                      <td>{order.user}</td>
                      <td>$ {order.total}</td>
                      <td>
                        <ListGroup variant="flush">
                          {
                            order?.items?.map((item, index) => {
                              return (
                                <ListGroup.Item key={index} variant="dark">{item.nombre} x{item.cantidad}</ListGroup.Item>
                              )
                            })
                          }
                        </ListGroup>
                      </td>
                    </tr>
                  )
                })
                : 
                <tr>
                  <td colSpan={4} style={{ textAlign: "center" }} >No hay pedidos en la fecha seleccionada</td>
                </tr>
              }
            </tbody>
          </Table>
        }
      </Container>
    </Layout>
  )
}