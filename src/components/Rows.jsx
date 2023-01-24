import { useBuildRows } from "../Hooks/useBuildRows";
const Rows = ({ data, columns }) => {
  const [rows] = useBuildRows(data, columns);

  return (
    <>
      {rows &&
        rows.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((t, j) => {
                return (
                  <th key={j}>
                    <div>
                      {i}....{t}
                    </div>
                  </th>
                );
              })}
            </tr>
          );
        })}
    </>
  );
};
export default Rows;
