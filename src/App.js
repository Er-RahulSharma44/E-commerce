import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import GetContext from "./CONTEXT/GetContext";
import Cart from "./components/Cart";
import Payment from "./components/Payment";



function App() {
  return (
    <GetContext>
      <div className="App">
        <BrowserRouter>
          <Navbar />
         
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GetContext>
  );
}

export default App;
