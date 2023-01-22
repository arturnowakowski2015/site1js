import { useBuildColumns } from "../Hooks/useBuildColumns";
const Columns = ({ tocompare, columns }) => {
  const [filteredColumns] = useBuildColumns(tocompare, columns);

  return (
    <>
      {filteredColumns &&
        filteredColumns.map((column, i) => {
          return (
            <th key={i}>
              <div>{column.col.title}</div>
            </th>
          );
        })}
    </>
  );
};
export default Columns;
