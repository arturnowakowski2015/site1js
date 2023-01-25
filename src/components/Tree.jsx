import "../views/scss/tree.scss";
export default function Tree({ tree }) {
  return (
    <>
      {tree &&
        tree.map((t, i) => {
          return (
            <div className="node" id="p" draggable="true" key={i}>
              <p
                className="label"
                onMouseDown={(e) => {
                  if (e.dataTransfer)
                    e.dataTransfer.setData("text", e.target.id);
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer) e.dataTransfer.getData("text");
                }}
              >
                {t.name}
              </p>
              <Tree tree={t.children} />
            </div>
          );
        })}
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
