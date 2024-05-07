import "./Header.css";
import { cartIcon, logoImg, searchIcon } from "../assets";
import { Link, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext, Context } from "../App";

const Header = () => {
  const [cart] = useContext(CartContext);

  const [params, setParams] = useSearchParams();

  const itemsInCart = cart.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  return (
    <div>
      <header className="header container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src={logoImg} alt="logo" />
            </Link>
          </div>
          <div className="header-search">
            <img src={searchIcon} alt="" />
            <input
              value={params.get("search") || ""}
              onChange={(e) => setParams({ search: e.target.value })}
              type="text"
              placeholder="Пошук..."
            />
          </div>
          <div className="header-menu">
            <ul>
              <li className="cart-icon">
                {cart.length > 0 && (
                  <div className="cart-counter">{itemsInCart}</div>
                )}
                <Link to="/cart">
                  <img src={cartIcon} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="categories container">
        <p>Звільніть своє життя від обмежень – електроніка від інновацій!</p>
        {/* <ul>
          {categories.map((category) => (
            <li className="capitalize" key={category}>
              {category}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Header;

// const arr = function () {
//   return [1, 2];
// };
// const [a, b] = arr();

// const user = {
//     name: 'John',
//     age: 30
// }
// const { name, age } = user
