import React from "react";

function Footer() {
  return (
    <footer className="ftr" style={{ height: "30%" }}>
      <div className="main">
        <div className="colm1">
          <h4>Company</h4>
          <div className="colmlist">
            <div>About Us</div>
            <div>Our Services</div>
            <div>Privacy Policy</div>
            <div>Affilate Progaram</div>
          </div>
        </div>
        <div className="colm2">
          <h4>Get Help</h4>
          <div className="colmlist">
            <div>FAQ</div>
            <div>Shipping</div>
            <div>Return</div>
            <div>Order Status</div>
          </div>
        </div>
        <div className="colm3">
          <h2>Follow Us</h2>
          <div className="iconList">
            <div>
              <i class="ri-facebook-circle-fill"></i>
            </div>
            <div>
              <i class="ri-instagram-fill"></i>
            </div>
            <div>
              <i class="ri-twitter-fill"></i>
            </div>
            <div>
              <i class="ri-mail-unread-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
