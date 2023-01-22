import { useEffect, useState } from "react";

import DataView from "../Data/DataView";
import Button from "../../components/Button";
import "../scss/style.scss";

const Home = () => {
  const [categories, setCategories] = useState({
    actual: { cat: "new", l: 0 },
    new: [],
    set: ["labels", "received", "new", "selected", "postponed", "removed"],
  });

  useEffect(() => {
    setCategories({
      ...categories,
      actual: { cat: "new", l: 0 },
    });
  }, []);
  return (
    <div className="main-content">
      <Button
        title={categories.actual.cat}
        onClick={() => {
          setCategories({
            ...categories,
            actual: { cat: "removed", l: 0 },
          });
        }}
      />
      <DataView category={categories.actual.cat} />
    </div>
  );
};

export default Home;
