import React, { useEffect, useState } from 'react';
import { AuthenticatedLayout as Layout } from "../_layout/authenticated/index";
import { Container, Table, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../OrderHistory/OrderHistory.css"
import { DatePicker } from 'antd';
import 'antd/dist/antd.min.css';
import NotFound from '../NotFound/NotFound';
import DeleteOrder from '../../components/DeleteOrder/DeleteOrder';

const { getOrdersByDate } = require('../../sevices/utils');

export default function AdminPage() {
  const [orders, setOrders] = useState();
  const [orderSum, setOrderSum] = useState();
  const [adminUser, setAdminUser] = useState(false);
  const options = { year: "numeric", month: "long", day: "numeric" };

  function onChange(date, dateString) {
    getOrdersByDate(dateString).then(res => {
      console.log(res);
      setOrders(res);
      summary(res);
    })
  }

  function summary(res) {
    let orderSummary = [];
    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < res[i].items.length; j++) {
        if (orderSummary.some(x => x.nombre === res[i].items[j].nombre)) {
          let objIndex = orderSummary.findIndex((obj => obj.nombre === res[i].items[j].nombre));
          orderSummary[objIndex].cantidad += res[i].items[j].cantidad;
        } else {
          orderSummary.push({
            nombre: res[i].items[j].nombre,
            cantidad: res[i].items[j].cantidad
          })
        }
      }
    }
    setOrderSum(orderSummary);
  }

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("user")) === process.env.REACT_APP_ADMIN_USER) {
      setAdminUser(true)
    }
  }, []);

  return (
    <>
      {adminUser ?
        <Layout>
          < div className='mb-4' >
            <h1 className='admin-title'>Administrar Pedidos</h1>
          </div >
          <Container className='mb-4'>
            <div className='admin-date-container'>
              <h6 className='admin-date-select'>Seleccione la fecha de pedidos:</h6>
              <DatePicker onChange={onChange} />
            </div>
          </Container>
          <Container>
            {orders &&
              <Table striped bordered hover responsive="sm" variant="dark">
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
                      <td colSpan={4} style={{ textAlign: "center" }} >No hay pedidos en la fecha seleccionada</td>
                    </tr>
                  }
                </tbody>
              </Table>
            }
          </Container>
          <Container>
            {orderSum &&
              <>
                <div className='admin-date-container'>
                  <h6 className='admin-date-select'>Resumen de pedido:</h6>
                </div>
                <ListGroup>
                  {
                    orderSum?.map((item, index) => {
                      return (
                        <ListGroup.Item key={index}>{item.nombre} x{item.cantidad}</ListGroup.Item>
                      )
                    })
                  }
                </ListGroup>
              </>
            }
          </Container>
        </Layout >
        :
        <NotFound />
      }
    </>
  )
}