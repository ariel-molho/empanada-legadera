import React, { useEffect, useState } from 'react';
import "./OrderHistory.css"
import { AuthenticatedLayout as Layout } from "../_layout/authenticated/index";
import { Container, Table, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../../components/Loader/Loader';
import DeleteOrder from '../../components/DeleteOrder/DeleteOrder';

const { getOrdersByUser } = require('../../sevices/utils');

export default function OrderHistory() {
  const [user, setUser] = useState();
  const [orders, setOrders] = useState();
  const options = { year: "numeric", month: "long", day: "numeric" };

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")))
  }, []);//sessionStorage.getItem("user")

  useEffect(() => {
    getOrdersByUser().then(res => setOrders(res));
  }, []);

  return (
    <Layout>
      <div>
        <div>
          {user ?
            <>
              <h1 className='history-title'>Historial de Pedidos</h1>
              <h1 className='history-user'>{user}</h1>
            </>
            :
            <h1 className='history-title'>Historial de Pedidos</h1>
          }
        </div>
        <Container>
          {orders ?
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Fecha</th>
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
                        <td>
                          <div className='total-delete-box'>
                            <span>$ {order.total}</span>
                            <DeleteOrder orderId={order.id} />
                          </div>
                        </td>
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
                    <td colSpan={3} style={{ textAlign: "center" }}> No hay pedidos anteriores</td>
                  </tr>
                }
              </tbody>
            </Table>
            : <Loader />}
        </Container>
      </div>
    </Layout>
  )
}