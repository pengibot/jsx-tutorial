import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../data/products.json";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ match, products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id, 10);
  console.log(productId);
  const product = jsonData.products.find((product) => product.id === productId);

  console.log(product);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <Card style={{ width: "50rem", margin: "auto", marginTop: "20px" }}>
      <Card.Img
        variant="top"
        src={`${process.env.PUBLIC_URL}/assets/${product.image}`}
        alt={product.name}
        style={{ maxHeight: "200px", maxWidth: "200px" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Card.Text>{product.description}</Card.Text>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
