import { useNavigate } from "react-router-dom";
import { favIcon } from "../assets";
import "./Card.css";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Card = ({ product }) => {
  const { _id: id, title, price, imgUrl } = product;

  const { addToCart } = useCart();

  console.log(imgUrl);

  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        // navigate(`/product/${id}`);
      }}
      className="card"
    >
      <div>
        <div className="cart-favorite">
          <button>
            <img src={favIcon} alt="" />
          </button>
        </div>
        <Carousel
          swipeable={true}
          emulateTouch={true}
          showStatus={false}
          showThumbs={false}
          showArrows={true}
          showIndicators={false}
          onClickItem={() => navigate(`/product/${id}`)}
        >
          {imgUrl.map((url, index) => (
            <div key={index} className="card-img">
              <img src={url || "https://placehold.co/160"} alt="" />
            </div>
          ))}
        </Carousel>

        <p className="card-title">{title}</p>
        <p className="card-price">₴{price}</p>
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
