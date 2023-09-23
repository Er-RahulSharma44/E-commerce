import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { MyContext } from "../CONTEXT/Mycontext";
import "../cartiteam.css";

const Cartiteam = (props) => {
  const { Id, ProductName, Price, ImageUrl } = props.Data;
  const { addToCart, cart, removeFromCart, updateCart } = useContext(MyContext);
  return (
    <div className="container">
      <div className="card  mb-3  max-width " style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ImageUrl} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{ProductName}</h5>
              <p className="card-text">
                &#x20B9; {`${Price} `}
                <small style={{ textDecoration: " line-through" }}>
                  {`${Price + 2000}`}
                </small>
              </p>

              <div className="card-text container marginleft">
                <small className="input-group mb-3 text-body-secondary my-4 group">
                  <div className="input-group-prepend">
                    <Button
                      variant="outline-success"
                      onClick={() => addToCart(Id)}
                      className=" mx-1"
                    >
                      +
                    </Button>
                  </div>
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      value={cart[Id]}
                      onChange={(e) => updateCart(Id, e)}
                      style={{ width: "70px" }}
                    />
                  </div>
                  <div className="input-group-append">
                    <Button
                      variant="outline-success"
                      onClick={() => removeFromCart(Id)}
                      className=" mx-1"
                    >
                      -
                    </Button>
                  </div>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartiteam;
