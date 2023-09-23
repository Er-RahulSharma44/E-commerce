import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MyContext } from "../CONTEXT/Mycontext";

const Product = (props) => {
  const { Id, ProductName, Price, ImageUrl } = props.Data;
  const { addedCart, removeFromCart, cart } = useContext(MyContext);
  return (
    <div className="cardhover px-4" style={{ width: "100%" }}>
      <Card>
        <Card.Img variant="top" src={ImageUrl} style={{ height: "300px" }} />
        <Card.Body>
          <Card.Title>
            &#x20B9; {`${Price} `}
            <small style={{ textDecoration: " line-through" }}>
              {`${Price + 2000}`}
            </small>
          </Card.Title>
          <p>{ProductName}</p>

          <Button
            variant="outline-success"
            onClick={() => addedCart(Id)}
          >{`Add to cart ${
            cart[Id.toString()] ? cart[Id.toString()] : ""
          }`}</Button>
          {/* <Button
            variant="outline-success"
            onClick={() => removeFromCart(Id)}
          >{`Remove From Cart ${
            cart[Id.toString()] ? cart[Id.toString()] : ""
          }`}</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
