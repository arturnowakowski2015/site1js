import React, { useState, useEffect } from "react";

import { useAnimation } from "./AnimationModel";
import List from "../../components/List";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  let navigate = useNavigate();

  const { array, animateLineOfProducts } = useAnimation();
  useEffect(() => {
    animateLineOfProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
