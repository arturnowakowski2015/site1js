import { useBuildRows } from "../Hooks/useBuildRows";
const Rows = ({ data, columns }) => {
  const [filteredRows] = useBuildRows(data, columns);
  return (
    <>
      {filteredRows &&
        filteredRows.map((row, i) => {
          return (
            <th key={i}>
              <div>{row}</div>
            </th>
          );
        })}
    </>
  );
};
export default Rows;
