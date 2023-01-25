import "../views/scss/tree.scss";
export default function TreeSettings({ tree, flattenarr, arrtotree }) {
  return (
    <>
      {tree &&
        tree.map((t, i) => {
          return (
            <div className="node" key={i}>
              <p
                className="label"
                draggable="true"
                onMouseDown={(e) => {
                  if (e.dataTransfer)
                    e.dataTransfer.setData("text", e.target.id);
                  arrtotree(flattenarr, -1, "parentId");
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer) e.dataTransfer.getData("text");
                }}
              >
                aa
                {t.name}
              </p>
              <TreeSettings
                tree={t.children}
                flattenarr={flattenarr}
                arrtotree={arrtotree}
              />
            </div>
          );
        })}
    </>
  );
}
