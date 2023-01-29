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
    /// console.log("ssssssss                      " + JSON.stringify(data));
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
    let pid = findparentid(el.old[0].name) - 1;
    alert(pid);
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

    ///console.log(name + "::::" + JSON.stringify(data));

    tempid(el.old[0], tid);
    dispatch({ type: name, data: data });
  };
  const findparentid = (name) => {
    return data.findIndex((t) => {
      return t.name === name && t;
    });
  };
  let tid = 0;
  const tempid = (el) => {
    data.map((t) => {
      if (t.pid === el.id) {
        if (tid === 0) {
          alert(0);
          t.pid = tid;
          tid = t.id;
          t.name = t.name + "   tid";
        } else if (tid !== 0) {
          alert(1);
          tid = t.id;
          t.pid = el.id;
          t.name = t.name + "   " + el.name;
        }
        console.log(t.level + "::::" + JSON.stringify(data));
        tempid(t);
      }
      return t;
    });
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
