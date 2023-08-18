import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MyContext } from "../CONTEXT/Mycontext";

const Product = (props) => {
  const { Id, ProductName, Price, ImageUrl } = props.Data;
   const { cart, addToCart } = useContext(MyContext);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={ImageUrl} />
        <Card.Body>
          <Card.Title>
         
            &#x20B9; {`${Price} `}
            <small style={{ textDecoration: " line-through" }}>
              {`${Price + 2000}`}
            </small>
          </Card.Title>
          <p>{ProductName}</p>
        </Card.Body>

        <Card.Body>
          <Button
            variant="outline-success"
            onClick={() => addToCart(Id)}
          >{`Add to cart ${
            cart[Id.toString()] ? cart[Id.toString()] : ""
          }`}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
