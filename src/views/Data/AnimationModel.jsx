import { useState } from "react";
import { useView } from "./ViewModel";
const useAnimation = (data) => {
  const [array, setArray] = useState([]);

  let iteration = -1;
  const animateLineOfData = () => {
    animate();
  };
  const animate = () => {
    iteration++;
    if (iteration < (data && data.length)) {
      setTimeout(() => {
        animate();
        setArray(
          data &&
            data.filter((t, i) => {
              if (i < iteration) return t;
              return t;
            })
        );

        return array;
      }, 1000);
    }
  };
  return { array, animateLineOfData };
};

export { useAnimation };
