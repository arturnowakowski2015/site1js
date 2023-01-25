import TreeSettings from "../../components/TreeSettings";
import { useEffect, useState } from "react";
import { tree } from "../../data/dummy";
import { useConvertTree } from "./useConvertTree";
let el = null;
const Settings = () => {
  const [treee, setTreee] = useState(tree.children);
  let { flattenarr, zero, arrtotree } = useConvertTree([]);
  useEffect(() => {
    zero(flattenarr, tree.children, [0]);
    setTreee(tree.children);
    // arrtotree(tree.children, 0);
  }, [flattenarr]);
  let mode = 0;
  const onMouseDown = (e, name) => {
    if (e.dataTransfer) e.dataTransfer.setData("text", e.target.id);
    el = findel(name);
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    mode = 0;
  };
  const onDragOver = (e, name) => {
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.getData("text");

    if (el && el[0] && el[0].name !== name) exchange(el, name);
  };
  const findel = (el) => {
    return flattenarr.filter((t) => {
      return t.name === el;
    });
  };
  const exchange = (el1, oldname) => {
    console.log(JSON.stringify(flattenarr));
    if (mode == 0) {
      let oldel = findel(oldname);
      let tempid = oldel[0].id;
      let temppid = oldel[0].pid;
      oldel[0].id = el1[0].id;
      oldel[0].pid = el1[0].pid;
      el1[0].id = tempid;
      el1[0].pid = temppid;

      flattenarr.splice(
        flattenarr.findIndex((t) => {
          return t.name === el1[0].name;
        }),
        1,
        oldel[0]
      );
      flattenarr.splice(
        flattenarr.findIndex((t) => {
          return t.name === oldel[0].name;
        }),
        1,
        el1[0]
      );

      mode = 1;
      setTreee(arrtotree(flattenarr));
      console.log(JSON.stringify(treee));
      flattenarr = [];
    }
  };

  return (
    <TreeSettings
      tree={treee}
      onMouseDown={onMouseDown}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      flattenarr={flattenarr}
    />
  );
};
export default Settings;
