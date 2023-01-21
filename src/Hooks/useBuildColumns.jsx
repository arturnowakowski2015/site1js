/*
const useView = (idurl, actualcategory) => {
  const [data, columns] = useDifferentDatabase(idurl, actualcategory);
  const [checkall, setCheckall] = useState([0, 0]);
  const changeDatabase = () => {
    setCheckall([0, 0]);
  };

  return [data, checkall, columns, changeDatabase];
};



        let h = header.map((k, ii) => {
          return columns[ii] && columns[ii].col.disp === true ? (
            <th
              key={ii}
              className="tr"
              onClick={() => {
                setSort1({
                  sortDirection: sort1 != undefined ? !sort1.sortDirection : false,
                  t: "",
                  i: 0,
                });
                setChevron(!chevron);
              }}
            >
              <div onMouseOver={() => setI(ii)}>
                {chevron && ii === i ? (
                  <i className="fa fa-chevron-up"></i>
                ) : chevron === false && ii === i ? (
                  <i className="fa fa-chevron-down"></i>
                ) : null}
                {k}
              </div>
            </th>
          ) : null;
        });
    
        col.shift();
    
        return (
          <tr>
            <th className="selected">selected</th>
            {h}
          </tr>
        );
      };




*/
import { useState, useEffect } from "react";
const useBuildColumns = (columns, tocompare) => {
  const [filteredColumns, setFilteredColumns] = useState([]);
  useEffect(() => {
    setFilteredColumns(
      tocompare &&
        tocompare.map((k, ii) => {
          return columns[ii] && columns[ii].col.disp === true && k;
        })
    );
  }, []);
  alert(
    JSON.stringify(tocompare) + " col   " + JSON.stringify(filteredColumns)
  );
  return [filteredColumns];
};
export { useBuildColumns };
