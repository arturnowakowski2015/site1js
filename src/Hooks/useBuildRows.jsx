import { useState, useEffect } from "react";
const useBuildRows = (data, columns) => {
  const [filteredRows, setFilteredRows] = useState([]);

  const buildRows = (row) => {
    let tr =
      row &&
      columns != false &&
      Object.keys(row).map((k, j) => {
        return (
          row != undefined && typeof row[k] !== "object" && columns[j] && row[k]
        );
      });

    setFilteredRows(tr);
  };

  useEffect(() => {
    data.map(buildRows);
  }, [data]);

  return [filteredRows];
};
export { useBuildRows };
