import "./Cart.css";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map((item, idx) => (
          <div
            className={`cart-item ${cart.length - 1 !== idx ? "divider" : ""}`}
          >
            <div
              onClick={() => removeFromCart(item._id)}
              className="cart-remove"
            >
              &times;
            </div>
            <div className="cart-item-img">
              <img src={item.imgUrl} alt={item.title} />
            </div>
            <div className="cart-item-info">
              <h4>{item.title}</h4>
              <p>₴{item.price}</p>
              <div className="cart-item-actions">
                <button onClick={() => decrementQuantity(item._id)}>-</button>{" "}
                <span>&times;{item?.quantity}</span>
                <button onClick={() => incrementQuantity(item._id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        {cart.length > 0 ? (
          <>
            <p>
              Totals: ₴
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </p>
            <Link to="/checkout" className="cart-checkout">
              Checkout
            </Link>
          </>
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
