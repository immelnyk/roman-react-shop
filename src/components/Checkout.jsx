import useCart from "../hooks/useCart";
import "./Checkout.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast("Checkout successful!", { type: "success" });
    clearCart();
  };

  return (
    <>
      <ToastContainer />

      <div className="checkout">
        <form onSubmit={handleSubmit} method="post">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Your name"
              id="name"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input
              placeholder="Your surname"
              id="surname"
              name="surname"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input
              placeholder="Your phone number"
              id="phone"
              name="phone"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Your email"
              id="email"
              name="email"
              type="text"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          <ul className="checkout-items">
            {cart.map((item) => (
              <li key={item._id}>
                <div className="checkout-item-img">
                  <img src={item.imgUrl} alt={item.title} />
                </div>
                <div className="checkout-item-info">
                  <p>{item.title}</p>
                  <p>₴{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Checkout;
