import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import { createContext, useEffect, useState } from "react";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";

export const Context = createContext();
export const CartContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  async function getCategories() {
    setLoading(true);
    const data = await fetch(`http://localhost:5500/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        return json;
      })
      .finally(() => {
        setLoading(false);
      });

    setData(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) {
    return (
      <div className="page-loader">
        <div class="loader"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Context.Provider value={[data, setData]}>
        <CartContext.Provider value={[cart, setCart]}>
          <div>
            <Toaster />
          </div>
          <div className="app">
            <Header />
            {/* remove later */}
            <div className="container">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </CartContext.Provider>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
