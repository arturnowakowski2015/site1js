import { useEffect, useState } from "react";
import Navbar from "../Nav/Navbar";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="main-content">
      <Navbar />
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
