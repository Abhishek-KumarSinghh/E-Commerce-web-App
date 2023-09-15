import React, { useEffect, useState } from "react";
import "./cartstyle.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeToCart,
  removeSingleIteams,
  emptycartIteam,
} from "../redux/features/cartSlice";
import toast from "react-hot-toast";

// import Button from "react-bootstrap/Button";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const CartDetails = () => {
  const { carts } = useSelector((state) => state.allCart);

  const [totalprice, setPrice] = useState(0);
  const [totalquantity, setTotalQuantity] = useState(0);

  const dispatch = useDispatch();

  // increse quantity of a particular product in cart
  const handleIncrement = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };

  // delete perticular iteam from cart
  const handleDecrement = (e) => {
    dispatch(removeToCart(e));
    toast.success("Item Deleted From Your Cart");
  };

  // decrease quantity of a particular product in cart
  const handleSingleDecrement = (e) => {
    dispatch(removeSingleIteams(e));
    toast.success("Item Remove From Your Cart");
  };

  // empty cart
  const emptycart = () => {
    dispatch(emptycartIteam());
    toast.success("Your Cart is Empty");
  };

  // calculate total price
  const total = () => {
    let totalprice = 0;
    carts.map((ele, ind) => {
      totalprice = ele.price * ele.qnty + totalprice;
    });
    setPrice(totalprice);
  };

  // calculate total quantity
  const countquantity = () => {
    let totalquantity = 0;
    carts.map((ele, ind) => {
      totalquantity = ele.qnty + totalquantity;
    });
    setTotalQuantity(totalquantity);
  };

  useEffect(() => {
    total();
  }, [total]);

  useEffect(() => {
    countquantity();
  }, [countquantity]);
  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">Cart Details</h5>
                {carts.length > 0 ? (
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={emptycart}
                    color="error"
                  >
                    Delete
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {carts.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart"></i>
                          <p>Your Cart Is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        {" "}
                        <span id="amount" className="amount">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((data, index) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <button
                                className="prdct-delete"
                                onClick={() => handleDecrement(data.id)}
                              >
                                <i className="fa fa-trash-alt"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src={data.imgdata} alt="" />
                              </div>
                            </td>
                            <td>
                              <div className="product-name">
                                <p>{data.item}</p>
                              </div>
                            </td>
                            <td>{data.price}</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={
                                    data.qnty <= 1
                                      ? () => handleDecrement(data.id)
                                      : () => handleSingleDecrement(data)
                                  }
                                >
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  className="qty-input-box"
                                  value={data.qnty}
                                  disabled
                                  name=""
                                  id=""
                                />
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={() => handleIncrement(data)}
                                >
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-right">
                              ₹ {data.qnty * data.price}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>
                        <Button variant="contained" color="success">
                          Check Out
                        </Button>
                      </th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>
                        Items In Cart <span className="ml-2 mr-2">:</span>
                        <span className="text-danger">{totalquantity}</span>
                      </th>
                      <th className="text-right">
                        Total Price<span className="ml-2 mr-2">:</span>
                        <span className="text-danger">₹ {totalprice}</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
