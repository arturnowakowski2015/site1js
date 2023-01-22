import { useBuildRows } from "../Hooks/useBuildRows";
const Rows = ({ data, columns }) => {
  const [rows] = useBuildRows(data, columns);
  alert(JSON.stringify(rows));

  return (
    <>
      {rows &&
        rows.map((row, i) => {
          return (
            <tr>
              {" "}
              {row.map((t) => {
                return (
                  <th key={i}>
                    <div>
                      {i}....{t}
                    </div>
                  </th>
                );
              })}{" "}
            </tr>
          );
        })}
    </>
  );
};
export default Rows;
