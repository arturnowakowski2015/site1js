import { useEffect } from "react";
import { useView } from "./ViewModel";

import Table from "../../components/Table";

export default function DataView({ category }) {
  const [data, columns, checkall, changeDatabase] = useView(1, category);
  useEffect(() => {
    changeDatabase();
  }, [category]);
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
        <Table data={data} checkall={checkall} columns={columns} />
      </div>
    </div>
  );
}

/*<List
        data={array}
        onRowClick={(id) => navigate(`/product/detail/${id}`)}
      />

      */
