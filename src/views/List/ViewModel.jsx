import { useProducts } from "../../Domain/UseCase/Product/useProducts";

const useView = () => {
  const { products, dispatch } = useProducts();
  const getProducts = () =>
    setTimeout(() => dispatch({ type: "single" }), 2200);

  return {
    products,
    getProducts,
  };
};

export { useView };
