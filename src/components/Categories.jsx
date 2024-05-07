import { useContext, useState } from "react";
import { getIconBasedOnCategory } from "../assets";
import "./Categories.css";
import { Context } from "../App";

const Categories = ({ activeCategory, handleChangeCategory }) => {
  const [categories] = useContext(Context);

  const categoriesArr = categories.map((c, idx) => ({
    id: idx,
    name: <span className="capitalize">{c}</span>,
    category: c,
    icon: (color) => getIconBasedOnCategory(c, color),
  }));

  return (
    <div className="categories-list-wrapper">
      <ul className="categories-list">
        {categoriesArr.map((category) => (
          <li
            onClick={() => {
              handleChangeCategory(category.category);
            }}
            className={`categories-list-item ${
              activeCategory === category.category ? "active" : ""
            }`}
            key={category.id}
          >
            {category
              .icon
              // activeCategory === category.category ? "#fff" : "#000"
              ()}
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
