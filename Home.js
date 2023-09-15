import React, { useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import CardsData from "./CardData";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import Slider from "./Slider";

import Button from "@mui/material/Button";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Home = () => {
  const [cartData, setCartData] = useState(CardsData);
  const dispatch = useDispatch();

  // add to cart
  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };
  return (
    <>
      <Slider />
      <section className="iteam_section mt-4 container">
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cartData.map((element, index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />

                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.item}</h4>
                      <span>{element.rating}&nbsp;★</span>
                    </div>

                    <div className="lower_data d-flex justify-content-between ">
                      <h4>₹ {element.price}</h4>
                    </div>
          

                    <div className="last_data d-flex justify-content-between align-items-center">
                      <Button
                        variant="contained"
                        startIcon={< ShoppingCartRoundedIcon />}
                        onClick={() => send(element)}
                        size="large"
                        className=" mb-2"
                        fullWidth
                      >
                        Add item
                      </Button>
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
