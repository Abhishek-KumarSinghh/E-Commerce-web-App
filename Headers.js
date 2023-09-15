import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const Headers = () => {
  const { carts } = useSelector((state) => state.allCart);

  return (
    <>
      <Navbar style={{ height: "60px", background: "black", color: "white" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            <div style={{ display: "flex" }}>
                <ShoppingBagOutlinedIcon  style={{fontSize: "xx-large" }}/>
              <h3 className="text-light">E-Commerce Shop</h3>
            </div>
          </NavLink>

          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search products here.."
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Search</Button>
              </Col>
            </Row>
          </Form>

          <NavLink to="/cart" className="text-decoration-none text-light mx-2">
              <Badge badgeContent={carts.length} color="primary" size="large">
              <ShoppingCartIcon style={{fontSize: "xx-large" }}/>
              </Badge>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
