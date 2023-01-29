import React, { useEffect, useState } from "react";
import TreeSettings from "../../components/TreeSettings";
import { tree } from "../../data/dummy";
import { useConvertTree } from "./useConvertTree";

const Settings = () => {
  //const [data, setData] = useState([]);
  const [el, setEl] = useState({});
  let { flattenarr, zerotreetoarr } = useConvertTree([]);
  const [data, dispatch] = React.useReducer(dataReducer, flattenarr);
  useEffect(() => {
    zerotreetoarr(flattenarr, tree.children, [0]);
    flattenarr.sort((a, b) => a.id - b.id);

    dispatch({ type: "start" });
    console.log("ssssssss                      " + JSON.stringify(data));
    //setData(flattenarr);
  }, []);

  const onMouseDown = (e, name) => {
    /// console.log(data);
    if (e.dataTransfer) e.dataTransfer.setData("text", e.target.id);
    let act = findel(name);
    setEl((el) => ({ ...el, old: act }));
    let newArr = findel(name);

    dispatch({ type: "add", newArr: newArr[0] });
  };
  const onDragLeave = (e) => {
    e.preventDefault();
  };
  const onDragOver = (e, name) => {
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.getData("text");
    setEl((el) => ({
      ...el,
      new: findel(name),
    }));
  };

  const findel = (el) => {
    return data.filter((t) => {
      return t.name === el;
    });
  };
  const onDrop = (name) => {
    el.old[0].name = el.old[0].name.slice(5);
    let oldidx = data.findIndex((t) => {
      return t.name === el.old[0].name && t;
    });
    let newidx = data.findIndex((t) => {
      return t.name === el.new[0].name && t;
    });
    console.log(oldidx + ":::" + newidx);
    setEl((el) => ({
      ...el,
      new: null,
    }));
    let oldl = el.old[0].level;
    console.log(el.new[0].name);
    el.new && el.new[0].name === "root"
      ? (el.old[0].level = 0)
      : el.new && el.new[0].name !== "root"
      ? (el.old[0].level = el.new[0].level + 1)
      : "";

    setEl((el) => ({
      ...el,
      new: el.new,
    }));
    let childid =
      data.findIndex((t) => {
        return t.name === el.old[0].name && t;
      }) + 1;
    console.log(JSON.stringify(data) + "    pop" + childid);
    for (let i = childid; i < data.length; i++) {
      if (data[i].level === oldl) break;
      alert(
        data[i].name +
          ":" +
          data[i].level +
          "//old/" +
          el.old[0].name +
          ":" +
          oldl
      );

      data[i].level = data[i].level - 1;
    }
    data.splice(
      data.findIndex((t) => {
        return t.name === el.old[0].name && t;
      }),
      1
    );
    data.splice(
      data.findIndex((t) => {
        return t.name === el.new[0].name && t;
      }) + 1,
      0,
      el.old[0]
    );

    dispatch({ type: name, data: data });
  };

  function dataReducer(state, action) {
    switch (action.type) {
      case "start":
        return [...state];
      case "add":
        return [
          ...state.map((t) => {
            if (action.newArr.id === t.id) t.name = ".XX  " + t.name;
            return t;
          }),
        ];
      case "root":
        return [...action.data];
      default:
        return [
          ...state.filter((t) => {
            return t.name.indexOf(".XX") === -1 && t;
          }),
        ];
    }
  }

  return (
    <TreeSettings
      id={el.new && el.new[0].id}
      name={el.old && el.old[0].name}
      data={data}
      onMouseDown={onMouseDown}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    />
  );
};
export default Settings;
