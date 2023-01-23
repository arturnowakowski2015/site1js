import { useState, useEffect, useMemo } from "react";
import Columns from "./Columns";
import Rows from "./Rows";
import Pagination from "./Pagination";
let PageSize = 10;

export default function Table({ data = [], columns }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selCol, setSelCol] = useState([]);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, columns]);

  //const data0 = data && Object.keys(data[0])

  useEffect(() => {
    setSelCol(columns);
  }, [columns]);

  return (
    <>
      {" "}
      <table>
        <thead>
          <Columns tocompare={selCol} columns={columns} />
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




import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
ReactDOM.render(
  <PaginatedItems itemsPerPage={4} />,


























































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
