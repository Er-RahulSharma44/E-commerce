import React, { useContext } from "react";
import Data from "../Data";
import Product from "./Product";
import { MyContext } from "../CONTEXT/Mycontext";
import Salebanner from "./Salebanner";


const Shop = () => {
  const { filtered } = useContext(MyContext);
  return (
    <>{ (filtered ===  undefined )
      &&
      <Salebanner/>}
      <div className="row mx-3">
        {(filtered === undefined ? Data : filtered).map((data) => {
          return (
            <div key={data.Id} className="col-md-4 my-3">
              <Product Data={data} />
            </div>
          );
        })}
        {(filtered === undefined ? Data : filtered).length === 0 && (
          <b>Iteam Not Found</b>
        )}
      </div>
    </>
  );
};

export default Shop;
