import { useState, useEffect } from "react";
const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/photos",
  "https://jsonplaceholder.typicode.com/todos",
];

const useDifferentDatabase = (idurl, category) => {
  const [data, setData] = useState({
    received: [],
    new: [],
    selected: [],
    opened: [],
    removed: [],
    labels: [],
    postponed: [],
  });

  const [columns, setColumns] = useState(null);
  const loadDatabase = () => {
    fetch(urls[idurl])
      .then((response) => response.json())
      .then((response) => {
        setData({
          ...data,
          new: response.filter((t, i) => {
            return i > 50 && i < 100 && t;
          }),

          removed: response.filter((t, i) => {
            return i > 100 && i < 150 && t;
          }),

          postponed: response.filter((t, i) => {
            return i > 50 && i < 100 && t;
          }),
        });

        setColumns(
          Object.keys(response[0]).map((t) => {
            let d = { col: { title: t, disp: true } };

            return d;
          })
        );
      });
  };

  useEffect(() => {
    loadDatabase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  return [data[category], columns];
};

export { useDifferentDatabase };

/*


import { useReducer } from "react";
import { rows } from "../../../Data/data";
const useProducts = (str) => {
  const productReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case "single":
        return (state = rows.map((t) => t));
    }
  };
  const [products, dispatch] = useReducer(productReducer, str);
  //const [result, setResult] = useState(rows);

  return { products, dispatch };
};
export { useProducts };


*/
