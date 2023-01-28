import "../views/scss/tree.scss";
export default function TreeSettings({
  id,
  name,
  data,
  onMouseDown,
  onDragOver,
  onDragLeave,
  onDrop,
}) {
  return (
    <>
      {data &&
        data.map((t, i) => {
          return (
            <div
              className="node"
              key={i}
              style={{ paddingLeft: t.level * 10 + "px" }}
            >
              <p
                className="label"
                draggable="true"
                onMouseDown={(e) =>
                  t.name !== "root" ? onMouseDown(e, t.name) : null
                }
                onDragOver={(e) =>
                  name !== undefined
                    ? onDragOver(e, t.name)
                    : (name = undefined)
                }
                onDragLeave={(e) => onDragLeave(e)}
                onDrop={() => onDrop(t.name)}
              >
                {t.name}
              </p>{" "}
              {id === i + 1 && t.name !== "root" && (
                <p
                  style={{
                    backgroundColor: "red",
                    marginLeft:
                      (t.level === 0 || t.name === "root" ? 10 : t.level * 10) +
                      "px",
                  }}
                >
                  {t.level}/{t.name}/{name}
                </p>
              )}{" "}
              {id === i + 1 && t.name === "root" && (
                <p
                  style={{
                    backgroundColor: "blue",
                    marginLeft: 0 + "px",
                  }}
                >
                  {t.level}/{t.name}/{name}
                </p>
              )}
            </div>
          );
        })}
    </>
  );
}
