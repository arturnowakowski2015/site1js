import React, { useState, useEffect } from "react";
import { useView } from "./ViewModel";
import List from "../../components/List";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  let navigate = useNavigate();
  const { products, getProducts } = useView(0);

  const [array, setArray] = useState([]);
  let iteration = -1;
  const func2 = (sWord) => {
    iteration++;

    if (iteration < (products && products.length)) {
      setTimeout(() => {
        func2(sWord);
        setArray(
          products &&
            products.filter((t, i) => {
              if (i < iteration) return t;
            })
        );

        return array;
      }, 1000);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    func2("rrr");
  }, [products]);
  console.log(JSON.stringify(array));
  /*
  iteration = 0;
  func1();
  
      function  func1() {
          var result = func2("haha");
          alert(iteration + ":" + result);
      }
  
      function func2 (sWord) {
          iteration++;
  
          sWord = sWord + "lol";
          if ( iteration < 5 ) {
          
              func2( sWord);
          } else {
  
              return sWord;
          }
  
      return sWord;
      }

*/

  return (
    <div className="page">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <h2>Product List</h2>
        <Button title={"New"} onClick={() => navigate(`/product/new`)} />
      </div>
      <List
        data={array}
        onRowClick={(id) => navigate(`/product/detail/${id}`)}
      />
    </div>
  );
}
