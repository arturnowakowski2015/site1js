import TreeSettings from "../../components/TreeSettings";
import { useEffect } from "react";
import { tree } from "../../data/dummy";
import { useConvertTree } from "./useConvertTree";
const Settings = () => {
  let { flattenarr, treetoarr, arrtotree } = useConvertTree([]);
  useEffect(() => {
    treetoarr(flattenarr, tree.children, [0]);

    // treetoarr(tree.children, 0);
  }, []);
  return (
    <TreeSettings
      tree={tree.children}
      flattenarr={flattenarr}
      arrtotree={() => {
        arrtotree(flattenarr);
      }}
    />
  );
};
export default Settings;
