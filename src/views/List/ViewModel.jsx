import { useEffect } from "react";
import { useProducts } from "../../Domain/UseCase/Product/useProducts";

const useView = () => {
  const { products, dispatch } = useProducts();

  const getProducts = () => {
    dispatch({ type: "single" });
  };
  return {
    products,
    getProducts,
  };
};

export { useView };
