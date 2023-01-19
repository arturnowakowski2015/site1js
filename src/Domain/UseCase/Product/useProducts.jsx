import { useReducer } from "react";
import { rows } from "../../../Data/data";
const useProducts = (str) => {
  const productReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "single":
        return (state = rows.filter((t, i) => {
          return i === 0 && t;
        }));
    }
  };

  const [products, dispatch] = useReducer(productReducer, str);
  //const [result, setResult] = useState(rows);

  return { products, dispatch };
};
export { useProducts };
