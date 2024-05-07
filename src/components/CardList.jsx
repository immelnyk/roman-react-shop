import { useEffect, useState } from "react";
import "./CardList.css";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";

const CardList = ({ activeCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [params] = useSearchParams();
  const search = useDebounce(params.get("search") || "", 500);

  async function getProduct() {
    setLoading(true);

    const searchQuery = new URLSearchParams({
      ...(search ? { search } : {}),
      ...(activeCategory ? { category: activeCategory } : {}),
    });
    const data = await fetch(
      `http://localhost:5500/products?${searchQuery.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        return json;
      })
      .finally(() => {
        setLoading(false);
      });

    setProducts(data.products);
  }

  useEffect(() => {
    getProduct();
  }, [activeCategory, search]);

  if (loading) {
    return <div class="loader"></div>;
  }

  return (
    <ul className="card-list">
      {products.map((product) => {
        return (
          <li key={product._id}>
            <Card product={product} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
