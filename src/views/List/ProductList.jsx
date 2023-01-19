import React, { useEffect } from "react";
import { useView } from "./ViewModel";
import List from "../../components/List";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  let navigate = useNavigate();
  const { products, getProducts } = useView();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
        data={products}
        onRowClick={(id) => navigate(`/product/detail/${id}`)}
      />
    </div>
  );
}
