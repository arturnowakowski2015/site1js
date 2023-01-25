import { useState } from "react";
const useSort = () => {
  const [sortDirection, setSortDirection] = useState(false);
  const [sortedData, setSortedData] = useState([]);
  const sortData = (i, data) => {
    setSortDirection(!sortDirection);
    let r = Object.keys(data[0]).filter((t) => {
      return data[0][t];
    });

    sortDirection
      ? data.sort(function (a, b) {
          return typeof a[r[i]] === "string"
            ? a[r[i]].localeCompare(b[r[i]])
            : a[r[i]] - b[r[i]];
        })
      : data.sort(function (a, b) {
          return typeof a[r[i]] === "string"
            ? b[r[i]].localeCompare(a[r[i]])
            : b[r[i]] - a[r[i]];
        });
    setSortedData(data);
    return sortData;
  };
  return { sortedData, sortData };
};
export { useSort };
