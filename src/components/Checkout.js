import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup, Row, Col, Button } from "react-bootstrap";

const Checkout = ({ products, onRemoveFromCart }) => {
  if (products.length === 0) {
    return <p>No products in cart.</p>;
  }

  const totalPrice = products.reduce(
    (acc, product) => acc + Number(product.price),
    0
  );

  return (
    <Container>
      <h1>Checkout</h1>
      <ListGroup>
        {products.map((product) => (
          <ListGroup.Item key={product.id}>
            <Row>
              <Col md={6}>{product.name}</Col>
              <Col md={3}>${product.price}</Col>
              <Col me={3}>
                <button onClick={() => onRemoveFromCart(product.id)}>
                  Remove from Cart
                </button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Row className="mt-3">
        <Col md={{ span: 3, offset: 9 }}>
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={{ span: 3, offset: 9 }}>
          <Button variant="primary" type="button">
            Proceed to Payment
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
