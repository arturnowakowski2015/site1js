import { useState } from "react";
import { useDifferentDatabase } from "../../Domain/Dates/useDifferentDatabase";

const useView = (idurl, actualcategory) => {
  const [data, columns] = useDifferentDatabase(idurl, actualcategory);
  const [checkall, setCheckall] = useState([0, 0]);
  const changeDatabase = () => {
    setCheckall([0, 0]);
  };

  return [data, columns, checkall, changeDatabase];
};

export { useView };

//dispatch({ type: "single" });
