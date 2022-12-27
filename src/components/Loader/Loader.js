import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Loader() {
  return (
    <div data-testid={"loader"} >
      <Container>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ height: '70vh' }}
        >
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      </Container>
    </div>
  )
}
