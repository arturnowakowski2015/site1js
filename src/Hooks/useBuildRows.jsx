import { useState, useEffect } from "react";
const useBuildRows = (data, columns) => {
  const [rows, setRows] = useState([]);
  let temprows = [];
  const buildRows = (row) => {
    temprows = [
      ...temprows,
      row &&
        Object.keys(row).map((k, j) => {
          return (
            row !== undefined &&
            typeof row[k] !== "object" &&
            columns[j] &&
            columns[j].col.disp === true &&
            row[k]
          );
        }),
    ];
  };

  useEffect(() => {
    data.map(buildRows);
    setRows(temprows);
  }, [data]);

  return [rows];
};
export { useBuildRows };
