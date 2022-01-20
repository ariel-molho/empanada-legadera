import React, { useEffect, useState } from 'react';
import "./OrderHistory.css"
import { AuthenticatedLayout as Layout } from "../_layout/authenticated/index";
import { Container, Table, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderHistory() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")))
  }, [sessionStorage.getItem("user")])

  const orders = [
    {
      key: '1',
      date: '13-nov-2021',
      total: 560,
      orderDetail: [{ sabor: "Carne", cantidad: 2 }, { sabor: "Jamon y Queso", cantidad: 1 }, { sabor: "Pollo", cantidad: 1 }],
    },
    {
      key: '2',
      date: '1-feb-2022',
      total: 420,
      orderDetail: [{ sabor: "Carne", cantidad: 1 }, { sabor: "Jamon y Queso", cantidad: 2 }],
    },
    {
      key: '3',
      date: '20-sep-2022',
      total: 420,
      orderDetail: [{ sabor: "Carne", cantidad: 1 }, { sabor: "Jamon y Queso", cantidad: 2 }],
    },
    {
      key: '4',
      date: '04-abr-2021',
      total: 560,
      orderDetail: [{ sabor: "Carne", cantidad: 2 }, { sabor: "Queso y Cebolla", cantidad: 1 }, { sabor: "Humita", cantidad: 1 }],
    },
  ];

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
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Total en $</th>
                <th>Pedido</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>{order.date}</td>
                    <td>{order.total}</td>
                    <td>
                      <ListGroup variant="flush">
                        {
                          order?.orderDetail?.map((item, index) => {
                            return (
                              <ListGroup.Item key={index} variant="dark">{item.sabor} x{item.cantidad}</ListGroup.Item>
                            )
                          })
                        }
                      </ListGroup>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    </Layout>
  )
}