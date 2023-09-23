import Data from "../Data";
import { MyContext } from "./Mycontext";
import React, { useState } from "react";

function GetContext(props) {
  const getDefaultCart = () => {
    let Cart = {};
    for (let i = 1; i <= Data.length; i++) {
      Cart[i] = 0;
    }
    return Cart;
  };
  const [cart, setcart] = useState(getDefaultCart);
  const [text, setText] = useState("");
  const [filtered, setfiltered] = useState();
  const [sum, setsum] = useState(0);
  const [alert1, setalert] = useState(null);

  // console.log(cart);

  const addToCart = (iteamId) => {
    setcart((prev) => ({ ...prev, [iteamId]: prev[iteamId] + 1 }));

    if (cart[iteamId] === 0) {
      setsum((prev) => prev + 1);
    }
  };

  const addedCart = (iteamId) => {
    if (cart[iteamId] === 0) {
      setcart((prev) => ({ ...prev, [iteamId]: prev[iteamId] + 1 }));
      setsum((prev) => prev + 1);
      alert("added successfully");
    } else {
      alert("alreday added in cart");
    }
  };

  const showalert = (message) => {
    setalert({ msg: message });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const removeFromCart = (iteamId) => {
    setcart((prev) => ({ ...prev, [iteamId]: prev[iteamId] - 1 }));
    if (cart[iteamId] === 1) {
      setsum((prev) => prev - 1);
    }
  };

  const updateCart = (iteamId, e) => {
    setcart((prev) => ({ ...prev, [iteamId]: e.target.value }));
  };

  const filteredProducts = (text) => {
    if (text) {
      setfiltered(
        Data.filter((product) => {
          return product.ProductName.toLowerCase().includes(text);
          // return product;
        })
      );
    }
  };

  return (
    <>
      <MyContext.Provider
        value={{
          cart,
          setcart,
          addToCart,
          removeFromCart,
          text,
          setText,
          filtered,
          updateCart,
          filteredProducts,
          addedCart,
          sum,
          alert,
        }}
      >
        {props.children}
      </MyContext.Provider>
    </>
  );
}
export default GetContext;
