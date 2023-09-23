import React from "react";
import { useContext } from "react";
import { MyContext } from "../CONTEXT/Mycontext";
import Data from "../Data";
import Cartiteam from "./Cartiteam";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(MyContext);
  let sub = 0;

  const navigate = useNavigate();
  return (
    <div className="my-2 " style={{ minHeight: "66vh" }}>
      {Data.map((data) => {
        if (cart[data.Id] > 0) {
          return (
            <div key={data.Id} className="container">
              <Cartiteam Data={data} />
            </div>
          );
        }
      })}
      <div>
        {Data.forEach((data) => {
          // console.log(cart.)
          if (cart[data.Id] > 0) {
            sub += cart[data.Id] * data.Price;
          }
        })}
        {sub > 0 ? (
          <div className="container-lg">
            <div className="d-flex justify-content-evenly">
              <div>
                <Button
                  variant="success"
                  onClick={() => navigate("/")}
                  className=" mx-1"
                >
                  Continue Shoping
                </Button>
                <Button
                  variant="success"
                  onClick={() => navigate("/payment")}
                  className=" mx-1"
                >
                  Buy
                </Button>
              </div>
              <div>
                <b>Subtotal -</b> <b>{sub}/-</b>{" "}
              </div>
            </div>
          </div>
        ) : (
          <b>Cart is Empty &#128530;</b>
        )}
      </div>
    </div>
  );
};

export default Cart;
