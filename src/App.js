import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { Navbar, Nav } from "react-bootstrap";
import cartIcon from "./assets/cart.png";
import ControlledCarousel from "./components/ControlledCarousel";

function App() {
  const [products, setProducts] = useState(() => {
    // Try to get data from localStorage
    const savedProducts = localStorage.getItem("products");
    // If there is data, parse it to JSON, otherwise default to an empty array
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const addProduct = (newProduct) => {
    console.log("Product added to cart");
    setProducts([...products, { ...newProduct }]);
  };

  const removeProduct = (productId) => {
    console.log("Removing product from cart:", productId);

    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );

    // Update the products state
    setProducts(updatedProducts);
  };

  // Inside your component
  useEffect(() => {
    // Save the products to localStorage whenever they change
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">e-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/checkout">Checkout</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <img
                  src={cartIcon}
                  alt="Cart"
                  style={{ width: "35px", height: "35px" }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <hr />
        <Routes>
          <Route path="/" exact element={<ControlledCarousel />} />
          <Route
            path="/products"
            exact
            element={<ProductList onAddToCart={addProduct} />}
          />
          <Route path="/cart" element={<Cart products={products} />} />
          <Route
            path="/checkout"
            element={
              <Checkout products={products} onRemoveFromCart={removeProduct} />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetails products={products} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
