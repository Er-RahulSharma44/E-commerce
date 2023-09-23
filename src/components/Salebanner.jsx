import React from "react";
import Sale from "../assets/Sale.webp";
import sale2 from "../assets/sale2.jpg";
import sale3 from "../assets/amazon-sale.webp";

const Salebanner = () => {
  return (
    <div className="mt-2">
      <img src={Sale} className="img-fluid" alt="..."></img>
    </div>
    // <>
    //   <div id="carouselExample" class="carousel slide">
    //     <div class="carousel-inner">
    //       <div class="carousel-item active">
    //         <img src={sale2} class="d-block w-100" alt="..." />
    //       </div>
    //       <div class="carousel-item">
    //         <img src={Sale} class="d-block w-100" alt="..." />
    //       </div>
    //       <div class="carousel-item">
    //         <img src={sale3} class="d-block w-100" alt="..." />
    //       </div>
    //     </div>
    //     <button
    //       class="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExample"
    //       data-bs-slide="prev"
    //     >
    //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       class="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExample"
    //       data-bs-slide="next"
    //     >
    //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </>
  );
};

export default Salebanner;
