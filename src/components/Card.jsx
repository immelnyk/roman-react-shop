import { useNavigate } from "react-router-dom";
import { favIcon } from "../assets";
import "./Card.css";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";

const Card = ({ product }) => {
  const { _id: id, title, price, imgUrl } = product;

  const { addToCart } = useCart();

  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/product/${id}`);
      }}
      className="card"
    >
      <div>
        <div className="cart-favorite">
          <button>
            <img src={favIcon} alt="" />
          </button>
        </div>
        <div className="card-img">
          <img src={imgUrl || "https://placehold.co/160"} alt="card-img" />
        </div>
        <p className="card-title">{title}</p>
        <p className="card-price">${price}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
          toast.success("Added to cart", {
            duration: 2000,
          });
        }}
        className="card-btn"
      >
        Buy
      </button>
    </div>
  );
};

export default Card;
