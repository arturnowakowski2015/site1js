import Tree from "../../components/Tree";
import "../scss/tree.scss";

import { tree } from "../../data/dummy";
export default function TreeView() {
  return (
    <div className="treemenu">
      <Tree tree={tree.children} />
    </div>
  );
}
