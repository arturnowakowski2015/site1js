import { useBuildColumns } from "../Hooks/useBuildColumns";

import { useState, useEffect } from "react";
import ColumnHeaderButton from "./ColumnHeaderButton";
const Columns = ({ tocompare, columns, onSort }) => {
  const [filteredColumns] = useBuildColumns(tocompare, columns);

  const [chevron, setChevron] = useState({
    atall: true,
    down: true,
    title: "",
    class: [],
  });
  useEffect(() => {
    filteredColumns &&
      filteredColumns.map((t, i) => {
        chevron.class[i] = "gray";
      });
    setChevron({
      atall: true,
      down: true,
      title: "",
      class: [...chevron.class],
    });
    //alert(JSON.stringify(chevron.class));
  }, [filteredColumns]);
  //
  return (
    <>
      {filteredColumns &&
        filteredColumns.map((column, i) => {
          return (
            <th key={i}>
              <ColumnHeaderButton
                chevron={chevron}
                className={chevron.class && chevron.class[i]}
                title={column.col.title}
                onClick={() => {
                  chevron.class[i] = "red";
                  setChevron({
                    atall: true,
                    down: !chevron.down,
                    title: column.col.title,
                    class: chevron.class,
                  });
                  onSort(i);
                }}
                onMouseOver={() => {
                  chevron.class[i] = "red";
                  setChevron({
                    ...chevron,
                    title: column.col.title,
                    class: chevron.class,
                  });
                }}
                onMouseOut={() => {
                  chevron.class[i] = "gray";
                  setChevron({
                    ...chevron,
                    class: chevron.class,
                    down: false,
                  });
                }}
              />
            </th>
          );
        })}
    </>
  );
};
export default Columns;
