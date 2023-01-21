import { useState, useEffect } from "react";
const useBuildRows = (data, columns) => {
  const [filteredRows, setFilteredRows] = useState([]);
  const buildRows = (row, i) => {
    alert("row     " + JSON.stringify(row));
  };

  useEffect(() => {
    data.map(buildRows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [filteredRows];
};
export { useBuildRows };
