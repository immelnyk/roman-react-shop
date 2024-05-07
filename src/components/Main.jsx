import { useState } from "react";
import CardList from "./CardList";
import Categories from "./Categories";

const Main = () => {
  const params = new URLSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    params.get("category") || null
  );

  const handleChangeCategory = (category) => {
    if (!activeCategory || activeCategory !== category) {
      setActiveCategory(category);
    } else {
      setActiveCategory(null);
    }
    params.set("category", category);
  };

  return (
    <main className="main">
      <Categories
        activeCategory={activeCategory}
        handleChangeCategory={handleChangeCategory}
      />
      <CardList activeCategory={activeCategory} />
    </main>
  );
};

export default Main;
