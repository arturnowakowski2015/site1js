import "../views/scss/tree.scss";
export default function TreeSettings({
  tree,
  flattenarr,
  onMouseDown,
  onDragOver,
  onDragLeave,
  onDragEnd,
}) {
  return (
    <>
      {tree &&
        tree.map((t, i) => {
          return (
            <div className="node" key={i}>
              <p
                className="label"
                draggable="true"
                onMouseDown={(e) => onMouseDown(e, t.name)}
                onDragOver={(e) => onDragOver(e, t.name)}
                onDragLeave={(e) => onDragLeave(e)}
                onDragEnd={() => onDragEnd()}
              >
                {t.name}
              </p>

              <TreeSettings
                tree={t.children}
                onMouseDown={onMouseDown}
                onDragOver={onDragOver}
                flattenarr={flattenarr}
                onDragLeave={onDragLeave}
                onDragEnd={onDragEnd}
              />
            </div>
          );
        })}
    </>
  );
}
