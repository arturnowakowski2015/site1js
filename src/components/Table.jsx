import { useState, useEffect, useMemo } from "react";
import { useSort } from "../Hooks/useSort";
import Columns from "./Columns";
import Rows from "./Rows";
import Pagination from "./Pagination";
let PageSize = 10;

export default function Table({ data = [], columns }) {
  const { sortedData, sortData } = useSort();
  const [currentPage, setCurrentPage] = useState(1);
  const [selCol, setSelCol] = useState([]);
  const on = (columnId) => {
    sortData(columnId, data);

    return sortedData;
  };
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (sortedData.length > 0)
      return sortedData.slice(firstPageIndex, lastPageIndex);
    else return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, columns, on]);

  //const data0 = data && Object.keys(data[0])

  useEffect(() => {
    setSelCol(columns);
  }, [columns]);

  return (
    <>
      {" "}
      <table>
        <thead>
          <tr>
            <Columns
              tocompare={selCol}
              columns={columns}
              onSort={(columnId) => on(columnId)}
            />
          </tr>
        </thead>
        <tbody>
          <Rows
            data={currentTableData}
            columns={selCol != undefined && selCol}
          />
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}

/*
 
 


        {data && data[0]
            ? buildHeader(Object.keys(data && data[0]), data && props.columns)
            : null}



          {currentPost.length >= 0 &&
          data &&
          searcheddata.length === data.length
            ? slicedSearchedText.map(buildRow)
            : stop === 0 && currentPost && currentPost.map(buildRow)
            ? stop === 0 && currentPost && currentPost.map(buildRow)
            : slicedSearchedText.map(buildRow)}



      <div style={{ padding: 20 }} >
            {data.map((item, i) => {
                return (
                    <div key={i}
                        style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", padding: 20, border: "1px solid black", margin: 10 }}
                        onClick={() => onRowClick(item.id)}
                    >
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                    </div> 
                )
            })}
        </div>



*/
