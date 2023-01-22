import { useState, useEffect } from "react";
import Columns from "./Columns";
import Rows from "./Rows";
export default function Table({ data = [], columns }) {
  const [selCol, setSelCol] = useState([]);
  //const data0 = data && Object.keys(data[0])

  useEffect(() => {
    setSelCol(columns);
  }, [columns]);

  return (
    <table>
      <thead className="th">
        <Columns tocompare={selCol} columns={columns} />
      </thead>
      <tbody>
        <Rows data={data} columns={selCol != undefined && selCol} />
      </tbody>
    </table>
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
