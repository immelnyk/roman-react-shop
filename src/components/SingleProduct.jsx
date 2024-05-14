import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";
import { Carousel } from "react-responsive-carousel";

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  async function getProduct() {
    setLoading(true);

    const productId = `?id=${id}`;
    const data = await fetch(`http://localhost:5500/productById${productId}`, {
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

    setProduct(data.product);
  }

  useEffect(() => {
    getProduct();
  }, []);

  if (loading) {
    return <div class="loader"></div>;
  }

  const { color, title, price, imgUrl, description, characteristics } = product;
  const colorsArr = color.split(",");

  return (
    <div className="single-product">
      <div className="single-product-layout">
        <Carousel
          swipeable={true}
          emulateTouch={true}
          showStatus={false}
          showArrows={true}
          showIndicators={false}
        >
          {imgUrl.map((url, index) => (
            <div className="single-product-image">
              <img src={url || "https://placehold.co/160"} alt={title} />
            </div>
          ))}
        </Carousel>

        <div className="single-product-content">
          <h2 className="single-product-title">{title}</h2>
          <p className="single-product-price">₴{price}</p>
          <div className="single-product-colors">
            {colorsArr.map((color) => (
              <p
                style={{
                  "--color": color.trim().toLowerCase(),
                }}
                className="single-product-color"
              ></p>
            ))}
          </div>
          <button
            onClick={() => {
              addToCart(product);
              toast.success("Added to cart", {
                duration: 2000,
              });
            }}
            className="single-product-btn"
          >
            Buy
          </button>
          <p className="single-product-description">{description}</p>
        </div>
      </div>
      <div className="single-product-characteristics">
        <h3>
          <span>Characteristics</span>
        </h3>
        <ul>
          {Object.entries(characteristics).map(([key, value]) =>
            value ? (
              <li className="single-product-characteristic" key={key}>
                <span>{key}</span> <span>{value}</span>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default SingleProduct;
