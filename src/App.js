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
  const [productsInCart, setProductsInCart] = useState(() => {
    const savedProducts = localStorage.getItem("productsInCart");
    if (savedProducts) {
      return JSON.parse(savedProducts);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const addProduct = (newProductInCart) => {
    setProductsInCart([
      ...productsInCart,
      { ...newProductInCart, id: productsInCart.length + 1 },
    ]);
    console.log("Product added to cart");
  };

  const removeProduct = (productId) => {
    console.log("Removing product from cart:", productId);

    const updatedProductsInCart = productsInCart.filter(
      (product) => product.id !== productId
    );
    setProductsInCart(updatedProductsInCart);
  };

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
              <Nav.Link href="/checkout">
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
          <Route path="/cart" element={<Cart products={productsInCart} />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                products={productsInCart}
                onRemoveFromCart={removeProduct}
              />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetails products={productsInCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
