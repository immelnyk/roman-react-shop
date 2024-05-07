import { useContext } from "react";
import { CartContext } from "../App";

const updateLocalStorageCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const useCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = (product) => {
    const isInCart = cart.some((item) => item._id === product._id);

    if (isInCart) {
      const newCart = cart.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
      updateLocalStorageCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      updateLocalStorageCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item._id !== id);

    setCart(newCart);
    updateLocalStorageCart(newCart);
  };

  const incrementQuantity = (id) => {
    const newCart = cart.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setCart(newCart);
    updateLocalStorageCart(newCart);
  };

  const decrementQuantity = (id) => {
    const newCart = cart
      .map((item) => {
        if (item._id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      })
      .filter((item) => item.quantity > 0);

    setCart(newCart);
    updateLocalStorageCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    updateLocalStorageCart([]);
  };

  return {
    cart,
    addToCart,
    clearCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  };
};

export default useCart;
