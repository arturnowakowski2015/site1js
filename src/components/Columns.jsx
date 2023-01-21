import { useBuildColumns } from "../Hooks/useBuildColumns";
const Columns = ({ tocompare, columns }) => {
  const [filteredColumns] = useBuildColumns(columns, tocompare);
  return (
    <>
      {filteredColumns.map((column, i) => {
        return (
          <th key={i}>
            <div>{column}</div>
          </th>
        );
      })}
    </>
  );
};
export default Columns;
