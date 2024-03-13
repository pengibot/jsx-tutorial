import React from "react";
import jsonData from "../data/products.json";
import ProductDisplay from "./ProductDisplay";
import { Container, Row, Col } from "react-bootstrap";

const ProductList = ({ onAddToCart }) => {
  return (
    <Container>
      <Row>
        {jsonData.products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <ProductDisplay
              product={product}
              onAddToCart={() => onAddToCart(product)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
